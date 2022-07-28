import './index.css';

const Button = ({btnTextContent="Click", color, bgColor, width, type="button", onHandleClick=(() => {})}) => {
  const styles = {
    backgroundColor: bgColor,
    borderRadius: '4px',
    width: width,
    textAlign:'center',
    display:'inline-block',
    color:color,
    fontWeight: 'bold',
    fontSize: '16px'
  }
  return (
    <button onClick={onHandleClick} type={type} className="Button" style={ styles }>{ btnTextContent }</button>
  )
}

export default Button;