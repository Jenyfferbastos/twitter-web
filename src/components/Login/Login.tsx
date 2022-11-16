import "./style.css";
import LogoTwitter from "../../assets/img/LogoTwitter.svg";
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserData {
  name?: string;
  password?: string;
}

export function Login() {
  const [userData, setUserData] = useState<UserData>({});
  const history = useNavigate();

  function submitForm(event: FormEvent) {
    event.preventDefault();
    if (userData.name == "admin" && userData.password == "admin") {
      localStorage.setItem("user-data", JSON.stringify(userData));
      history("/");
    } else {
      return alert("Login inválido!");
    }
  }

  const handleUserData = ({ name, password }: UserData) => {
    if (name) {
      setUserData((prevStateValue) => ({
        ...prevStateValue,
        name,
      }));
    } else if (password)
      setUserData((prevStateValue) => ({
        ...prevStateValue,
        password,
      }));
  };

  return (
    <div className="login-container">
      <img className="img-logo-twitter" src={LogoTwitter}></img>
      <h1 className="title-login">Log in to Twitter</h1>

      <form className="form-login" onSubmit={submitForm}>
        <input
          className="input-login"
          type="text"
          id="email"
          placeholder="Email"
          required
          onChange={(e) => handleUserData({ name: e.target.value })}
        />
        <input
          className="input-login"
          type="password"
          id="password"
          placeholder="Password"
          required
          onChange={(e) => handleUserData({ password: e.target.value })}
        />
        <button className="button-login" type="submit">
          Log in
        </button>
      </form>

      <div className="links-login">
        <a>Forgot password?</a>
        <a>Sign up to Twitter</a>
      </div>
    </div>
  );
}