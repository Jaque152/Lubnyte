// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nombre, email, telefono, asunto, mensaje, lang } = await req.json();
    const isEs = lang === "es";

    // HTML del correo para el Administrador (cotizacion@lunbyte.com.mx)
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; color: #FFF; background-color: #0A0A0A; padding: 40px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FF5A1F; text-transform: uppercase;">Nuevo mensaje de contacto [Lunbyte]</h2>
        <p><strong>Nombre / Name:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono / Phone:</strong> ${telefono || "N/A"}</p>
        <p><strong>Asunto / Subject:</strong> ${asunto}</p>
        <hr style="border-color: #333; margin: 20px 0;" />
        <p><strong>Mensaje / Message:</strong></p>
        <p style="background: #161616; padding: 15px; border-left: 3px solid #FF5A1F;">${mensaje}</p>
      </div>
    `;

    // HTML del correo de confirmación para el Usuario (en su idioma)
    const userSubject = isEs ? "Hemos recibido tu mensaje - Lunbyte" : "We have received your message - Lunbyte";
    const userHtml = `
      <div style="font-family: Arial, sans-serif; color: #FFF; background-color: #0A0A0A; padding: 40px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FF5A1F; text-transform: uppercase;">
          ${isEs ? "¡Gracias por contactarnos!" : "Thanks for reaching out!"}
        </h2>
        <p>
          ${
            isEs
              ? `Hola <strong>${nombre}</strong>, hemos recibido tu mensaje sobre <em>"${asunto}"</em>. Te responderemos en menos de 24 horas.`
              : `Hi <strong>${nombre}</strong>, we have received your message regarding <em>"${asunto}"</em>. We will get back to you within 24 hours.`
          }
        </p>
        <hr style="border-color: #333; margin: 20px 0;" />
        <p style="font-size: 12px; color: #888;">
          Lunbyte — Studio de desarrollo de videojuegos y apps móviles.<br />
          cotizacion@lunbyte.com.mx
        </p>
      </div>
    `;

    // 1. Enviar aviso al Admin
    await resend.emails.send({
      from: "Lunbyte <cotizacion@lunbyte.com.mx>",
      to: ["cotizacion@lunbyte.com.mx"],
      replyTo: email,
      subject: `[Contacto Web] ${asunto}`,
      html: adminHtml,
    });

    // 2. Enviar confirmación al Usuario
    await resend.emails.send({
      from: "Lunbyte <cotizacion@lunbyte.com.mx>",
      to: [email],
      subject: userSubject,
      html: userHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    console.error("Error enviando correo de contacto:", error);
    return NextResponse.json({ ok: false, error: (error as Error).message }, { status: 400 });
  }
}