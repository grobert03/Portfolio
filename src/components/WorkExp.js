const WorkExp = ({isDarkMode, t}) => {
  return (
    <div className="flex md:w-3/4 mt-5 mx-auto flex-col  items-center justify-between">
      <h3
        className={`text-3xl text-center font-bold transition ease-in-out duration-300 mb-4 ${
          isDarkMode ? "text-cyan-400" : ""
        }`}
      >
        {t("Exp")}
      </h3>
      <div className={`border rounded-3xl  ${isDarkMode ? "border-cyan-400" : "border-black"} p-4 lg:w-1/2 w-3/4`}>
        <div className="flex gap-3 items-center">
          <img src="/logo-quality.png" alt="logo Quality Media"></img>
          <div>
            <div>Quality Media Producciones</div>
            <div>Mar 2023 - Jun 2023</div>
          </div>
        </div>
        <p className="md:text-justify" dangerouslySetInnerHTML={{ __html: t("quality") }}></p>
      </div>
    </div>
  );
};

export default WorkExp;
