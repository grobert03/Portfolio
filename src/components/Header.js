import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const {t, i18n} = useTranslation();
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  useEffect(() => {
    if (isDarkMode) {
      i18n.changeLanguage('es');
      document.documentElement.classList.add("dark-mode");
    } else {
      i18n.changeLanguage('en');
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <header className="py-4 px-5 font-roboto text-center">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-red text-2xl font-semibold">Gaina.dev</h1>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                {t('Home')}
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
              {t('About')}
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
              {t('Projects')}
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
