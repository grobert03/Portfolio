import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "whoami": "Full-Stack developer based in Madrid, Spain.",
      "AboutMe-0": "About Me",
      "AboutMe-1": "Passionate about the world of computer science since I was young, when I discovered the realm of programming through game development, I am proud to have recently completed my <span class='marked'>higher degree</span> in Web Application Development, which has allowed me to strengthen my skills and knowledge in the field of web development.",
      "AboutMe-2": "My main objective is to continue growing as a professional in the field of web development, acquiring new skills, and contributing to the success of the projects I engage in. Currently, I am focused on mastering the <span class='marked>MERN</span> stack, as well as tools like <span class='marked'>Docker</span> and concepts of <span class='marked'>CI/CD</span>.",
      "AboutMe-3": "If you are looking for someone with a <span class='marked'>passion</span> for programming, solid technical skills, and a growth-oriented mindset, please feel free to contact me. I am excited to collaborate on new projects and contribute to your company's success.",
      "TechStack": "My Tech Stack",
      "Exp": "Professional Experience",
      "quality": "For 4 months, I have had the privilege of working as a Full-stack Developer at Quality Media Producciones. During my time there, I have gained practical experience by developing two applications using technologies such as <span class='marked'>Symfony</span>, <span class='marked'>MySQL</span>, and <span class='marked'>jQuery</span>. I have demonstrated my ability to work in a team, adapt quickly to new environments, and provide effective solutions to technical challenges.",
      "projects": "Projects",
      "brandico": "Twitter clone made using Symfony, jQuery and MySQL.",
      "cexplorer": "Country finder with information such as the current weather. Used the REST Countries and OpenWeather APIs alongside the React framework."
    }
  },
  es: {
    translation: {
      "whoami": "Desarrollador Full-Stack basado en Madrid.",
      "AboutMe-0": "Sobre mí",
      "AboutMe-1": "Apasionado por el mundo de la informática desde pequeño cuando descubrí el mundo de la programación mediante el desarrollo de videojuegos, me enorgullece haber completado recientemente mi <span class='marked'>grado superior</span> en Desarrollo de Aplicaciones Web, lo que me ha permitido fortalecer mis habilidades y conocimientos en el campo del desarrollo web.",
      "AboutMe-2": "Mi objetivo principal es continuar creciendo como profesional en el campo del desarrollo web, adquiriendo nuevas habilidades y contribuyendo al éxito de los proyectos en los que participe. Actualmente, estoy enfocado en dominar el stack <span class='marked'>MERN</span>, además de herramientas como <span class='marked'>Docker</span> y conceptos de <span class='marked'>CI/CD</span>.",
      "AboutMe-3": "Si buscas a alguien con <span class='marked'>pasión</span> por la programación, habilidades técnicas sólidas y una mentalidad orientada al <span class='marked'>crecimiento</span>, no dudes en contactarme. Estoy entusiasmado por colaborar en nuevos proyectos y contribuir al éxito de tu empresa.",
      "TechStack": "Conocimientos",
      "Exp": "Experiencia Profesional",
      "quality": "Durante 4 meses, he tenido el privilegio de trabajar como Desarrollador Full-stack en Quality Media Producciones. Allí, he adquirido experiencia práctica, desarrollando dos aplicaciones utilizando tecnologías como <span class='marked'>Symfony</span>, <span class='marked'>MySQL</span> y <span class='marked'>jQuery</span>. A lo largo de mi trayectoria, he demostrado mi capacidad para trabajar en equipo, adaptarme rápidamente a nuevos entornos y aportar soluciones efectivas a los desafíos técnicos.",
      "projects": "Proyectos",
      "brandico": "Clon de Twitter desarrollado con Symfony, jQuery y MySQL.",
      "cexplorer": "Buscador de países para consultar información como el clima actual. Utilizadas las APIs REST Countries y OpenWeather, junto al framework React."
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;