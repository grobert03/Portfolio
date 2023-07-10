
const Button = ({text, clickHandler, isEnglish}) => {
  return <button className={`${isEnglish ? 'text-cyan-400 font-bold' : ''}`} onClick={clickHandler}>{text}</button>
}

export default Button;