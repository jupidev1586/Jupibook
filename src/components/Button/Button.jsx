import './index.css';

const Button = ({btnTextContent="Click", color, bgColor, fontSize='16px', width, type="button", onHandleClick=(() => {})}) => {
  const styles = {
    backgroundColor: bgColor,
    borderRadius: '4px',
    width: width,
    textAlign:'center',
    display:'inline-block',
    color:color,
    fontWeight: 'bold',
    fontSize: fontSize
  }
  return (
    <button onClick={onHandleClick} type={type} className="Button" style={ styles }>{ btnTextContent }</button>
  )
}

export default Button;