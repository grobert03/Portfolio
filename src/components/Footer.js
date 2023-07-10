const Footer = ({isDarkMode}) => {
  return(  
    <div className={`w-full  text-center transition mt-3 ease-in-out duration-300 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <p>Made by Grobert03 using React.js and Tailwind.css</p>
    </div>
    )
}

export default Footer;