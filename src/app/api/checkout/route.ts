import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

// --- Interfaces de Tipado Estricto ---
interface CheckoutItemPayload {
  id: string;
  title: string;
  amount: number;
  quantity: number;
}

interface CustomerInformation {
  firstName: string;
  lastName: string;
  email: string;
  phone1: string;
  city: string;
  address1: string;
  postalCode: string;
  state: string;
  country: string;
}

interface CardInformation {
  cardNumber: string;
  cardholderName: string;
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
}

interface CheckoutRequestPayload {
  amount: number;
  subtotal: number;
  iva: number;
  reference: string;
  lang?: "es" | "en";
  customerInformation: CustomerInformation;
  cardInformation: CardInformation;
  items: CheckoutItemPayload[];
}

interface EtominSigninResponse {
  authToken?: string;
  token?: string;
  access_token?: string;
  message?: string;
  error?: string;
}

interface EtominTokenizerResponse {
  cardNumberToken?: string;
  message?: string;
  error?: string;
}

interface EtominSaleResponse {
  status?: string;
  message?: string;
  error?: string;
  transactionId?: string;
  authorizationNumber?: string;
}

interface CheckoutApiResponse {
  success: boolean;
  error?: string;
  status?: string;
  reference?: string;
  transactionId?: string;
  authorizationNumber?: string;
}

// --- Utilidades ---
const formatMXN = (val: number, lang: "es" | "en"): string =>
  new Intl.NumberFormat(lang === "es" ? "es-MX" : "en-US", {
    style: "currency",
    currency: "MXN",
  }).format(val);

