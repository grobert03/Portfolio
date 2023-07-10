const WorkExp = ({isDarkMode, t}) => {
  return (
    <div className="flex md:w-3/4 mt-5 mx-auto flex-col  items-center justify-between">
      <h3
        className={`text-3xl text-center font-bold transition ease-in-out duration-300 ${
          isDarkMode ? "text-cyan-400" : ""
        }`}
      >
        Professional Experience
      </h3>
      <div className="border rounded-3xl  border-white p-4 w-3/4">
        <div className="flex gap-3 items-center">
          <img src="/logo-quality.png" alt="logo Quality Media"></img>
          <div>
            <div>Quality Media Producciones</div>
            <div>Mar 2023 - Jun 2023</div>
          </div>
        </div>
        <p className="text-justify">Durante 4 meses, he tenido el privilegio de trabajar como Desarrollador Full-stack en Quality Media Producciones. Allí, he adquirido experiencia práctica, desarrollando dos aplicaciones utilizando tecnologías como Symfony, MySQL y jQuery. A lo largo de mi trayectoria, he demostrado mi capacidad para trabajar en equipo, adaptarme rápidamente a nuevos entornos y aportar soluciones efectivas a los desafíos técnicos.</p>
      </div>
    </div>
  );
};

export default WorkExp;
