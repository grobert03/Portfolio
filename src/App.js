import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Card from "./components/Card";
import WorkExp from "./components/WorkExp";
import Projects from "./components/Projects";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (navigator.language === "en-US" || navigator.userLanguage === "en-US") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("es");
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      // dark mode
      setDarkMode(true);
    }
  }, [i18n]);

  return (
    <div className={isDarkMode ? "dark-mode " : "light-mode"}>
      <Header
        t={t}
        i18n={i18n}
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode}
      ></Header>
      <Card t={t} i18n={i18n} isDarkMode={isDarkMode}></Card>
      <AboutMe isDarkMode={isDarkMode} t={t}></AboutMe>
      <WorkExp isDarkMode={isDarkMode} t={t}></WorkExp>
      <Projects isDarkMode={isDarkMode} t={t}></Projects>
      <Footer t={t} i18n={i18n} isDarkMode={isDarkMode}></Footer>
    </div>
  );
};

export default App;
