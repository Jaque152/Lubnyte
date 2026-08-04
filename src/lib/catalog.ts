export const IVA_RATE = 0.16;

export type Tier = {
  id: string;
  name: string;
  price: number;
  blurb: string;
};

export type Package = {
  id: string;
  slug: string;
  index: string;
  title: string;
  summary: string;
  group: "planes" | "medida";
  tiers: Tier[];
};

export type Mission = {
  n: string;
  code: string;
  title: string;
  lead: string;
  blocks: { title: string; body: string }[];
};

export const contactInfo = {
  email: "cotizacion@lunbyte.com.mx",
  phone: "+52 55 5244 5689",
  address: "Avenida Homero N°404, Piso 5, Colonia Polanco V Sección, Alcaldía Miguel Hidalgo, CP. 11560, Ciudad de México.",
};

const catalogEs = {
  subjects: [
    "Videojuego móvil 2D / 3D",
    "Gamificación corporativa",
    "Diseño de mecánicas de juego",
    "Arte, modelado y diseño UI",
    "Desarrollo de aplicación móvil",
    "Integración de APIs y sistemas",
    "Otro requerimiento",
  ],
  values: [
    { n: "01", title: "Innovación y visión vanguardista", body: "Optar por LUNBYTE significa confiar en una sinergia tecnológica y creativa que proyecta a tu marca por encima de los estándares convencionales." },
    { n: "02", title: "Desarrollo multidisciplinario", body: "Destacamos por entrelazar programación pura, diseño de interfaces y estrategia de negocio, forjando soluciones que cautivan tanto visual como funcionalmente." },
    { n: "03", title: "Alineación y transparencia", body: "Nos dedicamos de lleno a tu visión, manteniendo un canal abierto, honesto y directo desde el prototipo inicial hasta el día de publicación." },
    { n: "04", title: "Arquitectura ágil y precisa", body: "Utilizamos frameworks modernos y procesos dinámicos para garantizar que cada entregable sea robusto, fácilmente escalable y lanzado a tiempo." },
  ],
  missions: [
    {
      n: "01", code: "UNIVERSO INTERACTIVO", title: "Universo Interactivo",
      lead: "Diseñamos aventuras móviles en 2D y 3D donde la narrativa y el código convergen de forma magistral. Arrancamos estructurando el núcleo del gameplay para asegurar una inmersión inquebrantable desde el primer minuto.",
      blocks: [
        { title: "Creación de mundos inmersivos", body: "Nuestros desarrolladores exprimen las capacidades de Unity y Unreal Engine para renderizar entornos deslumbrantes y físicas consistentes. Cada textura y cada partícula de sonido está programada para evocar emoción pura." },
        { title: "Psicología del jugador y engagement", body: "Implementamos árboles de habilidades, tablas de clasificación y eventos rotativos para mantener encendida la chispa competitiva de la comunidad. Hacemos que tu juego se sienta vivo." },
      ],
    },
    {
      n: "02", code: "POWERPLAY CORPORATIVO", title: "PowerPlay Corporativo",
      lead: "Aplicamos dinámicas de juego para revolucionar la capacitación y el rendimiento interno. En LUNBYTE convertimos las métricas tradicionales de tu empresa en aventuras motivacionales.",
      blocks: [
        { title: "Redefiniendo el flujo de trabajo", body: "Estructuramos ecosistemas interactivos que transforman tareas monótonas en retos gratificantes. Mediante sistemas de insignias y recompensas medibles, disparamos la productividad de equipos y alumnos." },
        { title: "Arquitectura gamificada a la medida", body: "Estudiamos la cultura de tu organización para moldear plataformas que se integren directamente a tu software existente, logrando una adopción inmediata y orgánica por parte de los usuarios." },
      ],
    },
    {
      n: "03", code: "ENGINE DYNAMICS", title: "Engine Dynamics",
      lead: "Arquitectamos la lógica matemática e invisible que dicta el ritmo de tu producto. En LUNBYTE equilibramos cada variable para que la curva de aprendizaje sea tan retadora como justa.",
      blocks: [
        { title: "Calibración de mecánicas núcleo", body: "Auditamos la tasa de progreso, los sistemas de daño y la aparición de recompensas para evitar frustraciones. Combinamos analítica de datos con intuición de diseño para un gameplay balanceado." },
        { title: "Monetización inteligente y retención", body: "Integramos arquitecturas de compras in-app y pases de temporada no intrusivos que aseguran rentabilidad sin corromper la filosofía del juego ni ahuyentar a los jugadores." },
      ],
    },
    {
      n: "04", code: "PIXELCRAFT STUDIO", title: "PixelCraft Studio",
      lead: "Nuestro departamento creativo conceptualiza y materializa apartados visuales impresionantes. En LUNBYTE creemos que el primer impacto entra por los ojos y se consolida a través de la identidad.",
      blocks: [
        { title: "Dirección de arte con carácter", body: "Producimos desde concept art hasta riggings 3D complejos. Ya sea que busques estéticas pixel art nostálgicas o hiperrealismo, nuestro trazo se adapta al código genético de tu proyecto." },
        { title: "Experiencia e interfaz de usuario (UX/UI)", body: "Mapeamos el recorrido del usuario para diseñar menús dinámicos, minimalistas e intuitivos que respeten la ambientación general, asegurando que la navegación jamás se sienta como un obstáculo." },
      ],
    },
    {
      n: "05", code: "APPVERSE", title: "AppVerse",
      lead: "Construimos aplicaciones híbridas robustas y elegantes, pensadas para dominar las tiendas digitales. En LUNBYTE transformamos tu modelo de negocio en una herramienta de bolsillo indispensable.",
      blocks: [
        { title: "Código nativo e híbrido escalable", body: "Iniciamos con investigación de experiencia de usuario para garantizar flujos lógicos. Entregamos plataformas veloces y atractivas que corren a la perfección tanto en iOS como en ecosistemas Android." },
        { title: "Despliegues ágiles y sostenidos", body: "Trabajamos bajo sprints intensivos que permiten testeos tempranos. Así, aseguramos que tu aplicación llegue al mercado libre de cuellos de botella y lista para escalar en infraestructura." },
      ],
    },
    {
      n: "06", code: "DATALINK", title: "DataLink",
      lead: "Enlazamos tus plataformas con el mundo exterior. A través de LUNBYTE, tu app dejará de ser una isla para convertirse en un ecosistema interconectado y alimentado por datos en tiempo real.",
      blocks: [
        { title: "Mapeo de APIs y conectores", body: "Acoplamos motores de pago, bases de datos ERP, gestores CRM y sistemas de notificaciones push para centralizar tus operaciones y reducir los tiempos de respuesta de tu negocio." },
        { title: "Infraestructura de alta disponibilidad", body: "Blindamos cada endpoint y optimizamos las consultas para que la transferencia de información masiva ocurra con niveles de latencia casi nulos y máxima protección criptográfica." },
      ],
    }
  ] as Mission[],
  packages: [
    {
      id: "pkg-juegos", slug: "juegos-moviles-2d-3d", index: "01", group: "planes",
      title: "Juegos móviles 2D y 3D",
      summary: "Del prototipo jugable al título completo con arte propio, niveles y economía balanceada.",
      tiers: [
        { id: "7374", name: "2D sencillo", price: 200, blurb: "Juego básico con mecánicas simples." },
        { id: "7375", name: "2D intermedio", price: 3100, blurb: "Incluye niveles adicionales, animaciones básicas y efectos sonoros." },
        { id: "7376", name: "3D básico", price: 5000, blurb: "Adecuado para prototipos o juegos con gráficos sencillos." },
        { id: "7377", name: "3D avanzado", price: 10000, blurb: "Juego con gráficos detallados, múltiples niveles y mecánicas complejas." },
      ],
    },
    {
      id: "pkg-gamificacion", slug: "gamificacion-para-empresas", index: "02", group: "planes",
      title: "Gamificación para empresas",
      summary: "Convertimos capacitación, ventas y cultura interna en sistemas de juego medibles.",
      tiers: [
        { id: "7378", name: "Juego interactivo básico", price: 500, blurb: "Ideal para capacitaciones o presentaciones interactivas." },
        { id: "7379", name: "Experiencia gamificada personalizada", price: 4500, blurb: "Adaptada a las necesidades específicas de la empresa, con integración a sistemas internos." },
        { id: "7380", name: "Plataforma de gamificación", price: 6100, blurb: "Sistemas de puntos, recompensas y seguimiento de desempeño." },
      ],
    },
    {
      id: "pkg-mecanicas", slug: "diseno-de-mecanicas", index: "03", group: "planes",
      title: "Diseño de mecánicas de juego",
      summary: "La estructura invisible: curva de dificultad, recompensas, monetización y retención.",
      tiers: [
        { id: "7381", name: "Balanceo de niveles", price: 700, blurb: "Ajustamos la dificultad y la progresión del juego." },
        { id: "7382", name: "Sistema de monetización", price: 3800, blurb: "Implementación de anuncios, compras dentro de la app o suscripciones." },
        { id: "7383", name: "Experiencia multijugador", price: 7400, blurb: "Para añadir modos multijugador en línea o local." },
      ],
    },
    {
      id: "pkg-arte", slug: "arte-y-diseno", index: "04", group: "planes",
      title: "Arte y diseño para videojuegos",
      summary: "PixelCraft Studio: ilustración, sprites, modelado 3D e interfaces con identidad propia.",
      tiers: [
        { id: "7384", name: "Ilustraciones 2D", price: 200, blurb: "Ilustración básica." },
        { id: "7385", name: "Sprite y animaciones 2D", price: 2800, blurb: "Dependiendo de la complejidad." },
        { id: "7386", name: "Modelado y animación 3D", price: 2600, blurb: "Para personajes y escenarios básicos." },
        { id: "7387", name: "Diseño de interfaces (UI/UX)", price: 3500, blurb: "Adaptado a la estética y al tono narrativo del juego." },
      ],
    },
    {
      id: "pkg-apps", slug: "desarrollo-de-aplicaciones-moviles", index: "05", group: "medida",
      title: "Desarrollo de aplicaciones móviles",
      summary: "Apps híbridas para iOS u Android, del starter minimalista al producto completo con soporte.",
      tiers: [
        { id: "7388", name: "App híbrida starter", price: 15000, blurb: "App híbrida muy básica (una plataforma, Android u iOS), 3-5 pantallas, navegación simple, sin backend complejo, sin pagos, sin geolocalización, diseño minimalista." },
        { id: "7389", name: "App híbrida básica", price: 18000, blurb: "App híbrida muy básica (una plataforma, Android u iOS), 6-8 pantallas, formulario de contacto, menú sencillo, iconos personalizados, testing básico, publicación en tienda (solo Android)." },
        { id: "7391", name: "App híbrida multiplataforma", price: 20000, blurb: "Versión híbrida para ambas plataformas (iOS + Android) usando plantilla, algunas integraciones simples (notificaciones push, login con email)." },
        { id: "7392", name: "App UI personalizado", price: 22000, blurb: "App con diseño UI personalizado, 6-8 pantallas, navegación elaborada, posibilidad de agregar backend simple." },
        { id: "7393", name: "App completa", price: 25000, blurb: "Híbrida con características completas: login, sincronización básica de datos, notificaciones, quizás integración de API externa simple, diseño, publicación en tienda." },
        { id: "7394", name: "App completa + soporte", price: 28000, blurb: "App híbrida pequeña con UI personalizada, pantalla de administrador básica, diseño atractivo, testing algo más riguroso, soporte para Android + iOS." },
      ],
    },
    {
      id: "pkg-optimizacion", slug: "optimizacion-y-actualizacion", index: "06", group: "medida",
      title: "Optimización y actualización de apps",
      summary: "Rescatamos, afinamos y modernizamos productos que ya están en producción.",
      tiers: [
        { id: "7395", name: "Ajuste rápido", price: 1000, blurb: "Ajustes rápidos: optimización de carga de una pantalla, corregir bugs menores, actualizar bibliotecas o plugins." },
        { id: "7396", name: "Mejoras de UI/UX", price: 3000, blurb: "Mejoras de UI/UX: rediseño de uno o dos flujos (por ejemplo flujo de login, flujo de perfil), actualización menor de versiones de iOS/Android, optimización de imágenes." },
        { id: "7397", name: "Actualizaciones múltiples", price: 6000, blurb: "Actualizaciones múltiples pantallas rediseñadas, adaptación a nuevas versiones del sistema operativo (iOS / Android), mejora de animaciones, optimización de batería en ciertos módulos." },
        { id: "7398", name: "Optimización integral", price: 10000, blurb: "Servicio de actualización y optimización integral de una app de complejidad pequeña-mediana: UI/UX rediseño completo de una sección o módulo importante, migración de dependencias a versiones actuales, optimización de velocidad general de la app, auditoría de consumo de batería, ajustar compatibilidad con varias versiones de SO." },
      ],
    },
    {
      id: "pkg-integraciones", slug: "integraciones-y-conectividad", index: "07", group: "medida",
      title: "Integraciones y conectividad",
      summary: "DataLink: pasarelas de pago, CRMs, ERPs, webhooks y APIs externas conectadas en tiempo real.",
      tiers: [
        { id: "7399", name: "Pago simple", price: 100, blurb: "Integrar un botón de pago simple o configurar el SDK de una pasarela en una app existente." },
        { id: "7400", name: "Flujo de pago", price: 500, blurb: "Flujo de pago completo (checkout simple), múltiples endpoints de una API externa, conectar con redes sociales + login + perfil." },
        { id: "7401", name: "CRM externo", price: 1500, blurb: "Conectar app con CRM externo para enviar datos de usuario, integrar pagos + notificaciones push." },
        { id: "7402", name: "Integración completa", price: 2600, blurb: "CRM + ERP simple + pagos + API externas, webhook, sincronización bidireccional y manejo de autenticación segura." },
      ],
    },
  ] as Package[],
};

