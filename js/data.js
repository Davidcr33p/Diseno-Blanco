/*
 * ============================================================
 * CONTENIDO DEL SITIO - editar solo este archivo
 * ============================================================
 * Cuando el cliente entregue su material, reemplaza los valores
 * marcados con "TODO" y las imagenes de /assets/images.
 * Todo el sitio (index.html) se dibuja a partir de este objeto,
 * no hace falta tocar el HTML para actualizar textos o proyectos.
 * ============================================================
 */

const SITE_DATA = {

  company: {
    name: "Diseño Blanco",
    shortName: "Diseño Blanco",
    // Iniciales para el isotipo del header/footer
    monogram: "DB",
    tagline: "Diseñamos espacios que perduran.",
    heroSubtext:
      "Estudio de arquitectura enfocado en proyectos residenciales, comerciales e interiorismo, con una mirada clara y atemporal.",
    heroImage: "assets/images/proyecto-recepcion-corporativa.jpg",
    aboutEyebrow: "El estudio",
    aboutTitle: "Nosotros",
    aboutText:
      "Somos un despacho de arquitectos con más de 10 años de experiencia, especializados en diseño de interiores, planificación, construcción y proyectos arquitectónicos. Nuestra misión es crear espacios armoniosos y a medida, adaptados a las necesidades y estilo de vida de cada cliente. Ofrecemos una asesoría integral, abarcando desde la distribución, acabados y mobiliario, hasta planes de ampliación, obra civil y proyectos ejecutivos. Nos comprometemos a ofrecer soluciones a la medida, con un enfoque innovador y un alto estándar de calidad.",
    aboutImage: "assets/images/proyecto-vestidor.jpg",
  },

  stats: [
    { value: "10+", label: "años de trayectoria" },
    { value: "120+", label: "proyectos entregados" },
    { value: "2", label: "sucursales físicas" },
    { value: "40+", label: "ciudades con proyectos realizados" },
  ],

  services: [
    {
      title: "Arquitectura residencial",
      description:
        "Diseño y construcción de casas y desarrollos habitacionales, acompañando el proyecto desde el concepto hasta la obra terminada.",
    },
    {
      title: "Arquitectura comercial",
      description:
        "Diseño y construcción de oficinas, retail y espacios de trabajo, pensados para la marca y el flujo de las personas.",
    },
    {
      title: "Interiorismo",
      description:
        "Definición de materiales, mobiliario e iluminación para dar continuidad al proyecto arquitectónico.",
    },
    {
      title: "Asesoría de Diseño Interior",
      description:
        "Visita, propuesta de distribución y seguimiento para transformar un espacio existente sin necesidad de una obra completa.",
    },
  ],

  // Categorías usadas para filtrar la galería. El primer valor
  // siempre se usa como el filtro "ver todos".
  categories: ["Todos", "Residencial", "Comercial", "Interiorismo", "Urbanismo"],

  // "size" controla la proporción de la tarjeta en la grilla:
  // "tall" (vertical), "wide" (horizontal) o "" (cuadrada, por defecto).
  projects: [
    { id: 1, title: "Proyecto Residencial", category: "Residencial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-01.jpg", size: "" },
    { id: 2, title: "Proyecto Residencial", category: "Residencial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-02.jpg", size: "tall" },
    { id: 3, title: "Crediclub", category: "Comercial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-03.jpg", size: "wide" },
    { id: 4, title: "Crediclub", category: "Comercial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-04.jpg", size: "tall" },
    { id: 5, title: "Crediclub", category: "Comercial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-05.jpg", size: "wide" },
    { id: 6, title: "Proyecto Residencial", category: "Residencial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-06.jpg", size: "" },
    { id: 7, title: "Salón / Spa", category: "Comercial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-07.jpg", size: "" },
    { id: 8, title: "Salón / Spa", category: "Comercial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-08.jpg", size: "" },
    { id: 9, title: "Sala de Juntas", category: "Comercial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-09.jpg", size: "" },
    { id: 10, title: "Oficina", category: "Comercial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-10.jpg", size: "tall" },
    { id: 11, title: "Proyecto Residencial", category: "Residencial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-11.jpg", size: "" },
    { id: 12, title: "At Work Sphere", category: "Comercial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-12.jpg", size: "wide" },
    { id: 13, title: "Pasillo", category: "Comercial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-13.jpg", size: "" },
    { id: 14, title: "Área de Elevadores", category: "Comercial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-14.jpg", size: "wide" },
    { id: 15, title: "Oficina", category: "Comercial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-15.jpg", size: "" },
    { id: 16, title: "Interiorismo", category: "Interiorismo", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-16.jpg", size: "" },
    { id: 17, title: "Auditorio", category: "Comercial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-17.jpg", size: "wide" },
    { id: 18, title: "Sala de Espera", category: "Comercial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-18.jpg", size: "wide" },
    { id: 19, title: "Proyecto Residencial", category: "Residencial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-19.jpg", size: "wide" },
    { id: 20, title: "Proyecto Residencial", category: "Residencial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-20.jpg", size: "tall" },
    { id: 21, title: "Proyecto Residencial", category: "Residencial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-21.jpg", size: "tall" },
    { id: 22, title: "Proyecto Residencial", category: "Residencial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-22.jpg", size: "" },
    { id: 23, title: "Oficina", category: "Comercial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-23.jpg", size: "wide" },
    { id: 24, title: "Sala de Juntas", category: "Comercial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-24.jpg", size: "" },
    { id: 25, title: "Oficina", category: "Comercial", location: "Monterrey, México", year: 2024, image: "assets/images/proyecto-25.jpg", size: "" },
  ],

  featuredProject: {
    eyebrow: "Proyecto destacado",
    title: "Casa Nogal",
    description:
      "Una casa de un solo nivel organizada alrededor de un patio central de nogales existentes, con muros de tabique aparente y grandes vanos hacia el jardín.",
    location: "Valle de Bravo, México",
    year: 2023,
    image: "assets/images/proyecto-lounge-corporativo.jpg",
  },

  contact: {
    phoneDisplay: "81 2909 2505",
    phoneHref: "+528129092505",
    email: "fac.dblancomx@gmail.com",
    instagramHandle: "@dblancomx",
    instagramUrl: "https://instagram.com/dblancomx",
    address: "San Jerónimo, Monterrey, Nuevo León",
    ctaText:
      "¿Tienes un proyecto en mente? Escríbenos y cuéntanos en qué estás pensando.",
  },

  nav: [
    { label: "Estudio", href: "#estudio" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ],

  footer: {
    copyrightName: "Diseño Blanco",
  },
};
