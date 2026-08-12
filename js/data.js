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
    aboutImage: "assets/images/imagen-nosotros.jpg",
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
        "Las asesorías de diseño interior se centran en adaptar tu espacio actual para aprovecharlo al máximo, optimizando lo que ya tienes, con recomendaciones claras y detalles precisos.",
    },
  ],

  // "size" controla la proporción de la tarjeta en la grilla:
  // "tall" (vertical), "wide" (horizontal) o "" (cuadrada, por defecto).
  projects: [
    { id: 1, image: "assets/images/proyecto-01.jpg", size: "tall" },
    { id: 2, image: "assets/images/proyecto-02.jpg", size: "wide" },
    { id: 3, image: "assets/images/proyecto-03.jpg", size: "tall" },
    { id: 4, image: "assets/images/proyecto-04.jpg", size: "tall" },
    { id: 5, image: "assets/images/proyecto-05.jpg", size: "tall" },
    { id: 6, image: "assets/images/proyecto-06.jpg", size: "tall" },
    { id: 7, image: "assets/images/proyecto-07.jpg", size: "tall" },
    { id: 8, image: "assets/images/proyecto-08.jpg", size: "tall" },
    { id: 9, image: "assets/images/proyecto-09.jpg", size: "tall" },
    { id: 10, image: "assets/images/proyecto-10.jpg", size: "wide" },
    { id: 11, image: "assets/images/proyecto-11.jpg", size: "tall" },
    { id: 12, image: "assets/images/proyecto-12.jpg", size: "tall" },
    { id: 13, image: "assets/images/proyecto-13.jpg", size: "wide" },
    { id: 14, image: "assets/images/proyecto-14.jpg", size: "wide" },
    { id: 15, image: "assets/images/proyecto-15.jpg", size: "wide" },
    { id: 16, image: "assets/images/proyecto-16.jpg", size: "tall" },
    { id: 17, image: "assets/images/proyecto-17.jpg", size: "wide" },
    { id: 18, image: "assets/images/proyecto-18.jpg", size: "tall" },
    { id: 19, image: "assets/images/proyecto-19.jpg", size: "wide" },
    { id: 20, image: "assets/images/proyecto-20.jpg", size: "tall" },
    { id: 21, image: "assets/images/proyecto-21.jpg", size: "tall" },
    { id: 22, image: "assets/images/proyecto-22.jpg", size: "tall" },
    { id: 23, image: "assets/images/proyecto-23.jpg", size: "tall" },
    { id: 24, image: "assets/images/proyecto-24.jpg", size: "tall" },
    { id: 25, image: "assets/images/proyecto-25.jpg", size: "tall" },
    { id: 26, image: "assets/images/proyecto-26.jpg", size: "tall" },
    { id: 27, image: "assets/images/proyecto-27.jpg", size: "tall" },
    { id: 28, image: "assets/images/proyecto-28.jpg", size: "wide" },
    { id: 29, image: "assets/images/proyecto-29.jpg", size: "wide" },
    { id: 30, image: "assets/images/proyecto-30.jpg", size: "tall" },
    { id: 31, image: "assets/images/proyecto-31.jpg", size: "tall" },
    { id: 32, image: "assets/images/proyecto-32.jpg", size: "wide" },
    { id: 33, image: "assets/images/proyecto-33.jpg", size: "tall" },
    { id: 34, image: "assets/images/proyecto-34.jpg", size: "tall" },
    { id: 35, image: "assets/images/proyecto-35.jpg", size: "wide" },
    { id: 36, image: "assets/images/proyecto-36.jpg", size: "tall" },
    { id: 37, image: "assets/images/proyecto-37.jpg", size: "tall" },
    { id: 38, image: "assets/images/proyecto-38.jpg", size: "tall" },
    { id: 39, image: "assets/images/proyecto-39.jpg", size: "wide" },
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
