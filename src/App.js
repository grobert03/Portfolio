import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Card from "./components/Card";
import WorkExp from "./components/WorkExp";
import Projects from "./components/Projects";
import { useState } from "react";
import { useTranslation } from "react-i18next";


const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const {t, i18n} = useTranslation();

  return (
    <div className={isDarkMode ? 'dark-mode w-full h-full' : 'light-mode w-full h-full'}>
      <Header t={t} i18n={i18n} isDarkMode={isDarkMode} setDarkMode={setDarkMode}></Header>
      <Card t={t} i18n={i18n} isDarkMode={isDarkMode}></Card>
      <AboutMe isDarkMode={isDarkMode} t={t}></AboutMe>
      <WorkExp isDarkMode={isDarkMode} t={t}></WorkExp>
      <Projects isDarkMode={isDarkMode} t={t}></Projects>
      <Footer t={t} i18n={i18n} isDarkMode={isDarkMode}></Footer>
    </div>
  )
}

export default App;
