// src/app/api/checkout/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface OrderLine {
  name: string;
  packageTitle: string;
  qty: number;
  price: number;
}

export async function POST(req: Request) {
  try {
    const { order, form, lang } = await req.json();

    // 1. Autenticación con Etomin
    const authRes = await fetch("https://api.etomin.com/api/v1/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: process.env.ETOMIN_USER,
        password: process.env.ETOMIN_PASSWORD,
      }),
    });

    if (!authRes.ok) throw new Error("Error de autenticación con la pasarela.");
    const authData = await authRes.json();
    const token = authData.token || authData.access_token; // Ajusta según la key de Etomin

    // 2. Procesamiento del Pago
    const paymentRes = await fetch("https://api.etomin.com/api/v1/sales", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        amount: order.total,
        currency: 484, // 484 = MXN
        reference: order.folio,
        customerInformation: {
          firstName: form.nombre.split(" ")[0],
          lastName: form.nombre.split(" ").slice(1).join(" ") || "",
          email: form.email,
          phone1: form.telefono,
          city: form.ciudad || "CDMX",
          address1: form.calle || "N/A",
          postalCode: form.cp || "00000",
          state: form.ciudad || "CDMX",
          country: "MX",
        },
        card: {
          number: form.tarjeta.replace(/\s/g, ""),
          expirationMonth: form.exp.split("/")[0],
          expirationYear: form.exp.split("/")[1],
          cvv: form.cvv,
        },
      }),
    });

    const paymentData = await paymentRes.json();

    // Verificamos si Etomin declinó el pago
    if (!paymentRes.ok || paymentData.status === "ERROR" || paymentData.status === "DECLINED") {
      throw new Error(paymentData.message || "El banco ha declinado la transacción.");
    }

    // 3. Envío de comprobantes con Resend
    const isEs = lang === "es";
    const subject = isEs
      ? `Confirmación de Pedido ${order.folio} - Lunbyte`
      : `Order Confirmation ${order.folio} - Lunbyte`;

    const linesHtml = order.lines
      .map(
        (l: OrderLine) =>
          `<tr>
            <td style="padding: 12px; border-bottom: 1px solid #333;">${l.qty}x ${l.name}</td>
            <td style="padding: 12px; border-bottom: 1px solid #333; text-align: right;">$${l.price.toFixed(2)}</td>
          </tr>`
      )
      .join("");

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; color: #FFF; background-color: #0A0A0A; padding: 40px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FF5A1F; text-transform: uppercase;">
          ${isEs ? "Despegue Autorizado" : "Liftoff Authorized"}
        </h2>
        <p>${isEs ? "Gracias por confiar en Lunbyte." : "Thank you for trusting Lunbyte."}</p>
        <p><strong>Folio:</strong> ${order.folio}</p>
        <p><strong>${isEs ? "Cliente" : "Customer"}:</strong> ${form.nombre}</p>
        
        <table style="width: 100%; margin-top: 20px; border-collapse: collapse; text-align: left;">
          <thead>
            <tr>
              <th style="padding: 10px; border-bottom: 2px solid #FF5A1F;">${isEs ? "Misión" : "Mission"}</th>
              <th style="padding: 10px; border-bottom: 2px solid #FF5A1F; text-align: right;">Total (MXN)</th>
            </tr>
          </thead>
          <tbody>${linesHtml}</tbody>
          <tfoot>
            <tr>
              <td style="padding: 12px; font-weight: bold; text-align: right;">Total Pagado:</td>
              <td style="padding: 12px; font-weight: bold; text-align: right; color: #FF5A1F;">$${order.total.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
        <p style="margin-top: 30px; font-size: 12px; color: #888;">
          ${isEs ? "Nos pondremos en contacto contigo en breve para el kickoff." : "We will contact you shortly for the kickoff."}
        </p>
      </div>
    `;

    // Enviar a cliente y administrador al mismo tiempo
    await resend.emails.send({
      from: "Lunbyte <cotizacion@lunbyte.com.mx>",
      to: [form.email, "cotizacion@lunbyte.com.mx"],
      subject: subject,
      html: emailHtml,
    });

    return NextResponse.json({ ok: true, transactionId: paymentData.id || "txn_approved" });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Error desconocido procesando el pago.";
    console.error("Error en checkout:", errorMessage);
    return NextResponse.json({ ok: false, error: errorMessage }, { status: 400 });
  }
}