export type ProjectCategory = 'Plataformas' | 'RFID' | 'Desktop' | 'Móvil' | 'Infra'

export type Project = {
  id: string
  title: string
  summary: string
  role: string
  stack: string[]
  highlights: string[]
  context: 'TANGOID' | 'Personal'
  status: 'Producción' | 'En desarrollo' | 'Demo'
  category: ProjectCategory
}

export const projectCategories: Array<'Todos' | ProjectCategory> = [
  'Todos',
  'Plataformas',
  'RFID',
  'Desktop',
  'Móvil',
  'Infra',
]

export const profile = {
  name: 'Renzo Balestrero',
  role: 'Backend Developer · RFID · Automatización',
  location: 'Buenos Aires, Argentina',
  email: 'renzo.balestrero@outlook.com',
  linkedin: 'https://linkedin.com/in/renzo-balestrero',
  github: 'https://github.com/RBalestrero',
  company: 'TANGOID',
  companyUrl: 'https://www.tangoid.com.ar',
  headline:
    'Software e identificación que sacan operaciones reales de las planillas.',
  about: [
    'En TANGOID armo soluciones RFID y backend de punta a punta: relevamiento, diseño, implementación, puesta en marcha y soporte.',
    'Plataformas internas, inventario, desktop y Android con lectores Zebra. Menos fricción operativa, más trazabilidad.',
  ],
  photo: 'renzo.png',
  banner: 'media/banner-expo-scan.jpg',
}

export const gallery = {
  photos: [
    {
      src: 'media/banner-expo-scan.jpg',
      alt: 'En stand de expo escaneando cajas Zebra con pistolera',
      caption: 'Expo — identificación en vivo',
    },
    {
      src: 'media/team-expo.jpg',
      alt: 'Equipo TANGOID en stand de exposición',
      caption: 'Equipo TANGOID en expo',
    },
    {
      src: 'media/team-office.jpg',
      alt: 'Equipo de trabajo en oficina TANGOID',
      caption: 'Equipo en oficina',
    },
  ],
  videos: [
    {
      src: 'media/video-expologistik.mp4',
      poster: 'media/video-expologistik-poster.jpg',
      caption: 'Demo inventario RFID — Expologistk',
    },
  ],
}

export const skills = {
  software: [
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Express',
    'Python',
    'FastAPI',
    'React',
    'Java',
    'JavaFX',
    'Kotlin',
    'Flutter',
    'Dart',
    'APIs REST',
    'PostgreSQL',
    'Docker',
    'Electron',
    'Git',
  ],
  rfid: [
    'RFID UHF',
    'Zebra FX9600',
    'Zebra MC33R',
    'Zebra DS9908R',
    'Zebra ZD621R / ZT411',
    'Chainway R3 / UR1A-9',
    'Smart cards',
    'Impresoras ID',
    'Integración hardware-software',
  ],
  ops: [
    'Automatización con IA',
    'Soporte técnico',
    'HubSpot / Vtiger',
    'Windows / Linux',
    'Documentación técnica',
  ],
}

export const experience = [
  {
    company: 'TANGOID',
    title: 'Especialista en Soluciones RFID, Desarrollo y Optimización de Procesos',
    period: 'Feb 2026 — Actualidad',
    points: [
      'Gestión integral de proyectos RFID: relevamiento, diseño, cotización, implementación y posventa.',
      'Desarrollo de PIGO, plataforma interna que reemplazó planillas Excel y centralizó pedidos, reservas, soporte y Mercado Libre.',
      'Apps a medida para clientes: lectores, antenas, etiquetas y sensores integrados a procesos de negocio.',
    ],
  },
  {
    company: 'TANGOID',
    title: 'Analista de Operaciones y Servicios',
    period: 'Ene 2024 — Ene 2026',
    points: [
      'Soporte sobre impresoras de tarjetas/etiquetas, lectores RFID, smart cards y emisión de productos financieros.',
      'Diagnóstico, reparación, tickets CRM e infraestructura microinformática.',
      'Primeras implementaciones RFID y automatización de tareas con IA.',
    ],
  },
]

export const education = [
  {
    title: 'Desarrollo Backend — Coderhouse',
    period: '2024 — 2025',
    detail: 'JavaScript, Node.js, Express, APIs REST, bases de datos, Git, Docker.',
  },
  {
    title: 'Ingeniería Electrónica — UTN FRH',
    period: '2019 — 2026',
    detail: 'Estudios en curso / pausados.',
  },
]

