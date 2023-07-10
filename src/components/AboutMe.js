import { FaHtml5, FaCss3, FaJs, FaPhp, FaReact, FaSymfony, FaNode, FaFigma, FaGitAlt } from "react-icons/fa";
import {SiExpress, SiMongodb, SiMysql} from "react-icons/si";

const AboutMe = ({ isDarkMode, t }) => {
  return (
    <div className="flex w-3/4 m-auto flex-col gap-5 items-center justify-between">
      <div className="w-full flex gap-5 justify-around">
        <h3
          className={`text-3xl font-bold transition ease-in-out duration-300 ${
            isDarkMode ? "text-cyan-400" : ""
          }`}
        >
          My Tech Stack
        </h3>
        <h3
          className={`text-3xl font-bold transition ease-in-out  duration-300 ${
            isDarkMode ? "text-cyan-400" : ""
          }`}
        >
          About me
        </h3>
      </div>
      <div className="w-full flex gap-5 justify-between">
        <div className="w-1/2 flex-1 grid grid-cols-3 text-center">
          <div className=" p-4 w-full">
            <div className="flex flex-col">
              <FaHtml5 className="m-auto" size="2.5em"></FaHtml5>
              <span>HTML5</span>
            </div>
          </div>
          <div className=" p-4 w-full">
            <div className="flex flex-col">
              <FaCss3 className="m-auto" size="2.5em"></FaCss3>
              <span>CSS3</span>
            </div>
          </div>
          <div className=" p-4 w-full">
            <div className="flex flex-col">
              <FaJs className="m-auto" size="2.5em"></FaJs>
              <span>Javascript</span>
            </div>
          </div>
          <div className=" p-4 w-full">
            <div className="flex flex-col">
              <FaReact className="m-auto" size="2.5em"></FaReact>
              <span>React</span>
            </div>
          </div>
          <div className=" p-4 w-full">
            <div className="flex flex-col">
              <FaNode className="m-auto" size="2.5em"></FaNode>
              <span>Node.JS</span>
            </div>
          </div>
          <div className=" p-4 w-full">
            <div className="flex flex-col">
              <SiExpress className="m-auto" size="2.5em"></SiExpress>
              <span>Express</span>
            </div>
          </div>
          <div className=" p-4 w-full">
            <div className="flex flex-col">
              <SiMongodb className="m-auto" size="2.5em"></SiMongodb>
              <span>MongoDB</span>
            </div>
          </div>
          <div className=" p-4 w-full">
            <div className="flex flex-col">
              <FaPhp className="m-auto" size="2.5em"></FaPhp>
              <span>PHP</span>
            </div>
          </div>
          
          <div className=" p-4 w-full">
            <div className="flex flex-col">
              <FaSymfony className="m-auto" size="2.5em"></FaSymfony>
              <span>Symfony</span>
            </div>
          </div>
          
          <div className=" p-4 w-full">
            <div className="flex flex-col">
              <SiMysql className="m-auto" size="2.5em"></SiMysql>
              <span>MySQL</span>
            </div>
          </div>
          <div className=" p-4 w-full">
            <div className="flex flex-col">
              <FaGitAlt className="m-auto" size="2.5em"></FaGitAlt>
              <span>Git</span>
            </div>
          </div>
          <div className=" p-4 w-full">
            <div className="flex flex-col">
              <FaFigma className="m-auto" size="2.5em"></FaFigma>
              <span>Figma</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex-1 text-justify flex flex-col gap-5">
          <p dangerouslySetInnerHTML={{ __html: t("AboutMe-1") }}></p>
          <p dangerouslySetInnerHTML={{ __html: t("AboutMe-2") }}></p>
          <p dangerouslySetInnerHTML={{ __html: t("AboutMe-3") }}></p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
