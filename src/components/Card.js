import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Card = ({ isDarkMode, t, i18n }) => {
  return (
    <div className="flex items-center justify-between flex-col gap-3 text-center w-2/4 m-auto mt-3 py-20 px-10">
      <div>
        <img
          className="rounded-full w-1/3 m-auto"
          src="/profile.png"
          alt="logo"
        ></img>
      </div>
      <div className="w-2/3">
        <h2
          className={`text-4xl font-bold transition ease-in-out duration-300 ${
            isDarkMode ? "text-cyan-400" : ""
          }`}
        >
          Robert Andrei Gaina
        </h2>
        <p>{t("whoami")}</p>
      </div>

      <div className="flex gap-3">
        <a href="https://www.linkedin.com/in/robert-gaina" target="_blank"><FaLinkedin className={isDarkMode ? "text-cyan-400" : ""} size="2em"></FaLinkedin></a>
        <a href="https://github.com/grobert03" target="_blank"><FaGithub className={isDarkMode ? "text-cyan-400" : ""}  size="2em"></FaGithub></a>
      </div>
    </div>
  );
};

export default Card;
