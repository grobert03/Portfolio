import {IoLogoGithub} from "react-icons/io5";
import {BsGlobe2} from "react-icons/bs";

const Project = ({image, name, description, isDarkMode, repo, site}) => {
  return (
    <div className={`w-1/2 text-center border py-4 px-4 ${isDarkMode ? "border-cyan-400" : "border-black"}`}>
      <img className="w-full h-1/2 m-auto" src={`/${image}`} alt="project"/>
      <p className="font-bold text-xl">{name}</p>
      <p>{description}</p>
      <div className="flex justify-center items-center mt-3 gap-3">
        <a href={repo} target="_blank"><IoLogoGithub title="Github" size="2em"/></a>
        <a href={site} target="_blank"><BsGlobe2 title="Website" size="2em"/></a>
      </div>
    </div>
  )
}

export default Project;