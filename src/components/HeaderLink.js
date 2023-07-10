const HeaderLink = ({text, href, isDarkMode}) => {
  return <a className="hover:text-cyan-400 transition duration-300 ease-in-out" href={href}>{text}</a>
}

export default HeaderLink;