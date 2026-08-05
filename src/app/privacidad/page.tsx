"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function PrivacidadPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";

  return (
    <div className="relative min-h-[100dvh] bg-ink pt-[112px] md:pt-[140px] pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 dotgrid opacity-30" />
      <div className="shell relative max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim/45 transition-colors hover:text-tangerine mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
          {isEs ? "Volver al inicio" : "Back to home"}
        </Link>

        <h1 className="font-display text-[clamp(2rem,5vw,3.6rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em] text-bone mb-12">
          {isEs ? "Aviso de " : "Privacy "}
          <span className="text-tangerine">{isEs ? "Privacidad" : "Notice"}</span>
        </h1>

        <div className="space-y-10 text-[15px] leading-relaxed text-bone-dim/80">
          {isEs ? (
            <>
              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Responsable del Tratamiento de sus Datos</h2>
                <p>ANTONE ARRIVALS, S.A. DE CV, operando comercialmente como LUNBYTE, es la entidad responsable del resguardo y procesamiento de su información personal, en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento.</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li><strong>Domicilio fiscal:</strong> Avenida Homero N° 404, Piso 5 Colonia Polanco V Sección Alcaldía Miguel Hidalgo C.P. 11560, Ciudad de México.</li>
                  <li><strong>Sitio web:</strong> lunbyte.com.mx</li>
                  <li><strong>Contacto para privacidad:</strong> cotizacion@lunbyte.com.mx</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Categorías de Información que Procesamos</h2>
                <p>Dependiendo de su interacción con LUNBYTE, podemos recopilar diferentes tipos de información personal:</p>
                <h3 className="font-bold text-bone mt-4 mb-2">Información Personal Básica</h3>
                <p>Incluye su nombre, apellidos, correo electrónico, teléfono de contacto.</p>
                <h3 className="font-bold text-bone mt-4 mb-2">Información Técnica de Navegación</h3>
                <p>Datos generados automáticamente al visitar lunbyte.com.mx: protocolo de internet (IP), características del dispositivo utilizado, software de navegación, páginas consultadas, duración de sesiones, origen de referencia, y patrones de interacción mediante cookies y tecnologías de rastreo similares.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Propósitos del Procesamiento de su Información</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">Propósitos Esenciales para la Prestación de Servicios</h3>
                <p>Su información es indispensable para:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Establecer y mantener comunicación efectiva durante todo el ciclo del proyecto</li>
                  <li>Evaluar y responder a solicitudes de cotización para servicios de desarrollo</li>
                  <li>Ejecutar proyectos contratados: creación de videojuegos 2D/3D, desarrollo de aplicaciones móviles, implementación de sistemas de gamificación, diseño de arte digital, y servicios relacionados</li>
                  <li>Administrar aspectos financieros: procesamiento de pagos, emisión de facturas electrónicas y gestión de cuentas</li>
                  <li>Cumplir obligaciones derivadas de contratos de prestación de servicios</li>
                  <li>Ofrecer asistencia técnica, resolver incidencias y mantener canales de soporte</li>
                  <li>Gestionar entregas, actualizaciones y mantenimiento de productos digitales</li>
                  <li>Notificar sobre cambios o actualizaciones relevantes de proyectos en curso</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Propósitos Complementarios de Mejora</h3>
                <p>Con su autorización, utilizamos su información para:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Conocer su opinión mediante encuestas de experiencia y calidad</li>
                  <li>Desarrollar análisis de preferencias para personalizar su experiencia</li>
                  <li>Generar estadísticas internas para optimización de servicios</li>
                </ul>
                <p className="mt-4 text-sm bg-ink-raise p-4 border-l-2 border-tangerine"><strong>Manifestación de rechazo:</strong> Si prefiere NO recibir comunicaciones de marketing ni participar en estudios de mercado, envíe un mensaje a cotizacion@lunbyte.com.mx con el asunto: “EXCLUSIÓN MAILING”.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Compartición de Información con Terceros</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">Cuando Solicitamos su Autorización Expresa</h3>
                <p>Podemos compartir información con:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Colaboradores especializados en desarrollo de software y diseño digital</li>
                  <li>Servicios de infraestructura en la nube para almacenamiento seguro</li>
                  <li>Herramientas de análisis web y plataformas de comunicación digital</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Compartición sin Necesidad de Autorización Adicional</h3>
                <p>Según lo permite la legislación aplicable, compartimos datos con Autoridades gubernamentales ante requerimientos legales formales.</p>
                <p className="mt-2">Todos los receptores externos están contractualmente obligados a mantener estándares equivalentes de protección de datos y limitarse al uso autorizado.</p>
                <p className="mt-4 text-sm"><strong>Consentimiento tácito:</strong> Su silencio en los primeros 5 días hábiles posteriores a la disponibilidad de este aviso se interpretará como consentimiento para las transferencias que lo requieren.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Ejercicio de sus Derechos de Privacidad</h2>
                <p>Como titular de información personal, la legislación le garantiza:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li><strong>ACCESO:</strong> Conocer qué datos personales conservamos sobre usted</li>
                  <li><strong>RECTIFICACIÓN:</strong> Corregir información inexacta o desactualizada</li>
                  <li><strong>CANCELACIÓN:</strong> Solicitar eliminación de sus datos de nuestros sistemas</li>
                  <li><strong>OPOSICIÓN:</strong> Limitar el uso de su información para ciertos propósitos</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Procedimiento de Solicitud</h3>
                <p>Envíe comunicación formal a cotizacion@lunbyte.com.mx con título “EJERCICIO DERECHOS PRIVACIDAD” incluyendo:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Identificación completa: nombre, apellidos y correo electrónico activo</li>
                  <li>Comprobante de identidad oficial vigente (credencial de elector o pasaporte)</li>
                  <li>Si actúa mediante representante: poder notarial e identificación del apoderado</li>
                  <li>Especificación clara del derecho que desea ejercer y los datos involucrados</li>
                  <li>Cualquier elemento adicional que facilite ubicar su información en nuestros registros</li>
                </ul>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="border border-ink-line p-4">
                    <p className="font-bold text-bone text-sm">Plazos de respuesta:</p>
                    <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                      <li>Análisis y respuesta inicial: máximo 20 días hábiles</li>
                      <li>Implementación de solicitud procedente: 15 días hábiles posteriores a la notificación</li>
                      <li>Comunicación mediante el correo electrónico proporcionado en su solicitud</li>
                    </ul>
                  </div>
                  <div className="border border-ink-line p-4">
                    <p className="font-bold text-bone text-sm">Causas de improcedencia:</p>
                    <p className="mt-2 text-sm">Podremos negar su solicitud si: no acredita identidad adecuadamente, la información está siendo procesada por obligación legal, existen impedimentos contractuales vigentes, o afecta derechos de terceros.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Revocación de Consentimiento</h2>
                <p>Puede retirar su autorización para el tratamiento de sus datos en cualquier momento, considerando que:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>No tendrá efectos retroactivos sobre tratamientos ya realizados</li>
                  <li>Podría imposibilitar continuar prestando servicios contratados</li>
                  <li>El proceso sigue el mismo procedimiento que los derechos ARCO</li>
                  <li>Evaluaremos viabilidad según obligaciones legales y contractuales existentes</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Tecnologías de Rastreo en Nuestro Sitio Web</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">Cookies y Herramientas Similares</h3>
                <p>lunbyte.com.mx utiliza cookies (archivos de texto pequeños almacenados en su navegador) para:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Mantener preferencias de sesión y configuraciones personalizadas</li>
                  <li>Analizar comportamiento agregado de visitantes</li>
                  <li>Optimizar funcionalidad y rendimiento del sitio</li>
                  <li>Habilitar integraciones con plataformas externas (redes sociales, análisis)</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Tipos implementados:</h3>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li><strong>Cookies técnicas:</strong> Esenciales para navegación básica (no desactivables)</li>
                  <li><strong>Cookies analíticas:</strong> Medición de tráfico y patrones de uso</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Control de cookies:</h3>
                <p>Configure su navegador para rechazar, alertar o eliminar cookies. Note que deshabilitar cookies técnicas puede afectar funcionalidad del sitio.</p>
                <p className="mt-2 text-sm bg-ink-raise p-3"><strong>Desactivación:</strong> La mayoría de clientes de correo permiten bloquear imágenes automáticas. Los navegadores modernos incluyen opciones “No Rastrear” (Do Not Track).</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Protección de Información Sensible</h2>
                <p>LUNBYTE no solicita ni procesa intencionalmente datos sensibles (origen étnico, creencias religiosas, salud, preferencias sexuales, afiliación sindical, etc.) salvo que un proyecto específico lo requiera, en cuyo caso solicitaremos consentimiento explícito por escrito.</p>
              </section>

              <section className="border-t-2 border-ink-line pt-8 mt-12">
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mb-4">Modificaciones a este Aviso</h2>
                <p>Nos reservamos el derecho de actualizar este documento para reflejar cambios legislativos, operativos o en nuestros servicios. Las modificaciones estarán disponibles en:</p>
                <p className="mt-2"><strong>Sitio web:</strong> lunbyte.com.mx/privacidad</p>
                <p className="mt-2"><strong>Última actualización:</strong> Agosto 2026</p>
                
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Consentimiento</h2>
                <p>Al proporcionar sus datos personales por cualquier medio (formularios web, correo electrónico, comunicación telefónica, contratos), usted acepta expresamente haber leído, comprendido y acordado los términos del presente Aviso de Privacidad Integral.</p>
                <p className="mt-8 font-bold text-bone">ANTONE ARRIVALS, S.A. DE CV</p>
                <p>LUNBYTE – Innovación en Desarrollo Digital</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Data Controller</h2>
                <p>ANTONE ARRIVALS, S.A. DE CV, operating commercially as LUNBYTE, is the entity responsible for safeguarding and processing your personal information, in compliance with the Federal Law on Protection of Personal Data Held by Private Parties and its Regulations.</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li><strong>Fiscal address:</strong> Avenida Homero N° 404, Piso 5 Colonia Polanco V Sección Alcaldía Miguel Hidalgo C.P. 11560, Ciudad de México.</li>
                  <li><strong>Website:</strong> lunbyte.com.mx</li>
                  <li><strong>Privacy contact:</strong> cotizacion@lunbyte.com.mx</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Categories of Information We Process</h2>
                <p>Depending on your interaction with LUNBYTE, we may collect different types of personal information:</p>
                <h3 className="font-bold text-bone mt-4 mb-2">Basic Personal Information</h3>
                <p>Includes your first name, last name, email address, and contact phone number.</p>
                <h3 className="font-bold text-bone mt-4 mb-2">Technical Navigation Information</h3>
                <p>Data automatically generated when visiting lunbyte.com.mx: internet protocol (IP), characteristics of the device used, navigation software, pages viewed, session duration, referral source, and interaction patterns via cookies and similar tracking technologies.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Purposes of Processing Your Information</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">Essential Purposes for Service Provision</h3>
                <p>Your information is essential for:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Establishing and maintaining effective communication throughout the project lifecycle</li>
                  <li>Evaluating and responding to quote requests for development services</li>
                  <li>Executing contracted projects: 2D/3D video game creation, mobile app development, gamification systems implementation, digital art design, and related services</li>
                  <li>Managing financial aspects: payment processing, electronic invoice issuance, and account management</li>
                  <li>Fulfilling obligations derived from service provision contracts</li>
                  <li>Offering technical assistance, resolving issues, and maintaining support channels</li>
                  <li>Managing deliveries, updates, and maintenance of digital products</li>
                  <li>Notifying about relevant changes or updates to ongoing projects</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Complementary Purposes for Improvement</h3>
                <p>With your authorization, we use your information to:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Learn your opinion through experience and quality surveys</li>
                  <li>Develop preference analysis to personalize your experience</li>
                  <li>Generate internal statistics for service optimization</li>
                </ul>
                <p className="mt-4 text-sm bg-ink-raise p-4 border-l-2 border-tangerine"><strong>Opt-out declaration:</strong> If you prefer NOT to receive marketing communications or participate in market studies, send a message to cotizacion@lunbyte.com.mx with the subject: “EXCLUDE MAILING”.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Information Sharing with Third Parties</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">When We Request Your Express Authorization</h3>
                <p>We may share information with:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Collaborators specialized in software development and digital design</li>
                  <li>Cloud infrastructure services for secure storage</li>
                  <li>Web analytics tools and digital communication platforms</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Sharing Without the Need for Additional Authorization</h3>
                <p>As permitted by applicable law, we share data with government Authorities upon formal legal requirements.</p>
                <p className="mt-2">All external recipients are contractually obligated to maintain equivalent data protection standards and limit themselves to authorized use.</p>
                <p className="mt-4 text-sm"><strong>Tacit consent:</strong> Your silence within the first 5 business days after this notice becomes available will be interpreted as consent for transfers that require it.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Exercising Your Privacy Rights</h2>
                <p>As the owner of personal information, legislation guarantees you:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li><strong>ACCESS:</strong> Know what personal data we keep about you</li>
                  <li><strong>RECTIFICATION:</strong> Correct inaccurate or outdated information</li>
                  <li><strong>CANCELLATION:</strong> Request deletion of your data from our systems</li>
                  <li><strong>OPPOSITION:</strong> Limit the use of your information for certain purposes</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Request Procedure</h3>
                <p>Send formal communication to cotizacion@lunbyte.com.mx with the title “EXERCISE PRIVACY RIGHTS” including:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Full identification: first name, last name, and active email</li>
                  <li>Valid official identity proof (voter ID or passport)</li>
                  <li>If acting through a representative: power of attorney and representative's identification</li>
                  <li>Clear specification of the right you wish to exercise and the data involved</li>
                  <li>Any additional element that facilitates locating your information in our records</li>
                </ul>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="border border-ink-line p-4">
                    <p className="font-bold text-bone text-sm">Response times:</p>
                    <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                      <li>Analysis and initial response: maximum 20 business days</li>
                      <li>Implementation of valid request: 15 business days following notification</li>
                      <li>Communication via the email provided in your request</li>
                    </ul>
                  </div>
                  <div className="border border-ink-line p-4">
                    <p className="font-bold text-bone text-sm">Causes for inadmissibility:</p>
                    <p className="mt-2 text-sm">We may deny your request if: you do not adequately prove identity, the information is being processed due to legal obligation, there are current contractual impediments, or it affects third-party rights.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Revocation of Consent</h2>
                <p>You may withdraw your authorization for the processing of your data at any time, considering that:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>It will not have retroactive effects on processing already carried out</li>
                  <li>It could make it impossible to continue providing contracted services</li>
                  <li>The process follows the same procedure as ARCO rights</li>
                  <li>We will evaluate viability according to existing legal and contractual obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Tracking Technologies on Our Website</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">Cookies and Similar Tools</h3>
                <p>lunbyte.com.mx uses cookies (small text files stored in your browser) to:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Maintain session preferences and custom settings</li>
                  <li>Analyze aggregate visitor behavior</li>
                  <li>Optimize site functionality and performance</li>
                  <li>Enable integrations with external platforms (social networks, analytics)</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Types implemented:</h3>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li><strong>Technical cookies:</strong> Essential for basic navigation (cannot be disabled)</li>
                  <li><strong>Analytical cookies:</strong> Measurement of traffic and usage patterns</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Cookie control:</h3>
                <p>Configure your browser to reject, alert, or delete cookies. Note that disabling technical cookies may affect site functionality.</p>
                <p className="mt-2 text-sm bg-ink-raise p-3"><strong>Deactivation:</strong> Most email clients allow blocking automatic images. Modern browsers include “Do Not Track” options.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Protection of Sensitive Information</h2>
                <p>LUNBYTE does not request or intentionally process sensitive data (ethnic origin, religious beliefs, health, sexual preferences, union affiliation, etc.) unless a specific project requires it, in which case we will request explicit written consent.</p>
              </section>

              <section className="border-t-2 border-ink-line pt-8 mt-12">
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mb-4">Modifications to this Notice</h2>
                <p>We reserve the right to update this document to reflect legislative, operational, or service changes. Modifications will be available at:</p>
                <p className="mt-2"><strong>Website:</strong> lunbyte.com.mx/privacidad</p>
                <p className="mt-2"><strong>Last updated:</strong> August 2026</p>
                
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Consent</h2>
                <p>By providing your personal data through any means (web forms, email, telephone communication, contracts), you expressly accept having read, understood, and agreed to the terms of this Comprehensive Privacy Notice.</p>
                <p className="mt-8 font-bold text-bone">ANTONE ARRIVALS, S.A. DE CV</p>
                <p>LUNBYTE – Innovation in Digital Development</p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
