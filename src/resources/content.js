import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Olivera",
  lastName: "Maximiliano",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "maxi97olivera@gmail.com",
  location: "America/Argentina/Buenos_Aires", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Español", "Inglés"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MaxiE97/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://wwww.linkedin.com/in/olmax",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introducción",
    description: (
    <>
      <div className="font-body text-lg/relaxed text-neutral-800 dark:text-neutral-200">
        <p className="mb-4"> {/* mb-4 añade un margen inferior para separar los párrafos */}
          Soy un desarrollador full-stack con experiencia en el desarrollo de aplicaciones web.
        </p>
        <p className="mb-4">
          Participo activamente en el grupo de investigación de mi universidad,
          donde colaboro en proyectos que integran herramientas de inteligencia artificial.
        </p>
        <p>
          Me he graduado de dos carreras: Analista de Sistemas y Administración de Empresas. Aunque siempre estoy aprendiendo algo nuevo. 🌱
        </p>
      </div>
    </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencia",
    experiences: [
      {
        company: "Universidad Tecnológica Nacional FRCU",
        timeframe: "05/2024 - Presente",
        role: "Miembro en Grupo de Investigación de Bases de Datos",
        stack: ["Python", "LangChain", "LLMs", "VectorDBs", "Ollama","Pandas", "open-source embeddings"],
        achievements: [
          <>
            Investigación en IA y transformers aplicados al Procesamento de Lenguaje Natural.
          </>,
          <>
            Desarrollo de sistema por búsqueda de similtud utilizando Retrieval-Augmented Generation (RAG).
          </>,
          <>
            Desarrollo de scripts para evaluar automáticamente la precisión de las respuestas del sistema.
          </>,
        ],
        images: [],    
      },
      {
        company: "Proyecto freelance para COC EUROPE",
        timeframe: "11/2024 - 05/2025",
        role: "Desarrollador Full-Stack",
        stack: ["Python", "FastApi", "TypeScript","React", "Pandas", "BeautifulSoup", "Supabase","PostgreSQL"],
        achievements: [
          <>
            Extracción y procesamiento de datos desde múltiples fuentes web mediante scraping.
          </>,
          <>
            Limpieza y normalización de datos utilizando.
          </>,
          <>
            Creación de interfaz interactiva en React para visualización, edición y validación de datos.
          </>,
          <>
            Generación automática de fichas técnicas en múltiples idiomas.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Educación",
    institutions: [
      {
        name: "Universidad Tecnológica Nacional",
        description: <>Analista de Sistemas.</>,
      },
      {
        name: "Universidad Autonoma de Entre Ríos",
        description: <>Tec. en Administración</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
