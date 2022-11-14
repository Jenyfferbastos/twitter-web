import "./style.css";
import LogoTwitter from "../../assets/img/LogoTwitter.svg";
import React, { useRef } from "react"
import { Link } from "react-router-dom";

export interface LoginProps{}

export function Login({}: LoginProps) {
  
  
  const email = useRef();
  const password = useRef();
  const handleSubmit = () => {
    if(email.current.value === "usuario.twitter@gmail.com" && password.current.value === "twitter123"){
      localStorage.setItem("emailData", "usuario.twitter@gmail.com")
      localStorage.setItem("passwordData", "twitter123")
    }
  }
 
  return (
    <div className="login-container">
      <img className="img-logo-twitter" src={LogoTwitter}></img>
      <h1 className="title-login">Log in to Twitter</h1>
      <form className="form-login">
      <input
        className="input-login"
        type="email"
        ref={email}
        id="email"
        placeholder="Email"
        required
      />
      <input
        className="input-login"
        type="password"
        ref={password}
        id="password"
        placeholder="Password"
        required
      />
      <button 
       className="button-login"
       type="submit" 
       >
        Log in
      </button>
      </form>
      <div className="links-login">
        <Link to="/Error">Forgot password?</Link>
        <Link to="/Signup">Sign up to Twitter</Link>
      </div>
    </div>
  );
}
