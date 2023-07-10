import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Card from "./components/Card";
import { useState } from "react";
import { useTranslation } from "react-i18next";


const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const {t, i18n} = useTranslation();

  return (
    <div className={isDarkMode ? 'dark-mode w-full' : 'light-mode w-full'}>
      <Header t={t} i18n={i18n} isDarkMode={isDarkMode} setDarkMode={setDarkMode}></Header>
      <Card t={t} i18n={i18n} isDarkMode={isDarkMode}></Card>
      <AboutMe isDarkMode={isDarkMode} t={t}></AboutMe>
      {/* <WorkExp></WorkExp>
      <Projects></Projects>
      <Contact></Contact> */}
      <Footer t={t} i18n={i18n} isDarkMode={isDarkMode}></Footer>
    </div>
  )
}

export default App;
