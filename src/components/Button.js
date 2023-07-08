
const Button = ({text, clickHandler, isEnglish}) => {
  return <button className={`font-bold ${isEnglish ? 'underline' : ''}`} onClick={clickHandler}>{text}</button>
}

export default Button;