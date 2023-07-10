import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";
import Button from "./Button";
import HeaderLink from "./HeaderLink";

const Header = ({isDarkMode, setDarkMode, t, i18n}) => {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };


  return (
    <header className={`py-4 px-5 font-roboto text-center transition ease-in-out duration-100 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Gaina.dev</h1>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <HeaderLink isDarkMode={isDarkMode} href="#" text={t('Home')}></HeaderLink>
            </li>
            <li>
              <HeaderLink isDarkMode={isDarkMode} href="#" text={t('About')}></HeaderLink>
            </li>
            <li>
              <HeaderLink isDarkMode={isDarkMode} href="#" text={t('Projects')}></HeaderLink>
            </li>
            <li>
              <HeaderLink isDarkMode={isDarkMode} href="#" text={t('Contact')}></HeaderLink>
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
