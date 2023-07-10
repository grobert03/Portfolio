import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "whoami": "Hi, I'm Robert Andrei Gaina, a Full-Stack developer based in Madrid, Spain.",
      "AboutMe-1": "Passionate about the world of computer science since I was young, when I discovered the realm of programming through game development, I am proud to have recently completed my <span class='marked'>higher degree</span> in Web Application Development, which has allowed me to strengthen my skills and knowledge in the field of web development.",
      "AboutMe-2": "My main objective is to continue growing as a professional in the field of web development, acquiring new skills, and contributing to the success of the projects I engage in. Currently, I am focused on mastering the <span class='marked>MERN</span> stack, as well as tools like <span class='marked'>Docker</span> and concepts of <span class='marked'>CI/CD</span>.",
      "AboutMe-3": "If you are looking for someone with a <span class='marked'>passion</span> for programming, solid technical skills, and a growth-oriented mindset, please feel free to contact me. I am excited to collaborate on new projects and contribute to your company's success."
    }
  },
  es: {
    translation: {
      "whoami": "Hola, soy Robert Andrei Gaina, un desarrollador Full-Stack basado en Madrid.",
      "AboutMe-1": "Apasionado por el mundo de la informática desde pequeño cuando descubrí el mundo de la programación mediante el desarrollo de videojuegos, me enorgullece haber completado recientemente mi <span class='marked'>grado superior</span> en Desarrollo de Aplicaciones Web, lo que me ha permitido fortalecer mis habilidades y conocimientos en el campo del desarrollo web.",
      "AboutMe-2": "Mi objetivo principal es continuar creciendo como profesional en el campo del desarrollo web, adquiriendo nuevas habilidades y contribuyendo al éxito de los proyectos en los que participe. Actualmente, estoy enfocado en dominar el stack <span class='marked'>MERN</span>, además de herramientas como <span class='marked'>Docker</span> y conceptos de <span class='marked'>CI/CD</span>.",
      "AboutMe-3": "Si buscas a alguien con <span class='marked'>pasión</span> por la programación, habilidades técnicas sólidas y una mentalidad orientada al <span class='marked'>crecimiento</span>, no dudes en contactarme. Estoy entusiasmado por colaborar en nuevos proyectos y contribuir al éxito de tu empresa."
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