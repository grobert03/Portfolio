const Footer = ({isDarkMode}) => {
  return(  
    <div className={`w-full text-center transition ease-in-out duration-300 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <p>Made by Grobert03</p>
    </div>
    )
}

export default Footer;