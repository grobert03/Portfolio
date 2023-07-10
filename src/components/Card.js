import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Card = ({ isDarkMode, t, i18n }) => {
  return (
      <div className="flex flex-col items-center justify-between gap-3 text-center m-auto py-20 px-10">
      <div>
        <img
          className="rounded-full lg:w-3/4 sm:w-15 m-auto"
          src="/profile.png"
          alt="logo"
        ></img>
      </div>
      <div className="">
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
