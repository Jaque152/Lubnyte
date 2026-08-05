"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function ReembolsosPage() {
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
          {isEs ? "Política de " : "Refund and "}
          <span className="text-tangerine">{isEs ? "Reembolsos y Devoluciones" : "Return Policy"}</span>
        </h1>

        <div className="space-y-10 text-[15px] leading-relaxed text-bone-dim/80">
          {isEs ? (
            <>
              <section>
                <p className="font-bold text-bone">LUNBYTE – ANTONE ARRIVALS, S.A. DE CV</p>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Naturaleza de Nuestros Servicios</h2>
                <p>LUNBYTE ofrece servicios profesionales de desarrollo digital personalizados, incluyendo creación de videojuegos, aplicaciones móviles, sistemas de gamificación empresarial, diseño gráfico y soluciones tecnológicas a la medida.</p>
                <p className="mt-4"><strong>Característica fundamental:</strong> Todos nuestros servicios son intangibles y se desarrollan específicamente según las necesidades particulares de cada cliente, lo que implica inversión de tiempo, recursos humanos especializados y tecnología desde el momento en que iniciamos cualquier proyecto.</p>
                <p className="mt-4">Debido a esta naturaleza personalizada y al esfuerzo invertido, los reembolsos y devoluciones se evalúan caso por caso conforme a los principios establecidos en esta política.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Principios Generales de Reembolso</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">Compromiso con la Satisfacción</h3>
                <p>En LUNBYTE nos esforzamos por cumplir las expectativas de nuestros clientes mediante comunicación constante, entregas parciales y validaciones durante el proceso de desarrollo. Nuestro objetivo es que cada proyecto culmine exitosamente sin necesidad de reembolsos.</p>
                <h3 className="font-bold text-bone mt-4 mb-2">Transparencia y Buena Fe</h3>
                <p>Todas las decisiones sobre reembolsos se toman con criterios de equidad, transparencia y buena fe, buscando soluciones justas para ambas partes.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Servicios No Reembolsables</h2>
                <p>Los siguientes conceptos no aplican para reembolso:</p>
                
                <h3 className="font-bold text-bone mt-4 mb-2">Servicios concluidos o aprobados</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Fases, módulos o entregables ya aceptados por el cliente.</li>
                  <li>Consultorías, reuniones o asesorías realizadas.</li>
                  <li>Capacitaciones impartidas o sesiones completadas.</li>
                </ul>

                <h3 className="font-bold text-bone mt-4 mb-2">Gastos específicos de proyecto</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Licencias de software adquiridas exclusivamente para el proyecto.</li>
                  <li>Suscripciones de terceros contratadas para el desarrollo.</li>
                  <li>Recursos digitales adquiridos de terceros (ilustraciones, música, modelos 3D, etc.).</li>
                  <li>Costos de publicación en tiendas de aplicaciones (Apple App Store, Google Play).</li>
                  <li>Honorarios de especialistas externos vinculados al proyecto.</li>
                </ul>

                <h3 className="font-bold text-bone mt-4 mb-2">Servicios adicionales ya ejecutados</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Optimizaciones o actualizaciones implementadas.</li>
                  <li>Integraciones con sistemas externos completadas.</li>
                  <li>Diseños, prototipos o mockups ya aprobados.</li>
                  <li>Servicios de hosting, dominios o infraestructura activados.</li>
                </ul>

                <h3 className="font-bold text-bone mt-4 mb-2">Causas ajenas a LUNBYTE</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Cambios de opinión después de aprobaciones previas.</li>
                  <li>Modificación de estrategia comercial o empresarial del cliente.</li>
                  <li>Pérdida de interés o cambio de prioridades no atribuibles a LUNBYTE.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Proceso para Solicitar Reembolso</h2>
                <ul className="space-y-4">
                  <li><strong>1.- Solicitud:</strong> Enviar un correo a cotizacion@lunbyte.com.mx con asunto “Solicitud de Reembolso” incluyendo datos de contacto, referencia de compra y motivos detallados.</li>
                  <li><strong>2.- Confirmación:</strong> LUNBYTE confirmará la recepción de la solicitud en un plazo máximo de 3 días hábiles.</li>
                  <li><strong>3.- Evaluación:</strong> Nuestro equipo revisará el estado del proyecto, el historial de comunicaciones y las condiciones aplicables a esta política. Plazo de análisis: hasta 10 días hábiles para proyectos simples y hasta 20 días hábiles para proyectos complejos.</li>
                  <li><strong>4.- Resolución:</strong> LUNBYTE notificará la decisión final indicando si procede o no el reembolso, el monto aplicable (cuando corresponda) y la forma de devolución.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Formas y Tiempos de Reembolso</h2>
                <ul className="space-y-4">
                  <li><strong>1.- Método de devolución:</strong> Todos los reembolsos aprobados se procesarán exclusivamente a la misma tarjeta bancaria utilizada en la compra.</li>
                  <li><strong>2.- Tiempo de reflejo:</strong> Una vez autorizado por LUNBYTE, el reembolso será tramitado de inmediato; sin embargo, el tiempo en que el monto se vea reflejado dependerá directamente de las políticas y plazos del banco emisor, pudiendo tardar entre 15 y 30 días hábiles.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Atención a Inconformidades</h2>
                <p>Puede escribir a cotizacion@lunbyte.com.mx El consumidor conserva su derecho a presentar quejas ante la Procuraduría Federal del Consumidor (PROFECO) y a utilizar mecanismos de conciliación.</p>
              </section>

              <section className="border-t-2 border-ink-line pt-8 mt-12">
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mb-4">Cambios a esta Política</h2>
                <p>Publicaremos cualquier modificación en el sitio con su fecha de actualización. Los cambios no afectarán solicitudes ya en trámite.</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <p className="font-bold text-bone">LUNBYTE – ANTONE ARRIVALS, S.A. DE CV</p>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Nature of Our Services</h2>
                <p>LUNBYTE offers professional customized digital development services, including video game creation, mobile applications, corporate gamification systems, graphic design, and tailored technological solutions.</p>
                <p className="mt-4"><strong>Fundamental characteristic:</strong> All our services are intangible and developed specifically according to the particular needs of each client, which implies an investment of time, specialized human resources, and technology from the moment we start any project.</p>
                <p className="mt-4">Due to this personalized nature and the effort invested, refunds and returns are evaluated on a case-by-case basis in accordance with the principles established in this policy.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">General Refund Principles</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">Commitment to Satisfaction</h3>
                <p>At LUNBYTE we strive to meet our clients' expectations through constant communication, partial deliveries, and validations during the development process. Our goal is for every project to conclude successfully without the need for refunds.</p>
                <h3 className="font-bold text-bone mt-4 mb-2">Transparency and Good Faith</h3>
                <p>All decisions regarding refunds are made with criteria of fairness, transparency, and good faith, seeking fair solutions for both parties.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Non-Refundable Services</h2>
                <p>The following concepts do not apply for a refund:</p>
                
                <h3 className="font-bold text-bone mt-4 mb-2">Completed or Approved Services</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Phases, modules, or deliverables already accepted by the client.</li>
                  <li>Consultations, meetings, or advisory sessions held.</li>
                  <li>Training provided or completed sessions.</li>
                </ul>

                <h3 className="font-bold text-bone mt-4 mb-2">Project-Specific Expenses</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Software licenses acquired exclusively for the project.</li>
                  <li>Third-party subscriptions contracted for development.</li>
                  <li>Digital resources acquired from third parties (illustrations, music, 3D models, etc.).</li>
                  <li>Publishing costs in app stores (Apple App Store, Google Play).</li>
                  <li>Fees of external specialists linked to the project.</li>
                </ul>

                <h3 className="font-bold text-bone mt-4 mb-2">Additional Services Already Executed</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Optimizations or updates implemented.</li>
                  <li>Integrations with external systems completed.</li>
                  <li>Designs, prototypes, or mockups already approved.</li>
                  <li>Hosting, domains, or infrastructure services activated.</li>
                </ul>

                <h3 className="font-bold text-bone mt-4 mb-2">Causes Unrelated to LUNBYTE</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Changes of mind after previous approvals.</li>
                  <li>Modification of the client's commercial or business strategy.</li>
                  <li>Loss of interest or change of priorities not attributable to LUNBYTE.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Process to Request a Refund</h2>
                <ul className="space-y-4">
                  <li><strong>1.- Request:</strong> Send an email to cotizacion@lunbyte.com.mx with the subject “Refund Request” including contact details, purchase reference, and detailed reasons.</li>
                  <li><strong>2.- Confirmation:</strong> LUNBYTE will confirm receipt of the request within a maximum of 3 business days.</li>
                  <li><strong>3.- Evaluation:</strong> Our team will review the project status, communication history, and conditions applicable to this policy. Analysis period: up to 10 business days for simple projects and up to 20 business days for complex projects.</li>
                  <li><strong>4.- Resolution:</strong> LUNBYTE will notify the final decision indicating whether the refund proceeds, the applicable amount (when appropriate), and the refund method.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Refund Methods and Times</h2>
                <ul className="space-y-4">
                  <li><strong>1.- Refund method:</strong> All approved refunds will be processed exclusively to the same bank card used for the purchase.</li>
                  <li><strong>2.- Reflection time:</strong> Once authorized by LUNBYTE, the refund will be processed immediately; however, the time it takes for the amount to be reflected will depend directly on the policies and deadlines of the issuing bank, which may take between 15 and 30 business days.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Grievance Handling</h2>
                <p>You may write to cotizacion@lunbyte.com.mx. The consumer retains their right to file complaints with the Federal Consumer Attorney's Office (PROFECO) and to use conciliation mechanisms.</p>
              </section>

              <section className="border-t-2 border-ink-line pt-8 mt-12">
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mb-4">Changes to this Policy</h2>
                <p>We will publish any modifications on the site with their update date. Changes will not affect requests already in process.</p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