const catalogEn = {
  subjects: [
    "2D / 3D Mobile Game",
    "Corporate Gamification",
    "Game Mechanics Design",
    "Art, 3D Modeling & UI Design",
    "Mobile App Development",
    "API & System Integrations",
    "Other Request",
  ],
  values: [
    { n: "01", title: "Innovation and avant-garde vision", body: "Choosing LUNBYTE means trusting a technological and creative synergy that projects your brand above conventional standards." },
    { n: "02", title: "Multidisciplinary development", body: "We excel at weaving pure coding, interface design, and business strategy together, forging solutions that captivate both visually and functionally." },
    { n: "03", title: "Alignment and transparency", body: "We fully dedicate ourselves to your vision, keeping an open, honest, and direct channel from the initial prototype to launch day." },
    { n: "04", title: "Agile and precise architecture", body: "We utilize modern frameworks and dynamic workflows to guarantee that every deliverable is robust, easily scalable, and launched on time." },
  ],
  missions: [
    {
      n: "01", code: "INTERACTIVE UNIVERSE", title: "Interactive Universe",
      lead: "We design 2D and 3D mobile adventures where narrative and code masterfully converge. We start by structuring the core gameplay to ensure unbreakable immersion from the very first minute.",
      blocks: [
        { title: "Creation of immersive worlds", body: "Our developers maximize the capabilities of Unity and Unreal Engine to render stunning environments and consistent physics. Every texture and sound particle is programmed to evoke pure emotion." },
        { title: "Player psychology and engagement", body: "We implement skill trees, leaderboards, and rotating events to keep the community's competitive spark alive. We make your game feel alive." },
      ],
    },
    {
      n: "02", code: "CORPORATE POWERPLAY", title: "Corporate PowerPlay",
      lead: "We apply game dynamics to revolutionize training and internal performance. At LUNBYTE, we turn your company's traditional metrics into motivational adventures.",
      blocks: [
        { title: "Redefining workflows", body: "We structure interactive ecosystems that transform monotonous tasks into rewarding challenges. Through measurable badge and reward systems, we skyrocket the productivity of teams and students." },
        { title: "Tailored gamified architecture", body: "We study your organization's culture to mold platforms that integrate directly with your existing software, achieving immediate and organic adoption by users." },
      ],
    },
    {
      n: "03", code: "ENGINE DYNAMICS", title: "Engine Dynamics",
      lead: "We architect the invisible mathematical logic that dictates the rhythm of your product. At LUNBYTE, we balance every variable so that the learning curve is as challenging as it is fair.",
      blocks: [
        { title: "Core mechanics calibration", body: "We audit the progression rate, damage systems, and reward spawns to prevent player frustration. We combine data analytics with design intuition for balanced gameplay." },
        { title: "Smart monetization and retention", body: "We integrate non-intrusive in-app purchase architectures and season passes that ensure profitability without corrupting the game's philosophy or driving players away." },
      ],
    },
    {
      n: "04", code: "PIXELCRAFT STUDIO", title: "PixelCraft Studio",
      lead: "Our creative department conceptualizes and materializes impressive visual assets. At LUNBYTE, we believe the first impact comes through the eyes and is consolidated through identity.",
      blocks: [
        { title: "Art direction with character", body: "We produce everything from concept art to complex 3D riggings. Whether you're looking for nostalgic pixel art aesthetics or hyper-realism, our stroke adapts to your project's genetic code." },
        { title: "User experience and interface (UX/UI)", body: "We map the user journey to design dynamic, minimalist, and intuitive menus that respect the overall atmosphere, ensuring navigation never feels like an obstacle." },
      ],
    },
    {
      n: "05", code: "APPVERSE", title: "AppVerse",
      lead: "We build robust and elegant hybrid applications designed to dominate digital stores. At LUNBYTE, we transform your business model into an indispensable pocket tool.",
      blocks: [
        { title: "Scalable native and hybrid code", body: "We start with user experience research to guarantee logical flows. We deliver fast and attractive platforms that run flawlessly on both iOS and Android ecosystems." },
        { title: "Agile and sustained deployments", body: "We work under intensive sprints that allow for early testing. Thus, we ensure that your application reaches the market free of bottlenecks and ready to scale in infrastructure." },
      ],
    },
    {
      n: "06", code: "DATALINK", title: "DataLink",
      lead: "We link your platforms with the outside world. Through LUNBYTE, your app will cease to be an island and become an interconnected ecosystem fed by real-time data.",
      blocks: [
        { title: "API and connector mapping", body: "We couple payment engines, ERP databases, CRM managers, and push notification systems to centralize your operations and reduce your business's response times." },
        { title: "High availability infrastructure", body: "We shield every endpoint and optimize queries so that massive information transfer occurs with near-zero latency levels and maximum cryptographic protection." },
      ],
    }
  ] as Mission[],
  packages: [
    {
      id: "pkg-juegos", slug: "mobile-games-2d-3d", index: "01", group: "planes",
      title: "2D and 3D Mobile Games",
      summary: "From playable prototype to full title with custom art, levels, and balanced economy.",
      tiers: [
        { id: "7374", name: "Simple 2D", price: 200, blurb: "Basic game with simple mechanics." },
        { id: "7375", name: "Intermediate 2D", price: 3100, blurb: "Includes additional levels, basic animations, and sound effects." },
        { id: "7376", name: "Basic 3D", price: 5000, blurb: "Suitable for prototypes or games with simple graphics." },
        { id: "7377", name: "Advanced 3D", price: 10000, blurb: "Game with detailed graphics, multiple levels, and complex mechanics." },
      ],
    },
    {
      id: "pkg-gamificacion", slug: "corporate-gamification", index: "02", group: "planes",
      title: "Corporate Gamification",
      summary: "We turn training, sales, and internal culture into measurable game systems.",
      tiers: [
        { id: "7378", name: "Basic interactive game", price: 500, blurb: "Ideal for training or interactive presentations." },
        { id: "7379", name: "Custom gamified experience", price: 4500, blurb: "Adapted to company needs, with internal system integration." },
        { id: "7380", name: "Gamification platform", price: 6100, blurb: "Points, rewards, and performance tracking systems." },
      ],
    },
    {
      id: "pkg-mecanicas", slug: "mechanics-design", index: "03", group: "planes",
      title: "Game Mechanics Design",
      summary: "The invisible structure: difficulty curve, rewards, monetization, and retention.",
      tiers: [
        { id: "7381", name: "Level balancing", price: 700, blurb: "We adjust difficulty and game progression." },
        { id: "7382", name: "Monetization system", price: 3800, blurb: "Implementation of ads, in-app purchases, or subscriptions." },
        { id: "7383", name: "Multiplayer experience", price: 7400, blurb: "To add online or local multiplayer modes." },
      ],
    },
    {
      id: "pkg-arte", slug: "art-and-design", index: "04", group: "planes",
      title: "Video Game Art & Design",
      summary: "PixelCraft Studio: illustration, sprites, 3D modeling, and UI with unique identity.",
      tiers: [
        { id: "7384", name: "2D Illustrations", price: 200, blurb: "Basic illustration of character, object, or scene." },
        { id: "7385", name: "2D Sprite and animations", price: 2800, blurb: "Depending on the complexity of the animation set." },
        { id: "7386", name: "3D Modeling and animation", price: 2600, blurb: "For basic characters and environments." },
        { id: "7387", name: "Interface design (UI/UX)", price: 3500, blurb: "Adapted to the aesthetic and narrative tone of the game." },
      ],
    },
    {
      id: "pkg-apps", slug: "mobile-app-development", index: "05", group: "medida",
      title: "Mobile App Development",
      summary: "Hybrid apps for iOS or Android, from minimalist starter to full product with support.",
      tiers: [
        { id: "7388", name: "Starter hybrid app", price: 15000, blurb: "One platform, 3-5 screens, simple nav, no complex backend, no payments, minimal design." },
        { id: "7389", name: "Basic hybrid app", price: 18000, blurb: "6-8 screens, contact form, simple menu, custom icons, basic testing, store publishing - Android only." },
        { id: "7391", name: "Cross-platform hybrid app", price: 20000, blurb: "iOS + Android using template, simple integrations: push and email login." },
        { id: "7392", name: "Custom UI app", price: 22000, blurb: "Custom UI design, 6-8 screens, elaborate nav, optional simple backend." },
        { id: "7393", name: "Full app", price: 25000, blurb: "Login, basic data sync, notifications, basic API integration, design, store publishing." },
        { id: "7394", name: "Full app + support", price: 28000, blurb: "Custom UI, basic admin screen, attractive design, rigorous testing, Android + iOS support." },
      ],
    },
    {
      id: "pkg-optimizacion", slug: "app-optimization-updates", index: "06", group: "medida",
      title: "App Optimization & Updates",
      summary: "We rescue, tune, and modernize products already in production.",
      tiers: [
        { id: "7395", name: "Quick fix", price: 1000, blurb: "Single screen load optimization, minor bug fixes, and plugin updates." },
        { id: "7396", name: "UI/UX improvements", price: 3000, blurb: "Redesign of 1-2 flows, minor OS version updates, image optimization." },
        { id: "7397", name: "Multiple updates", price: 6000, blurb: "Redesign of multiple screens, OS version adaptation, animation improvements, battery optimization." },
        { id: "7398", name: "Integral optimization", price: 10000, blurb: "Full optimization service: full module UI/UX redesign, dependency migration, speed optimization, OS compatibility." },
      ],
    },
    {
      id: "pkg-integraciones", slug: "integraciones-connectivity", index: "07", group: "medida",
      title: "Integrations & Connectivity",
      summary: "DataLink: payment gateways, CRMs, ERPs, webhooks, and external APIs connected in real-time.",
      tiers: [
        { id: "7399", name: "Simple payment", price: 100, blurb: "Integrate a payment button or gateway SDK into an existing app." },
        { id: "7400", name: "Payment flow", price: 500, blurb: "Full checkout flow, multiple external API endpoints, social login + profile." },
        { id: "7401", name: "External CRM", price: 1500, blurb: "Connect app with external CRM to send user data, integrate payments + push notifications." },
        { id: "7402", name: "Complete integration", price: 2600, blurb: "CRM + simple ERP + payments + external APIs, webhook, two-way sync, and secure auth handling." },
      ],
    },
  ] as Package[],
};

export function getCatalog(lang: "es" | "en") {
  return lang === "es" ? catalogEs : catalogEn;
}

export function findTier(tierId: string, lang: "es" | "en") {
  const { packages } = getCatalog(lang);
  const allTiers = packages.flatMap((pkg) =>
    pkg.tiers.map((tier) => ({ ...tier, packageTitle: pkg.title, packageId: pkg.id }))
  );
  return allTiers.find((t) => t.id === tierId);
}