export async function POST(
  request: Request
): Promise<NextResponse<CheckoutApiResponse>> {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const rawBodyText = await request.text();
    if (!rawBodyText) {
      return NextResponse.json(
        { success: false, error: "El cuerpo de la petición está vacío." },
        { status: 400 }
      );
    }

    const body: CheckoutRequestPayload = JSON.parse(rawBodyText);
    const {
      amount,
      subtotal,
      iva,
      reference,
      lang = "es",
      customerInformation,
      cardInformation,
      items,
    } = body;

    const etominUser = process.env.ETOMIN_USER;
    const etominPassword = process.env.ETOMIN_PASSWORD;
    const etominApiUrl = process.env.ETOMIN_API_URL || "https://pagos.etomin.com/api/v1";

    if (!etominUser || !etominPassword) {
      return NextResponse.json(
        {
          success: false,
          error: lang === "es"
            ? "Credenciales de Etomin no configuradas en el servidor (.env)."
            : "Etomin API credentials missing on server.",
        },
        { status: 500 }
      );
    }

    if (!cardInformation || !cardInformation.cardNumber) {
      return NextResponse.json(
        {
          success: false,
          error: lang === "es"
            ? "Faltan los datos bancarios de la tarjeta."
            : "Missing credit card details.",
        },
        { status: 400 }
      );
    }

    const baseHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
    };

    // ==========================================
    // 1. SIGNIN ETOMIN
    // ==========================================
    const signinRes = await fetch(`${etominApiUrl}/signin`, {
      method: "POST",
      headers: baseHeaders,
      body: JSON.stringify({ email: etominUser, password: etominPassword }),
    });

    const signinText = await signinRes.text();
    let signinData: EtominSigninResponse = {};
    try {
      signinData = signinText ? JSON.parse(signinText) : {};
    } catch {
      return NextResponse.json(
        { success: false, error: "Etomin /signin devolvió una respuesta inválida." },
        { status: 502 }
      );
    }

    const authToken = signinData.authToken || signinData.token || signinData.access_token;
    if (!authToken) {
      return NextResponse.json(
        {
          success: false,
          error: signinData.message || signinData.error || "Error de autenticación con Etomin.",
        },
        { status: 401 }
      );
    }

    const authHeaders = { ...baseHeaders, Authorization: `Bearer ${authToken}` };

    // ==========================================
    // 2. TOKENIZAR TARJETA
    // ==========================================
    const tokenizerRes = await fetch(`${etominApiUrl}/card/tokenizer`, {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({
        cardData: {
          cardNumber: cardInformation.cardNumber.replace(/\D/g, ""),
          cardholderName: cardInformation.cardholderName || customerInformation.firstName,
          expirationMonth: cardInformation.expirationMonth,
          expirationYear: cardInformation.expirationYear,
        },
      }),
    });

    const tokenizerText = await tokenizerRes.text();
    let tokenizerData: EtominTokenizerResponse = {};
    try {
      tokenizerData = tokenizerText ? JSON.parse(tokenizerText) : {};
    } catch {
      return NextResponse.json(
        { success: false, error: "Error de formato al tokenizar la tarjeta." },
        { status: 502 }
      );
    }

    if (!tokenizerData.cardNumberToken) {
      return NextResponse.json(
        {
          success: false,
          error: tokenizerData.message || tokenizerData.error || "No se pudo tokenizar la tarjeta.",
        },
        { status: 400 }
      );
    }

    // ==========================================
    // 3. PROCESAR VENTA
    // ==========================================
    const salePayload = {
      amount: Number(amount.toFixed(2)),
      currency: 484, // MXN
      reference: reference,
      customerInformation: {
        firstName: customerInformation.firstName,
        lastName: customerInformation.lastName || "",
        middleName: "",
        email: customerInformation.email,
        phone1: customerInformation.phone1,
        city: customerInformation.city,
        address1: customerInformation.address1,
        postalCode: customerInformation.postalCode,
        state: customerInformation.state,
        country: customerInformation.country || "MX",
        ip: request.headers.get("x-forwarded-for") || "127.0.0.1",
      },
      cardData: {
        cardNumberToken: tokenizerData.cardNumberToken,
        cvv: cardInformation.cvv,
      },
      items: items.map((i) => ({
        id: String(i.id),
        title: i.title,
        amount: Number(i.amount.toFixed(2)),
        quantity: i.quantity,
      })),
      redirectUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://lunbyte.com.mx/checkout",
    };

    const saleRes = await fetch(`${etominApiUrl}/sale`, {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify(salePayload),
    });

    const saleText = await saleRes.text();
    let saleData: EtominSaleResponse = {};
    try {
      saleData = saleText ? JSON.parse(saleText) : {};
    } catch {
      return NextResponse.json(
        { success: false, error: "El banco devolvió una respuesta ilegible al procesar el cobro." },
        { status: 502 }
      );
    }

    const statusUpper = (saleData.status || "").toUpperCase();
    if (!saleRes.ok || (statusUpper !== "APPROVED" && statusUpper !== "SUCCESS")) {
      const errorMsg =
        saleData.message ||
        saleData.error ||
        (lang === "es"
          ? `El pago no pudo procesarse. Estado: ${saleData.status || "DECLINADO"}`
          : `Payment could not be processed. Status: ${saleData.status || "DECLINED"}`);
      return NextResponse.json(
        { success: false, error: errorMsg },
        { status: saleRes.status || 400 }
      );
    }

    const transactionId = saleData.transactionId || reference;
    const authorizationNumber = saleData.authorizationNumber || "AUT-OK";

    // ==========================================
    // 4. ENVÍO DE CORREOS CON RESEND
    // ==========================================
    if (process.env.RESEND_API_KEY) {
      const isEs = lang === "es";
      const adminEmail = "cotizacion@lunbyte.com.mx";
      const customerEmail = customerInformation.email;

      const itemsHtmlTable = items
        .map(
          (item: CheckoutItemPayload) => `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #333; color: #FFF; font-size: 14px;">
            <strong>${item.title}</strong><br/>
            <span style="color: #888; font-size: 12px;">${isEs ? "Cantidad:" : "Quantity:"} ${item.quantity}</span>
          </td>
          <td style="padding: 10px; border-bottom: 1px solid #333; text-align: right; color: #FF5A1F; font-size: 14px; font-weight: bold;">
            ${formatMXN(item.amount * item.quantity, lang)}
          </td>
        </tr>`
        )
        .join("");

      try {
        await resend.emails.send({
          from: `Lunbyte <${adminEmail}>`,
          to: customerEmail,
          subject: isEs ? `Confirmación de compra — Lunbyte` : `Order Confirmation — Lunbyte`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0A0A0A; border-radius: 12px; color: #FFF;">
              <div style="background-color: #161616; padding: 24px; border-radius: 8px 8px 0 0; text-align: center; border-bottom: 2px solid #FF5A1F;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px;">Lunbyte</h1>
                <p style="color: #FF5A1F; margin: 5px 0 0; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">
                  ${isEs ? "Estudio de desarrollo" : "Development Studio"}
                </p>
              </div>
              <div style="background-color: #0A0A0A; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #333; border-top: none;">
                <h2 style="color: #FFF; font-size: 20px; margin-top: 0;">${isEs ? `¡Hola, ${customerInformation.firstName}!` : `Hello, ${customerInformation.firstName}!`}</h2>
                <p style="color: #CCC; font-size: 14px; line-height: 1.5;">
                  ${isEs 
                    ? `Tu despegue ha sido autorizado. El pago se procesó exitosamente con autorización: <strong style="color: #FF5A1F;">${authorizationNumber}</strong>.` 
                    : `Your liftoff has been authorized. The payment was successfully processed with auth number: <strong style="color: #FF5A1F;">${authorizationNumber}</strong>.`}
                </p>
                <h3 style="color: #FFF; font-size: 16px; border-bottom: 2px solid #333; padding-bottom: 8px; margin-top: 24px; text-transform: uppercase;">
                  ${isEs ? "Desglose de misión" : "Mission Summary"}
                </h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tbody>${itemsHtmlTable}</tbody>
                  <tfoot>
                    <tr><td style="padding: 8px 10px; color: #888; font-size: 14px;">Subtotal:</td><td style="padding: 8px 10px; text-align: right; color: #FFF; font-size: 14px;">${formatMXN(subtotal, lang)}</td></tr>
                    <tr><td style="padding: 8px 10px; color: #888; font-size: 14px;">${isEs ? "IVA (16%):" : "Tax (16%):"}</td><td style="padding: 8px 10px; text-align: right; color: #FFF; font-size: 14px;">${formatMXN(iva, lang)}</td></tr>
                    <tr><td style="padding: 12px 10px; font-weight: bold; color: #FFF; font-size: 16px; border-top: 1px dashed #333;">Total:</td><td style="padding: 12px 10px; text-align: right; font-weight: bold; color: #FF5A1F; font-size: 18px; border-top: 1px dashed #333;">${formatMXN(amount, lang)}</td></tr>
                  </tfoot>
                </table>
              </div>
            </div>`,
        });

        await resend.emails.send({
          from: `Sistema Lunbyte <${adminEmail}>`,
          to: adminEmail,
          subject: `🚨 ¡NUEVA VENTA! Autorización: ${authorizationNumber} (${formatMXN(amount, "es")})`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #333; border-radius: 8px; background-color: #0A0A0A; color: #FFF;">
              <h2 style="color: #FF5A1F; margin-top: 0; text-transform: uppercase;">¡Nueva venta aprobada!</h2>
              <p style="font-size: 14px; color: #CCC;">Se cobró una orden mediante <strong>Tarjeta Bancaria (Etomin)</strong>.</p>
              <div style="background-color: #161616; padding: 15px; border-radius: 6px; margin-bottom: 20px; border-left: 3px solid #FF5A1F;">
                <p style="margin: 0; font-size: 14px;"><strong>ID Transacción:</strong> ${transactionId}</p>
                <p style="margin: 5px 0 0; font-size: 14px;"><strong>Autorización:</strong> ${authorizationNumber}</p>
                <p style="margin: 5px 0 0; font-size: 14px;"><strong>Cliente:</strong> ${customerInformation.firstName} ${customerInformation.lastName} (${customerInformation.email})</p>
                <p style="margin: 5px 0 0; font-size: 14px;"><strong>Teléfono:</strong> ${customerInformation.phone1}</p>
                <p style="margin: 5px 0 0; font-size: 14px;"><strong>País:</strong> ${customerInformation.country}</p>
              </div>
              <h3 style="font-size: 16px; color: #FFF; text-transform: uppercase;">Misiones / Artículos:</h3>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">${itemsHtmlTable}</table>
            </div>`,
        });
      } catch (emailErr: unknown) {
        console.error("[Resend Excepción]:", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      status: statusUpper,
      reference: reference,
      transactionId: transactionId,
      authorizationNumber: authorizationNumber,
    });
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Error interno del servidor al procesar el pago.";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}