export const projects: Project[] = [
  {
    id: 'pigo',
    title: 'PIGO — Plataforma interna de gestión operativa',
    summary:
      'Plataforma interna (PIGO) con microservicios y gateway API: pedidos, reservas, soporte técnico, depósito/préstamos y Mercado Libre, con auth JWT y PostgreSQL.',
    role: 'Diseño e implementación full-stack / backend',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'React', 'JavaScript'],
    highlights: [
      'Servicios: auth, orders, returns, support, users, reservations, depósito, Mercado Libre',
      'Despliegue con Docker Compose (dev/prod)',
      'Reemplazo de planillas Excel con trazabilidad entre sectores',
    ],
    context: 'TANGOID',
    status: 'Producción',
    category: 'Plataformas',
  },
  {
    id: 'aplicacion-modular',
    title: 'Aplicación modular multi-vertical',
    summary:
      'Monorepo TypeScript para gestionar verticales operativas (depósito, lavandería y otras) con apps, packages compartidos y despliegue Docker multi-ambiente.',
    role: 'Desarrollo de arquitectura y módulos',
    stack: ['TypeScript', 'pnpm workspaces', 'Docker', 'React'],
    highlights: [
      'Estructura monorepo (apps + packages)',
      'Compose para dev, staging y prod',
      'Base reutilizable para distintas verticales de negocio',
    ],
    context: 'TANGOID',
    status: 'En desarrollo',
    category: 'Plataformas',
  },
  {
    id: 'don-nicolas',
    title: 'Sistema RFID — Inventario multi-depósito',
    summary:
      'Solución integral UHF para activos e inventario distribuido: alta con impresión de etiquetas, transferencias y app móvil online/offline.',
    role: 'Desarrollo backend, web y móvil',
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'Kotlin', 'PostgreSQL', 'Docker'],
    highlights: [
      'Terminal Zebra MC33R para inventario masivo',
      'Impresión RFID vía ZPL (Zebra ZD621R / ZT411)',
      'Roles, depósitos, sectores y trazabilidad de transferencias',
    ],
    context: 'TANGOID',
    status: 'En desarrollo',
    category: 'RFID',
  },
  {
    id: 'tracer-rfid',
    title: 'RFID TRACER — Portal y control de acceso',
    summary:
      'App híbrida Electron + API local para inventario, KPIs y alertas de salidas no autorizadas (toallas / activos) con lector fijo Zebra FX9600 y antenas.',
    role: 'Desarrollo e implementación',
    stack: ['Electron', 'Node.js', 'React', 'TypeScript', 'Vite', 'SQLite', 'Python'],
    highlights: [
      'Alertas en tiempo real desde el portal RFID',
      'Integración User App en FX9600 (Python / pyziotc)',
      'Empaquetado portable e instalador Windows',
    ],
    context: 'TANGOID',
    status: 'Demo',
    category: 'RFID',
  },
  {
    id: 'gestor-pacientes',
    title: 'Gestor de pacientes + pulseras',
    summary:
      'Aplicación desktop Java para gestión de pacientes con impresión de pulseras RFID e registro de ingreso/egreso.',
    role: 'Desarrollo desktop e integración de impresión',
    stack: ['Java', 'JavaFX', 'Zebra'],
    highlights: [
      'Flujos de ingreso/egreso con identificación',
      'Impresión de pulseras',
      'Empaquetado e instalador Windows',
    ],
    context: 'TANGOID',
    status: 'Producción',
    category: 'Desktop',
  },
  {
    id: 'generador-claves',
    title: 'Generador de claves de licencia',
    summary:
      'Utilidad Java para generar claves de licencia del gestor de pacientes, orientada a control de distribución del software.',
    role: 'Desarrollo',
    stack: ['Java', 'Batch'],
    highlights: [
      'Generación de licencias para despliegue del producto',
      'Herramienta de soporte al ciclo de entrega',
    ],
    context: 'TANGOID',
    status: 'Producción',
    category: 'Desktop',
  },
  {
    id: 'pulseras',
    title: 'Gestor de pulseras RFID',
    summary:
      'Aplicación JavaFX para gestión e impresión de pulseras escaneando DNI de ingresantes, con integración Zebra.',
    role: 'Desarrollo desktop',
    stack: ['Java 21', 'JavaFX', 'Zebra'],
    highlights: [
      'Parsing de DNI y flujos de emisión',
      'Configuración, licenciamiento y logging',
      'Empaquetado e instalador Windows',
    ],
    context: 'TANGOID',
    status: 'Producción',
    category: 'Desktop',
  },
  {
    id: 'expologistk',
    title: 'Demo inventario RFID (Android / Elo)',
    summary:
      'APK de demostración para tablet Elo con lector Zebra DS9908R (barcode + RFID): CRUD de artículos e inventario en exposición.',
    role: 'Desarrollo Android',
    stack: ['Kotlin', 'Jetpack Compose', 'Room', 'Zebra Scanner SDK'],
    highlights: [
      'Modo emulador con FakeScannerGateway',
      'Integración SNAPI sobre Elo I-Series',
      'Arquitectura documentada por fases',
    ],
    context: 'TANGOID',
    status: 'En desarrollo',
    category: 'Móvil',
  },
  {
    id: 'control-cubiertas',
    title: 'Control de cubiertas — Android',
    summary:
      'Aplicación Android para control y seguimiento de cubiertas de camiones con identificación en campo.',
    role: 'Desarrollo móvil',
    stack: ['Android'],
    highlights: [
      'Caso de uso logístico / flota',
      'Identificación y control operativo en campo',
    ],
    context: 'TANGOID',
    status: 'En desarrollo',
    category: 'Móvil',
  },
  {
    id: 'gestor-contactos',
    title: 'Gestor de contactos (eventos)',
    summary:
      'App Flutter/Android para almacenar contactos de interés en eventos corporativos, con persistencia local y exportación.',
    role: 'Desarrollo',
    stack: ['Flutter', 'Dart', 'SQLite'],
    highlights: [
      'Orientada a networking en eventos',
      'Exportación CSV y captura de datos en campo',
      'Persistencia local con sqflite',
    ],
    context: 'TANGOID',
    status: 'Producción',
    category: 'Móvil',
  },
  {
    id: 'technogroup',
    title: 'Codificación RFID biblioteca (Zebra + R3)',
    summary:
      'Herramienta desktop Java para impresión/codificación de etiquetas RFID (Zebra ZT411) y encode de libros con lector Chainway R3.',
    role: 'Desarrollo e integración hardware',
    stack: ['Java', 'Zebra ZPL/TCP', 'Chainway R3', 'Windows'],
    highlights: [
      'Discovery de impresoras y encode EPC + lectura TID',
      'Flujos de impresión y logging',
      'Base para reingeniería UI moderna',
    ],
    context: 'TANGOID',
    status: 'Producción',
    category: 'Desktop',
  },
  {
    id: 'uade-libros',
    title: 'Gestión de etiquetas — Biblioteca UADE',
    summary:
      'Aplicación TypeScript para gestionar la codificación de etiquetas RFID de libros de biblioteca (flujo operativo sobre la base de impresión/encode).',
    role: 'Desarrollo',
    stack: ['TypeScript', 'React', 'CSS'],
    highlights: [
      'Flujo orientado a biblioteca universitaria',
      'Complementa la herramienta de impresión/encode',
      'UI moderna sobre procesos de codificación',
    ],
    context: 'TANGOID',
    status: 'En desarrollo',
    category: 'RFID',
  },
  {
    id: 'api-ur1a9',
    title: 'API Java — Lector Chainway UR1A-9',
    summary:
      'Servicio Java que captura lecturas del lector Chainway UR1A-9 desde PC y las envía a un webservice por HTTP.',
    role: 'Desarrollo e integración hardware',
    stack: ['Java', 'HTTP', 'Chainway UR1A-9'],
    highlights: [
      'Puente hardware → webservice',
      'Lectura RFID en estación de PC',
      'Integración con sistemas externos',
    ],
    context: 'TANGOID',
    status: 'Producción',
    category: 'RFID',
  },
  {
    id: 'fx9600-ternium',
    title: 'Proyecto FX9600 — Portal industrial',
    summary:
      'Paquete/user app Python para lector Zebra FX9600 en entorno industrial (portal RFID / fin de línea).',
    role: 'Integración RFID fijo',
    stack: ['Python', 'Zebra FX9600', 'Shell'],
    highlights: [
      'User App / packaging para FX9600',
      'Escenario industrial de portal RFID',
      'Scripts de build multi-arquitectura',
    ],
    context: 'TANGOID',
    status: 'Producción',
    category: 'RFID',
  },
  {
    id: 'armario-rfid',
    title: 'Demo armario de herramientas RFID',
    summary:
      'Demo web interactiva para control de herramientas con RFID: visualización, estados y narrativa de uso en taller/planta.',
    role: 'Demo / prototipo',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    highlights: [
      'Prototipo rápido para preventa y demos',
      'UI orientada a hardware de identificación',
    ],
    context: 'TANGOID',
    status: 'Demo',
    category: 'RFID',
  },
  {
    id: 'rfid-agent-os',
    title: 'Imagen SO Mini-PC — Agente RFID',
    summary:
      'Imagen de sistema operativo Ubuntu Server para Mini-PC aplicadas a fines de tren / estaciones RFID de borde.',
    role: 'Infraestructura / embebidos',
    stack: ['Ubuntu Server', 'Mini-PC', 'RFID edge'],
    highlights: [
      'Base de SO para despliegues en campo',
      'Orientada a estaciones de lectura fijas',
    ],
    context: 'TANGOID',
    status: 'En desarrollo',
    category: 'Infra',
  },
  {
    id: 'tangoid-dev-kit',
    title: 'tangoid-dev-kit — Toolkit de ingeniería',
    summary:
      'Kit reutilizable de ingeniería para Cursor: agentes especializados, skills, integración hardware, documentación y workflows de calidad.',
    role: 'Diseño de tooling interno',
    stack: ['PowerShell', 'Cursor', 'Markdown'],
    highlights: [
      'Agentes y skills para desarrollo hardware/software',
      'Estándares de seguridad, verificación y docs',
      'Acelera entregas del equipo de desarrollo',
    ],
    context: 'TANGOID',
    status: 'Producción',
    category: 'Infra',
  },
]
