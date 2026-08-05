"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function TerminosPage() {
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
          {isEs ? "Términos y " : "Terms and "}
          <span className="text-tangerine">{isEs ? "Condiciones" : "Conditions"}</span>
        </h1>

        <div className="space-y-10 text-[15px] leading-relaxed text-bone-dim/80">
          {isEs ? (
            <>
              <section>
                <p className="font-bold text-bone">LUNBYTE – ANTONE ARRIVALS, S.A. DE CV</p>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Aceptación y Alcance del Acuerdo</h2>
                <p>Bienvenido a LUNBYTE. Al acceder, navegar o utilizar el sitio web lunbyte.com.mx y cualquiera de nuestros servicios digitales, usted reconoce haber leído, comprendido y aceptado estar legalmente vinculado por estos Términos y Condiciones, así como por nuestro Aviso de Privacidad y demás políticas publicadas.</p>
                <p className="mt-2">Si no está de acuerdo con alguna disposición aquí establecida, le solicitamos abstenerse de utilizar nuestra plataforma y servicios.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Identificación del Prestador de Servicios</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Denominación social:</strong> ANTONE ARRIVALS, S.A. DE CV</li>
                  <li><strong>Nombre comercial:</strong> LUNBYTE</li>
                  <li><strong>Domicilio corporativo:</strong> Avenida Homero N° 404, Piso 5, Colonia Polanco V Sección, Alcaldía Miguel Hidalgo, C.P. 11560, Ciudad de México.</li>
                  <li><strong>Sitio web:</strong> lunbyte.com.mx</li>
                  <li><strong>Contacto comercial:</strong> cotizacion@lunbyte.com.mx</li>
                </ul>
                <p className="mt-4">Estos términos se rigen conforme a la legislación mercantil, civil y de protección al consumidor aplicable en la Ciudad de México y en los Estados Unidos Mexicanos.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Descripción de Servicios Ofrecidos</h2>
                <p>LUNBYTE es una empresa especializada en soluciones de desarrollo digital, ofreciendo:</p>
                <h3 className="font-bold text-bone mt-4 mb-2">Desarrollo de Videojuegos</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Creación de juegos móviles en 2D con mecánicas simples o intermedias</li>
                  <li>Desarrollo de experiencias 3D desde prototipos básicos hasta producciones avanzadas</li>
                  <li>Diseño de niveles, balanceo de juego y sistemas de progresión</li>
                  <li>Implementación de mecánicas multijugador (local o en línea)</li>
                  <li>Sistemas de monetización: anuncios, compras in-app, suscripciones</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Gamificación Empresarial</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Desarrollo de juegos interactivos para capacitación corporativa</li>
                  <li>Experiencias gamificadas personalizadas según objetivos organizacionales</li>
                  <li>Plataformas completas con sistemas de puntos, recompensas y métricas de desempeño</li>
                  <li>Integración con sistemas internos empresariales (CRM, ERP)</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Creación de Aplicaciones Móviles</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Aplicaciones híbridas para iOS y Android</li>
                  <li>Apps a la medida desde versiones básicas (3-5 pantallas) hasta soluciones complejas</li>
                  <li>Diseño UI/UX personalizado y experiencia de usuario optimizada</li>
                  <li>Integración de funcionalidades: notificaciones push, geolocalización, pagos en línea</li>
                  <li>Desarrollo de backends, APIs y sincronización de datos</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Servicios Complementarios</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ilustraciones digitales 2D para proyectos multimedia</li>
                  <li>Sprites y animaciones 2D de distintos niveles de complejidad</li>
                  <li>Modelado y animación 3D de personajes, escenarios y objetos</li>
                  <li>Diseño de interfaces (UI/UX) adaptadas a la identidad visual del proyecto</li>
                  <li>Optimización y actualización de aplicaciones existentes</li>
                  <li>Integraciones con plataformas externas (pasarelas de pago, CRM, redes sociales)</li>
                  <li>Conectividad con sistemas empresariales mediante APIs y webhooks</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Estructura de Inversión</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">Moneda y Denominación</h3>
                <p>Todos los precios se expresan en Pesos Mexicanos (MXN) más el 16% de Impuesto al Valor Agregado (IVA) conforme a la legislación fiscal vigente.</p>
                <h3 className="font-bold text-bone mt-4 mb-2">Métodos de Pago Aceptados</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Tarjetas de crédito y débito a través de nuestra plataforma en línea.</li>
                  <li>Otros métodos de pago disponibles y habilitados en el sitio al momento de la compra.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Obligaciones y Responsabilidades del Cliente</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">Información y Materiales</h3>
                <p>En los casos en que el servicio contratado lo requiera, el cliente se compromete a:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Proporcionar información clara y veraz sobre los requerimientos del proyecto.</li>
                  <li>Entregar los contenidos necesarios (ejemplo: textos, imágenes, logotipos, audios, videos) garantizando que cuenta con los derechos de uso correspondientes.</li>
                  <li>Facilitar credenciales de acceso a sistemas, servidores o plataformas, cuando sea indispensable para la correcta prestación del servicio.</li>
                  <li>Brindar retroalimentación y aprobaciones dentro de los plazos establecidos.</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Colaboración Activa</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Designar un responsable con poder de decisión para mantener comunicación constante.</li>
                  <li>Revisar y aprobar los entregables conforme al calendario acordado.</li>
                  <li>Reconocer que las demoras en aprobaciones o en la entrega de materiales podrán extender los plazos de entrega sin responsabilidad para LUNBYTE.</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Derechos de Propiedad Intelectual</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Garantizar que posee los derechos legales sobre todos los materiales proporcionados.</li>
                  <li>Abstenerse de solicitar desarrollos que infrinjan derechos de propiedad intelectual de terceros.</li>
                  <li>Mantener indemne a LUNBYTE frente a cualquier reclamo derivado de los contenidos proporcionados por el cliente.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Obligaciones y Compromisos de LUNBYTE</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">Desarrollo Profesional</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ejecutar proyectos con estándares profesionales de calidad</li>
                  <li>Utilizar tecnologías apropiadas según especificaciones técnicas acordadas</li>
                  <li>Mantener comunicación regular sobre avances del proyecto</li>
                  <li>Entregar productos funcionales conforme a lo contratado</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Confidencialidad</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Proteger información sensible del cliente bajo acuerdos de confidencialidad</li>
                  <li>No divulgar detalles de proyectos sin autorización expresa</li>
                  <li>Implementar medidas de seguridad para resguardo de información</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Plazos de Entrega</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Cumplir cronogramas establecidos salvo causas de fuerza mayor o demoras atribuibles al cliente</li>
                  <li>Notificar oportunamente cualquier situación que pueda afectar calendarios</li>
                  <li>Los plazos inician una vez recibidos todos los materiales e información necesaria</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Propiedad Intelectual y Derechos de Autor</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">Titularidad de Derechos</h3>
                <p>Al completarse el pago total del proyecto, el cliente adquiere los derechos de uso comercial sobre el producto final entregado (código ejecutable, aplicación compilada, activos visuales finales).</p>
                <p className="mt-2">LUNBYTE retiene:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Derechos sobre código fuente y metodologías propietarias (salvo acuerdo contrario específico)</li>
                  <li>Libertad para reutilizar técnicas, herramientas y conocimientos generales en proyectos futuros</li>
                  <li>Derecho a incluir el proyecto en portafolio comercial (previa notificación al cliente)</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Licencias de Terceros</h3>
                <p>Algunos proyectos pueden utilizar bibliotecas, frameworks o assets con licencias específicas. El cliente debe respetar los términos de dichas licencias, las cuales serán informadas durante el desarrollo.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Limitaciones y Exenciones de Responsabilidad</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">Alcance de Servicios</h3>
                <p>LUNBYTE se limita a desarrollar productos digitales según especificaciones acordadas. No garantizamos:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Resultados comerciales específicos (descargas, ventas, usuarios, ganancias)</li>
                  <li>Aprobación en tiendas de aplicaciones (Apple App Store, Google Play Store)</li>
                  <li>Compatibilidad perpetua con actualizaciones futuras de sistemas operativos o plataformas</li>
                  <li>Funcionamiento en dispositivos no especificados en requerimientos técnicos</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Contenidos de Terceros</h3>
                <p>No somos responsables por:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Caídas o mal funcionamiento de servicios externos integrados (APIs, servidores de terceros)</li>
                  <li>Cambios en políticas o términos de plataformas externas</li>
                  <li>Contenidos generados por usuarios finales de la aplicación</li>
                  <li>Transacciones económicas entre el cliente y sus usuarios finales</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Limitación de Daños</h3>
                <p>Nuestra responsabilidad máxima ante cualquier reclamación se limita al monto total pagado por el cliente para el proyecto específico en cuestión. LUNBYTE no será responsable por daños indirectos, lucro cesante, pérdida de datos o consecuencias derivadas del uso del producto entregado.</p>
                <h3 className="font-bold text-bone mt-4 mb-2">Seguridad y Ataques Cibernéticos</h3>
                <p>Aunque implementamos prácticas de seguridad estándar, ningún sistema es completamente invulnerable. No garantizamos inmunidad absoluta contra ataques informáticos, hackeos o brechas de seguridad. El cliente debe implementar sus propias medidas de protección y monitoreo.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Confidencialidad y No Divulgación</h2>
                <p>LUNBYTE se compromete a tratar con confidencialidad la información que los clientes proporcionen durante el uso de los servicios, incluyendo datos técnicos, comerciales o cualquier material sensible compartido.</p>
                <p className="mt-2">De igual forma, el cliente reconoce que deberá mantener la confidencialidad respecto a cualquier información no pública de LUNBYTE a la que tenga acceso.</p>
                <p className="mt-2">La obligación de confidencialidad se mantiene incluso después de finalizado el servicio, salvo en los siguientes casos:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Cuando la información ya sea de dominio público sin que exista incumplimiento de estas obligaciones.</li>
                  <li>Cuando exista obligación legal o requerimiento de una autoridad competente de divulgarla.</li>
                  <li>Cuando la divulgación haya sido autorizada de manera expresa por la parte titular de la información.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Uso Aceptable del Sitio Web</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">Conductas Prohibidas</h3>
                <p>Al utilizar lunbyte.com.mx, usted acepta NO:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Intentar acceder a áreas restringidas o sistemas administrativos</li>
                  <li>Realizar ingeniería inversa, descompilación o intentos de hackeo</li>
                  <li>Transmitir virus, malware o código malicioso</li>
                  <li>Utilizar bots, scrapers o herramientas automatizadas sin autorización</li>
                  <li>Reproducir, duplicar o copiar contenidos sin permiso expreso</li>
                  <li>Difamar, acosar o realizar actividades ilegales a través de la plataforma</li>
                  <li>Hacerse pasar por LUNBYTE, su personal o representantes</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Consecuencias por Violaciones</h3>
                <p>El incumplimiento de estas normas puede resultar en: bloqueo de acceso, cancelación de servicios, acciones legales y reclamación de daños y perjuicios.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Enlaces a Sitios Externos</h2>
                <p>lunbyte.com.mx puede contener vínculos hacia sitios web de terceros (proveedores, socios, redes sociales). Estos enlaces se proporcionan únicamente por conveniencia.</p>
                <p className="mt-2">LUNBYTE no controla ni asume responsabilidad sobre:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Contenido de sitios externos</li>
                  <li>Prácticas de privacidad de terceros</li>
                  <li>Exactitud o seguridad de recursos externos</li>
                  <li>Transacciones realizadas en plataformas ajenas</li>
                </ul>
                <p className="mt-2">Le recomendamos leer términos y políticas de cualquier sitio externo que visite.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Fuerza Mayor y Causas Fuera de Control</h2>
                <p>Ninguna parte será responsable por incumplimientos causados por circunstancias extraordinarias fuera de su control razonable, incluyendo:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Desastres naturales (terremotos, inundaciones, huracanes)</li>
                  <li>Contingencias sanitarias o pandemias</li>
                  <li>Actos de autoridad o cambios regulatorios abruptos</li>
                  <li>Fallas masivas de infraestructura de internet o telecomunicaciones</li>
                  <li>Conflictos armados, disturbios civiles o actos terroristas</li>
                  <li>Ciberataques masivos que afecten infraestructura crítica</li>
                </ul>
                <p className="mt-2">En tales casos, los plazos se extenderán razonablemente y se evaluará la viabilidad de continuar el proyecto.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Resolución de Controversias</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">Negociación Directa</h3>
                <p>Ante cualquier desacuerdo, las partes se comprometen inicialmente a resolver mediante comunicación directa y negociación de buena fe.</p>
                <h3 className="font-bold text-bone mt-4 mb-2">Mediación</h3>
                <p>Si la negociación fracasa, las partes intentarán resolver mediante mediación a través de la Procuraduría Federal del Consumidor (PROFECO) cuando el cliente califique como consumidor final.</p>
                <h3 className="font-bold text-bone mt-4 mb-2">Jurisdicción Aplicable</h3>
                <p>Para cualquier controversia que no pueda resolverse amigablemente, ambas partes se someten expresamente a las leyes aplicables y jurisdicción de los tribunales competentes de la Ciudad de México, renunciando a cualquier otro fuero que pudiera corresponderles.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Modificaciones a estos Términos</h2>
                <p>LUNBYTE se reserva el derecho de actualizar estos Términos y Condiciones en cualquier momento para reflejar cambios en:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Servicios ofrecidos o metodologías de trabajo</li>
                  <li>Requerimientos legales o regulatorios</li>
                  <li>Prácticas comerciales o estructuras de precios</li>
                </ul>
                <p className="mt-2">El uso continuado de nuestros servicios después de modificaciones constituye aceptación de los nuevos términos.</p>
                <p className="mt-2"><strong>Versión actual:</strong> Agosto 2026</p>
                <p>Consulte siempre la versión más reciente en: lunbyte.com.mx/terminos</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Información de Contacto</h2>
                <p>Para consultas, aclaraciones o notificaciones relacionadas con estos Términos y Condiciones:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li><strong>Correo electrónico:</strong> cotizacion@lunbyte.com.mx</li>
                  <li><strong>Domicilio:</strong> Avenida Homero N° 404, Piso 5, Colonia Polanco V Sección, Alcaldía Miguel Hidalgo, C.P. 11560, Ciudad de México.</li>
                  <li><strong>Horario de atención:</strong> Lunes a Viernes, 9:00 – 18:00 hrs (Tiempo del Centro de México)</li>
                </ul>
              </section>

              <section className="border-t-2 border-ink-line pt-8 mt-12">
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mb-4">Declaración Final de Aceptación</h2>
                <p>Al utilizar el sitio web lunbyte.com.mx, contactar a LUNBYTE, solicitar cotizaciones o contratar servicios, usted declara:</p>
                <ul className="space-y-2 mt-4 text-bone font-medium">
                  <li>✓ Ser mayor de 18 años o contar con capacidad legal para contratar.</li>
                  <li>✓ Haber leído y comprendido estos Términos y Condiciones en su totalidad.</li>
                  <li>✓ Aceptar estar legalmente vinculado por todas las disposiciones aquí establecidas.</li>
                  <li>✓ Contar con autoridad para comprometer a la empresa u organización que representa (cuando aplique).</li>
                </ul>
                <p className="mt-8 font-bold text-bone">ANTONE ARRIVALS, S.A. DE CV</p>
                <p>LUNBYTE – Transformamos Ideas en Experiencias Digitales</p>
                <p className="mt-4 text-sm opacity-60">Estos Términos y Condiciones constituyen un acuerdo legalmente vinculante entre usted y ANTONE ARRIVALS, S.A. DE CV. Consérvese para su referencia futura.</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <p className="font-bold text-bone">LUNBYTE – ANTONE ARRIVALS, S.A. DE CV</p>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Acceptance and Scope of the Agreement</h2>
                <p>Welcome to LUNBYTE. By accessing, browsing, or using the lunbyte.com.mx website and any of our digital services, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms and Conditions, as well as by our Privacy Notice and other published policies.</p>
                <p className="mt-2">If you do not agree with any provision set forth herein, we ask you to refrain from using our platform and services.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Identification of the Service Provider</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Corporate Name:</strong> ANTONE ARRIVALS, S.A. DE CV</li>
                  <li><strong>Commercial Name:</strong> LUNBYTE</li>
                  <li><strong>Corporate Address:</strong> Avenida Homero N° 404, Piso 5, Colonia Polanco V Sección, Alcaldía Miguel Hidalgo, C.P. 11560, Ciudad de México.</li>
                  <li><strong>Website:</strong> lunbyte.com.mx</li>
                  <li><strong>Commercial Contact:</strong> cotizacion@lunbyte.com.mx</li>
                </ul>
                <p className="mt-4">These terms are governed by commercial, civil, and consumer protection legislation applicable in Mexico City and the United Mexican States.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Description of Services Offered</h2>
                <p>LUNBYTE is a company specialized in digital development solutions, offering:</p>
                <h3 className="font-bold text-bone mt-4 mb-2">Video Game Development</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Creation of 2D mobile games with simple or intermediate mechanics</li>
                  <li>Development of 3D experiences from basic prototypes to advanced productions</li>
                  <li>Level design, game balancing, and progression systems</li>
                  <li>Implementation of multiplayer mechanics (local or online)</li>
                  <li>Monetization systems: ads, in-app purchases, subscriptions</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Corporate Gamification</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Development of interactive games for corporate training</li>
                  <li>Custom gamified experiences according to organizational objectives</li>
                  <li>Complete platforms with points, rewards, and performance metrics systems</li>
                  <li>Integration with internal corporate systems (CRM, ERP)</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Mobile Application Creation</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Hybrid applications for iOS and Android</li>
                  <li>Custom apps from basic versions (3-5 screens) to complex solutions</li>
                  <li>Custom UI/UX design and optimized user experience</li>
                  <li>Feature integration: push notifications, geolocation, online payments</li>
                  <li>Development of backends, APIs, and data synchronization</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Complementary Services</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>2D digital illustrations for multimedia projects</li>
                  <li>2D sprites and animations of varying complexity levels</li>
                  <li>3D modeling and animation of characters, environments, and objects</li>
                  <li>Interface design (UI/UX) adapted to the project's visual identity</li>
                  <li>Optimization and updating of existing applications</li>
                  <li>Integrations with external platforms (payment gateways, CRM, social networks)</li>
                  <li>Connectivity with business systems through APIs and webhooks</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Investment Structure</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">Currency and Denomination</h3>
                <p>All prices are expressed in Mexican Pesos (MXN) plus 16% Value Added Tax (VAT) in accordance with current tax legislation.</p>
                <h3 className="font-bold text-bone mt-4 mb-2">Accepted Payment Methods</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Credit and debit cards through our online platform.</li>
                  <li>Other payment methods available and enabled on the site at the time of purchase.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Obligations and Responsibilities of the Client</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">Information and Materials</h3>
                <p>In cases where the contracted service requires it, the client agrees to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Provide clear and truthful information about project requirements.</li>
                  <li>Deliver necessary contents (e.g., texts, images, logos, audios, videos) guaranteeing that they have the corresponding usage rights.</li>
                  <li>Provide access credentials to systems, servers, or platforms when essential for the proper provision of the service.</li>
                  <li>Provide feedback and approvals within established deadlines.</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Active Collaboration</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Designate a responsible person with decision-making power to maintain constant communication.</li>
                  <li>Review and approve deliverables according to the agreed schedule.</li>
                  <li>Acknowledge that delays in approvals or delivery of materials may extend delivery times without liability for LUNBYTE.</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Intellectual Property Rights</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Guarantee ownership of legal rights over all provided materials.</li>
                  <li>Refrain from requesting developments that infringe on third-party intellectual property rights.</li>
                  <li>Hold LUNBYTE harmless against any claim arising from contents provided by the client.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Obligations and Commitments of LUNBYTE</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">Professional Development</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Execute projects with professional quality standards.</li>
                  <li>Use appropriate technologies according to agreed technical specifications.</li>
                  <li>Maintain regular communication regarding project progress.</li>
                  <li>Deliver functional products as contracted.</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Confidentiality</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Protect sensitive client information under confidentiality agreements.</li>
                  <li>Not disclose project details without express authorization.</li>
                  <li>Implement security measures to safeguard information.</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Delivery Times</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Meet established schedules except for force majeure or delays attributable to the client.</li>
                  <li>Promptly notify any situation that may affect schedules.</li>
                  <li>Deadlines begin once all necessary materials and information are received.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Intellectual Property and Copyrights</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">Ownership of Rights</h3>
                <p>Upon full payment of the project, the client acquires commercial usage rights over the final delivered product (executable code, compiled application, final visual assets).</p>
                <p className="mt-2">LUNBYTE retains:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Rights over source code and proprietary methodologies (unless specifically agreed otherwise).</li>
                  <li>Freedom to reuse techniques, tools, and general knowledge in future projects.</li>
                  <li>Right to include the project in commercial portfolios (upon notification to the client).</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Third-Party Licenses</h3>
                <p>Some projects may use libraries, frameworks, or assets with specific licenses. The client must respect the terms of such licenses, which will be disclosed during development.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Limitations and Exemptions of Liability</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">Scope of Services</h3>
                <p>LUNBYTE is limited to developing digital products according to agreed specifications. We do not guarantee:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Specific commercial results (downloads, sales, users, profits).</li>
                  <li>Approval in application stores (Apple App Store, Google Play Store).</li>
                  <li>Perpetual compatibility with future operating system or platform updates.</li>
                  <li>Functionality on devices not specified in technical requirements.</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Third-Party Contents</h3>
                <p>We are not responsible for:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Downtime or malfunction of integrated external services (APIs, third-party servers).</li>
                  <li>Changes in policies or terms of external platforms.</li>
                  <li>Content generated by end-users of the application.</li>
                  <li>Economic transactions between the client and their end-users.</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Limitation of Damages</h3>
                <p>Our maximum liability for any claim is limited to the total amount paid by the client for the specific project in question. LUNBYTE will not be liable for indirect damages, loss of profits, loss of data, or consequences derived from the use of the delivered product.</p>
                <h3 className="font-bold text-bone mt-4 mb-2">Security and Cyber Attacks</h3>
                <p>Although we implement standard security practices, no system is completely invulnerable. We do not guarantee absolute immunity against cyber attacks, hacking, or security breaches. The client must implement their own protection and monitoring measures.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Confidentiality and Non-Disclosure</h2>
                <p>LUNBYTE commits to treating information provided by clients during the use of services with confidentiality, including technical, commercial data, or any sensitive material shared.</p>
                <p className="mt-2">Likewise, the client acknowledges they must maintain confidentiality regarding any non-public LUNBYTE information they access.</p>
                <p className="mt-2">The confidentiality obligation remains even after the service ends, except in the following cases:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>When the information is already in the public domain without a breach of these obligations.</li>
                  <li>When there is a legal obligation or requirement from a competent authority to disclose it.</li>
                  <li>When disclosure has been expressly authorized by the information's owner.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Acceptable Use of the Website</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">Prohibited Conducts</h3>
                <p>By using lunbyte.com.mx, you agree NOT to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Attempt to access restricted areas or administrative systems.</li>
                  <li>Perform reverse engineering, decompilation, or hacking attempts.</li>
                  <li>Transmit viruses, malware, or malicious code.</li>
                  <li>Use bots, scrapers, or automated tools without authorization.</li>
                  <li>Reproduce, duplicate, or copy content without express permission.</li>
                  <li>Defame, harass, or perform illegal activities through the platform.</li>
                  <li>Impersonate LUNBYTE, its personnel, or representatives.</li>
                </ul>
                <h3 className="font-bold text-bone mt-4 mb-2">Consequences for Violations</h3>
                <p>Failure to comply with these rules may result in: access blocking, service cancellation, legal action, and claims for damages.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Links to External Sites</h2>
                <p>lunbyte.com.mx may contain links to third-party websites (providers, partners, social networks). These links are provided solely for convenience.</p>
                <p className="mt-2">LUNBYTE does not control or assume responsibility for:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Content of external sites.</li>
                  <li>Privacy practices of third parties.</li>
                  <li>Accuracy or security of external resources.</li>
                  <li>Transactions made on third-party platforms.</li>
                </ul>
                <p className="mt-2">We recommend reading the terms and policies of any external site you visit.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Force Majeure and Causes Beyond Control</h2>
                <p>Neither party will be liable for defaults caused by extraordinary circumstances beyond their reasonable control, including:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Natural disasters (earthquakes, floods, hurricanes).</li>
                  <li>Health contingencies or pandemics.</li>
                  <li>Acts of authority or abrupt regulatory changes.</li>
                  <li>Massive failures of internet or telecommunications infrastructure.</li>
                  <li>Armed conflicts, civil unrest, or terrorist acts.</li>
                  <li>Massive cyber attacks affecting critical infrastructure.</li>
                </ul>
                <p className="mt-2">In such cases, deadlines will be reasonably extended, and the viability of continuing the project will be evaluated.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Dispute Resolution</h2>
                <h3 className="font-bold text-bone mt-4 mb-2">Direct Negotiation</h3>
                <p>In the event of any disagreement, the parties initially commit to resolving it through direct communication and good faith negotiation.</p>
                <h3 className="font-bold text-bone mt-4 mb-2">Mediation</h3>
                <p>If negotiation fails, the parties will attempt to resolve through mediation via the Federal Consumer Attorney's Office (PROFECO) when the client qualifies as an end consumer.</p>
                <h3 className="font-bold text-bone mt-4 mb-2">Applicable Jurisdiction</h3>
                <p>For any dispute that cannot be resolved amicably, both parties expressly submit to the applicable laws and jurisdiction of the competent courts of Mexico City, waiving any other jurisdiction that might correspond to them.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Modifications to these Terms</h2>
                <p>LUNBYTE reserves the right to update these Terms and Conditions at any time to reflect changes in:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Services offered or work methodologies.</li>
                  <li>Legal or regulatory requirements.</li>
                  <li>Business practices or pricing structures.</li>
                </ul>
                <p className="mt-2">Continued use of our services following modifications constitutes acceptance of the new terms.</p>
                <p className="mt-2"><strong>Current version:</strong> August 2026</p>
                <p>Always check the most recent version at: lunbyte.com.mx/terminos</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mt-8 mb-4">Contact Information</h2>
                <p>For inquiries, clarifications, or notifications related to these Terms and Conditions:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li><strong>Email:</strong> cotizacion@lunbyte.com.mx</li>
                  <li><strong>Address:</strong> Avenida Homero N° 404, Piso 5, Colonia Polanco V Sección, Alcaldía Miguel Hidalgo, C.P. 11560, Ciudad de México.</li>
                  <li><strong>Business Hours:</strong> Monday to Friday, 9:00 – 18:00 hrs (Central Mexico Time)</li>
                </ul>
              </section>

              <section className="border-t-2 border-ink-line pt-8 mt-12">
                <h2 className="font-display text-xl font-bold uppercase text-tangerine mb-4">Final Declaration of Acceptance</h2>
                <p>By using the lunbyte.com.mx website, contacting LUNBYTE, requesting quotes, or contracting services, you declare:</p>
                <ul className="space-y-2 mt-4 text-bone font-medium">
                  <li>✓ Being over 18 years of age or having the legal capacity to contract.</li>
                  <li>✓ Having read and understood these Terms and Conditions in their entirety.</li>
                  <li>✓ Agreeing to be legally bound by all provisions established herein.</li>
                  <li>✓ Having the authority to bind the company or organization you represent (when applicable).</li>
                </ul>
                <p className="mt-8 font-bold text-bone">ANTONE ARRIVALS, S.A. DE CV</p>
                <p>LUNBYTE – Transforming Ideas into Digital Experiences</p>
                <p className="mt-4 text-sm opacity-60">These Terms and Conditions constitute a legally binding agreement between you and ANTONE ARRIVALS, S.A. DE CV. Retain for future reference.</p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
