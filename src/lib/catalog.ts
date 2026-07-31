// src/lib/catalog.ts
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
    "Gamificación para empresas",
    "Diseño de mecánicas",
    "Arte y diseño",
    "Aplicación móvil",
    "Integraciones y conectividad",
    "Otro",
  ],
  values: [
    { n: "01", title: "Visión futurista y creatividad", body: "Elegir LUNBYTE es apostar por una fusión única de tecnología, creatividad y visión de futuro que impulsa a las marcas a trascender lo convencional." },
    { n: "02", title: "Integración multidisciplinaria", body: "Nuestra fortaleza está en unir desarrollo, arte, diseño y estrategia para crear experiencias funcionales y emocionalmente impactantes." },
    { n: "03", title: "Compromiso y transparencia", body: "Trabajamos con pasión y comunicación constante, acompañando al cliente desde la idea inicial hasta el lanzamiento final." },
    { n: "04", title: "Tecnología ágil y precisión", body: "Aplicamos tecnologías emergentes y metodologías ágiles para entregar resultados modernos, sostenibles y ejecutados con precisión." },
  ],
  missions: [
    {
      n: "01", code: "UNIVERSO INTERACTIVO", title: "Universo Interactivo",
      lead: "Creamos videojuegos móviles 2D y 3D que combinan arte, narrativa y tecnología en perfecta armonía. Nuestro proceso inicia con la conceptualización de la idea y la definición del gameplay, para garantizar que cada jugador experimente una inmersión total desde el primer toque en pantalla.",
      blocks: [
        { title: "Desarrollo de experiencias interactivas", body: "El equipo de LUNBYTE domina herramientas avanzadas como Unity y Unreal Engine, lo que nos permite construir mundos detallados, sistemas de progresión equilibrados y experiencias visuales impactantes. Cada textura, animación y sonido está diseñado para transmitir emoción, desafío y diversión." },
        { title: "Engagement y personalidad de juego", body: "Integramos sistemas de recompensas, misiones diarias, rankings y componentes sociales para mantener el interés y la competitividad de los usuarios. Nuestra meta es clara: crear títulos que se sientan vivos, auténticos y con identidad propia." },
      ],
    },
    {
      n: "02", code: "POWERPLAY CORPORATIVO", title: "PowerPlay Corporativo",
      lead: "La gamificación es el puente entre la productividad y la motivación. En LUNBYTE transformamos los procesos empresariales en experiencias interactivas que inspiran participación, aprendizaje y compromiso.",
      blocks: [
        { title: "Gamificación que transforma el día a día", body: "Diseñamos entornos digitales donde empleados, clientes o estudiantes se convierten en jugadores activos de su propio progreso. Mediante logros, recompensas y desafíos, convertimos tareas cotidianas en experiencias emocionantes y significativas." },
        { title: "Experiencias a la medida para empresas", body: "Trabajamos junto a cada organización para entender sus metas, cultura y retos internos. Diseñamos experiencias personalizadas que integran tecnología, creatividad y análisis de datos, haciendo del aprendizaje y la productividad una aventura que todos quieren jugar." },
      ],
    },
    {
      n: "03", code: "ENGINE DYNAMICS", title: "Engine Dynamics",
      lead: "Detrás de cada gran juego hay un sistema invisible que da sentido a la experiencia: sus mecánicas. En LUNBYTE diseñamos la estructura que mantiene la diversión equilibrada, fluida y desafiante.",
      blocks: [
        { title: "Balance y diseño de mecánicas", body: "Analizamos la progresión, la curva de dificultad, la frecuencia de recompensas y los sistemas de monetización para mantener el atractivo del juego. Combinamos experiencia técnica y visión de jugador para lograr un equilibrio entre reto y satisfacción." },
        { title: "Comunidad y retención", body: "Desarrollamos experiencias multijugador, sistemas de ranking, eventos dinámicos y estrategias de retención que mantienen a la comunidad activa. Diseñamos modelos sostenibles con monetización inteligente que no afectan la experiencia del usuario." },
      ],
    },
    {
      n: "04", code: "PIXELCRAFT STUDIO", title: "PixelCraft Studio",
      lead: "El arte da vida a cada historia, y en LUNBYTE nuestro estudio creativo PixelCraft combina talento artístico con precisión técnica para crear universos visuales memorables.",
      blocks: [
        { title: "Arte 2D/3D con identidad propia", body: "Creamos ilustraciones, personajes, entornos y animaciones en 2D y 3D con un estilo único. Nuestro proceso abarca desde el bocetado conceptual hasta el rigging y la animación, cuidando cada detalle para reflejar la esencia del proyecto." },
        { title: "Diseño UI/UX y coherencia visual", body: "Diseñamos interfaces intuitivas, fluidas y visualmente impactantes. Alineamos la estética con el tono narrativo del juego o aplicación, logrando una experiencia inmersiva y coherente. En LUNBYTE el arte no solo se ve: se siente." },
      ],
    },
    {
      n: "05", code: "APPVERSE", title: "AppVerse",
      lead: "En un mundo móvil, tu aplicación es tu carta de presentación. En LUNBYTE diseñamos y desarrollamos apps híbridas personalizadas que combinan estética, rendimiento y funcionalidad.",
      blocks: [
        { title: "Diseño y tecnología para apps escalables", body: "Partimos del diseño centrado en el usuario, estudiando experiencia, navegabilidad y flujo para crear interfaces intuitivas. Desde apps corporativas y educativas hasta plataformas de entretenimiento, cada proyecto se construye con precisión y escalabilidad." },
        { title: "Metodología ágil y calidad técnica", body: "Aplicamos metodologías ágiles con entregas progresivas y retroalimentación constante. Supervisamos cada fase para asegurar rendimiento rápido, estabilidad, seguridad y un diseño que marque tendencia." },
      ],
    },
    {
      n: "06", code: "DATALINK", title: "DataLink",
      lead: "Las aplicaciones modernas viven conectadas a un ecosistema digital más amplio. En LUNBYTE creamos esa conexión: integraciones y conectividad que permiten que tus sistemas se comuniquen de forma segura, eficiente y en tiempo real.",
      blocks: [
        { title: "Integraciones inteligentes para tu negocio", body: "Integramos pasarelas de pago, CRMs, ERPs, notificaciones, webhooks y APIs externas para automatizar procesos, mejorar la experiencia del usuario y potenciar el flujo de datos. Cada integración se plantea como una expansión natural." },
        { title: "Estabilidad, seguridad y escalabilidad", body: "Realizamos pruebas exhaustivas para garantizar que cada conexión sea estable, segura y escalable. Con DataLink tu aplicación deja de ser un sistema aislado para convertirse en parte de una red inteligente que evoluciona contigo." },
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
        { id: "7379", name: "Experiencia gamificada personalizada", price: 4500, blurb: "Adaptada a las necesidades de la empresa, con integración a sistemas internos." },
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
        { id: "7384", name: "Ilustraciones 2D", price: 200, blurb: "Ilustración básica de personaje, objeto o escena." },
        { id: "7385", name: "Sprite y animaciones 2D", price: 2800, blurb: "Dependiendo de la complejidad del set de animación." },
        { id: "7386", name: "Modelado y animación 3D", price: 2600, blurb: "Para personajes y escenarios básicos." },
        { id: "7387", name: "Diseño de interfaces (UI/UX)", price: 3500, blurb: "Adaptado a la estética y al tono narrativo del juego." },
      ],
    },
    {
      id: "pkg-apps", slug: "desarrollo-de-aplicaciones-moviles", index: "05", group: "medida",
      title: "Desarrollo de aplicaciones móviles",
      summary: "Apps híbridas para iOS u Android, del starter minimalista al producto completo con soporte.",
      tiers: [
        { id: "7388", name: "App híbrida starter", price: 15000, blurb: "Una plataforma, 3-5 pantallas, navegación simple, sin backend complejo, sin pagos, sin geolocalización, diseño minimalista." },
        { id: "7389", name: "App híbrida básica", price: 18000, blurb: "6-8 pantallas, formulario de contacto, menú sencillo, iconos personalizados, testing básico, publicación en tienda (solo Android)." },
        { id: "7391", name: "App híbrida multiplataforma", price: 20000, blurb: "iOS + Android usando plantilla, con integraciones simples: push y login con email." },
        { id: "7392", name: "App UI personalizado", price: 22000, blurb: "Diseño UI a la medida, 6–8 pantallas, navegación elaborada y backend simple opcional." },
        { id: "7393", name: "App completa", price: 25000, blurb: "Login, sincronización básica de datos, notificaciones, quizás integración de API externa simple, diseño, publicación en tienda." },
        { id: "7394", name: "App completa + soporte", price: 28000, blurb: "UI personalizada, pantalla de administrador básica, diseño atractivo, testing algo más riguroso, soporte para Android + iOS." },
      ],
    },
    {
      id: "pkg-optimizacion", slug: "optimizacion-y-actualizacion", index: "06", group: "medida",
      title: "Optimización y actualización de apps",
      summary: "Rescatamos, afinamos y modernizamos productos que ya están en producción.",
      tiers: [
        { id: "7395", name: "Ajuste rápido", price: 1000, blurb: "Optimización de carga de una pantalla, corrección de bugs menores y actualización de plugins." },
        { id: "7396", name: "Mejoras de UI/UX", price: 3000, blurb: "Rediseño de uno o dos flujos (por ejemplo flujo de login, flujo de perfil), actualización menor de versiones de iOS/Android, optimización de imágenes." },
        { id: "7397", name: "Actualizaciones múltiples", price: 6000, blurb: "Actualizaciones múltiples pantallas rediseñadas, adaptación a nuevas versiones del sistema operativo (iOS / Android), mejora de animaciones, optimización de batería en ciertos módulos." },
        { id: "7398", name: "Optimización integral", price: 9000, blurb: "Servicio de actualización integral: UI/UX rediseño completo de módulo, migración de dependencias, optimización de velocidad general, auditoría de consumo de batería." },
      ],
    },
    {
      id: "pkg-integraciones", slug: "integraciones-y-conectividad", index: "07", group: "medida",
      title: "Integraciones y conectividad",
      summary: "DataLink: pasarelas de pago, CRMs, ERPs, webhooks y APIs externas conectadas en tiempo real.",
      tiers: [
        { id: "7399", name: "Pago simple", price: 100, blurb: "Integrar un botón de pago o configurar el SDK de una pasarela en una app existente." },
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
    "Mechanics Design",
    "Art and Design",
    "Mobile App",
    "Integrations and Connectivity",
    "Other",
  ],
  values: [
    { n: "01", title: "Futuristic vision and creativity", body: "Choosing LUNBYTE means betting on a unique fusion of technology, creativity, and forward-thinking that drives brands to transcend the conventional." },
    { n: "02", title: "Multidisciplinary integration", body: "Our strength lies in uniting development, art, design, and strategy to create functional and emotionally impactful experiences." },
    { n: "03", title: "Commitment and transparency", body: "We work with passion and constant communication, accompanying the client from the initial idea to the final launch." },
    { n: "04", title: "Agile technology and precision", body: "We apply emerging technologies and agile methodologies to deliver modern, sustainable, and precisely executed results." },
  ],
  missions: [
    {
      n: "01", code: "INTERACTIVE UNIVERSE", title: "Interactive Universe",
      lead: "We create 2D and 3D mobile games that combine art, narrative, and technology in perfect harmony. Our process starts with concept ideation and gameplay definition, ensuring every player experiences total immersion.",
      blocks: [
        { title: "Development of interactive experiences", body: "The LUNBYTE team masters advanced tools like Unity and Unreal Engine, allowing us to build detailed worlds, balanced progression systems, and striking visual experiences. Every texture, animation, and sound is designed to convey emotion, challenge, and fun." },
        { title: "Engagement and game personality", body: "We integrate reward systems, daily missions, rankings, and social components to maintain user interest and competitiveness. Our goal is clear: to create titles that feel alive, authentic, and with their own identity." },
      ],
    },
    {
      n: "02", code: "CORPORATE POWERPLAY", title: "Corporate PowerPlay",
      lead: "Gamification is the bridge between productivity and motivation. At LUNBYTE, we transform business processes into interactive experiences that inspire participation, learning, and commitment.",
      blocks: [
        { title: "Gamification that transforms daily life", body: "We design digital environments where employees, clients, or students become active players in their own progress. Through achievements, rewards, and challenges, we turn everyday tasks into exciting and meaningful experiences." },
        { title: "Custom experiences for companies", body: "We work alongside each organization to understand its goals, culture, and internal challenges. We design personalized experiences that integrate technology, creativity, and data analysis, making learning and productivity an adventure everyone wants to play." },
      ],
    },
    {
      n: "03", code: "ENGINE DYNAMICS", title: "Engine Dynamics",
      lead: "Behind every great game is an invisible system that makes sense of the experience: its mechanics. At LUNBYTE, we design the structure that keeps the fun balanced, fluid, and challenging.",
      blocks: [
        { title: "Mechanics design and balancing", body: "We analyze progression, difficulty curve, reward frequency, and monetization systems to maintain the game's appeal. We combine technical expertise and player vision to achieve a balance between challenge and satisfaction." },
        { title: "Community and retention", body: "We develop multiplayer experiences, ranking systems, dynamic events, and retention strategies that keep the community active. We design sustainable models with smart monetization that do not affect the user experience." },
      ],
    },
    {
      n: "04", code: "PIXELCRAFT STUDIO", title: "PixelCraft Studio",
      lead: "Art brings every story to life, and at LUNBYTE our creative studio PixelCraft combines artistic talent with technical precision to create memorable visual universes.",
      blocks: [
        { title: "2D/3D Art with its own identity", body: "We create illustrations, characters, environments, and animations in 2D and 3D with a unique style. Our process ranges from conceptual sketching to rigging and animation, taking care of every detail to reflect the essence of the project." },
        { title: "UI/UX Design and visual consistency", body: "We design intuitive, fluid, and visually striking interfaces. We align aesthetics with the narrative tone of the game or application, achieving an immersive and coherent experience. At LUNBYTE, art is not just seen: it is felt." },
      ],
    },
    {
      n: "05", code: "APPVERSE", title: "AppVerse",
      lead: "In a mobile world, your application is your cover letter. At LUNBYTE, we design and develop custom hybrid apps that combine aesthetics, performance, and functionality.",
      blocks: [
        { title: "Design and technology for scalable apps", body: "We start from user-centered design, studying experience, navigability, and flow to create intuitive interfaces. From corporate and educational apps to entertainment platforms, each project is built with precision and scalability." },
        { title: "Agile methodology and technical quality", body: "We apply agile methodologies with progressive deliveries and constant feedback. We supervise each phase to ensure fast performance, stability, security, and a trend-setting design." },
      ],
    },
    {
      n: "06", code: "DATALINK", title: "DataLink",
      lead: "Modern applications live connected to a broader digital ecosystem. At LUNBYTE, we create that connection: integrations and connectivity that allow your systems to communicate securely, efficiently, and in real-time.",
      blocks: [
        { title: "Smart integrations for your business", body: "We integrate payment gateways, CRMs, ERPs, notifications, webhooks, and external APIs to automate processes, improve user experience, and boost data flow. Each integration is considered a natural expansion." },
        { title: "Stability, security, and scalability", body: "We perform exhaustive testing to ensure each connection is stable, secure, and scalable. With DataLink, your application ceases to be an isolated system to become part of a smart network that evolves with you." },
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
        { id: "7398", name: "Integral optimization", price: 9000, blurb: "Full optimization service: full module UI/UX redesign, dependency migration, speed optimization, OS compatibility." },
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

// Funciones para consumir el catálogo localizado
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