import Project from "./Project";

const Projects = ({ isDarkMode, t }) => {
  return (
    <div className="flex md:w-3/4 mt-5 mx-auto flex-col items-center justify-between">
      <h3
        className={`text-3xl text-center font-bold transition ease-in-out duration-300 mb-4 ${
          isDarkMode ? "text-cyan-400" : ""
        }`}
      >
        {t("projects")}
      </h3>
      <div className="flex flex-col lg:flex-row gap-3 justify-center items-center  lg:items-stretch">
        <Project isDarkMode={isDarkMode} image="brandico.png" name="Brandico" description={t("brandico")} repo="https://github.com/grobert03/Proyecto-Brandico" site="https://brandico.gainadev.com"/>
        <Project isDarkMode={isDarkMode} image="cexplorer.png" name="Country Explorer" description={t("cexplorer")} repo="https://github.com/grobert03/Country-Explorer" site="https://country-explorer.gainadev.com"/>
      </div>
    </div>
  );
};

export default Projects;
