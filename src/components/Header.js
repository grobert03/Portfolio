import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState, useEffect } from "react";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const Header = () => {
  const {t, i18n} = useTranslation();
  const [isDarkMode, setDarkMode] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };


  return (
    <header className={`py-4 px-5 font-roboto text-center ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-red text-2xl font-semibold">Gaina.dev</h1>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <a href="#">
                {t('Home')}
              </a>
            </li>
            <li>
              <a href="#" >
              {t('About')}
              </a>
            </li>
            <li>
              <a href="#">
              {t('Projects')}
              </a>
            </li>
            <li>
              <a href="#">
              {t('Contact')}
              </a>
            </li>
            <li>
              <DarkModeSwitch
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={24}
              />
            </li>
            <li>
              <Button text="EN" isEnglish={isEnglish} clickHandler={() => {i18n.changeLanguage('en'); setIsEnglish(true)}}></Button>/
              <Button text="ES" isEnglish={!isEnglish} clickHandler={() => {i18n.changeLanguage('es'); setIsEnglish(false)}}></Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
