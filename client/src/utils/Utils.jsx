import "./Utils.scss";
import { Link } from "react-router-dom";

const Container = ({children}) => {
  return (
    <div className="container">
        {children}
    </div>
  )
}

const Address = ({maintext, secondarytext, icon}) => {
  return (
    <div className="address-item">
      <img src={icon} alt="" />
      <div className="address-item__text">
        <p>{maintext}</p>
        <small>{secondarytext}</small>
      </div>
    </div>
  )
}

const Loading = () => {
  return(
    <span className="loader"></span>
  )
}

const MainLoading = () => {
  return(
    <div className='peeek-loading'>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  )
}

const Success = () => {
  return(
    <div className="success-animation">
      <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
    </div> 
  )
}

const Button = ({text, clickHandler, type, appearance, loading, disabled}) => {
  function handleTypeChecking(appearance){
    switch(appearance){
      case "danger":
        return "danger-button"
      case "success":
        return "success-button"
      case "warning":
        return "warning-button"
      case "info":
        return "info-button"
      case "main":
        return "main-button"
      default:
        return "primary-button"
    }
  }
  return (
    <button disabled={disabled} type={type} {...loading ? {disabled: true} : null} onClick={clickHandler} className={handleTypeChecking(appearance) + " " + (loading ? "button--loading" : "")}>
     {loading ? <><Loading/> </>: text}
    </button>
  )
}


const Anchor = ({text, link, target, type}) => {
  return (
    <Link to={link} target={target ? target : null} className={type === "light" ? "anchor--light" : "anchor--dark"}>
      {text}
    </Link>
  )
}

export {Container, Address, Button, Anchor, Loading, MainLoading, Success}