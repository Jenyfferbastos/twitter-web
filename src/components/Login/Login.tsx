import "./style.css";
import LogoTwitter from "../../assets/img/LogoTwitter.svg";
import React, { FormEvent, useState } from "react";

export function Login() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  function submitForm(event: FormEvent) {
    event.preventDefault();
    if (name == "admin" || password == "admin") {
      localStorage.setItem("acess", true);
      return window.location.href = "http://127.0.0.1:5173/";
    } else {
      return alert("Login inválido!");
    }
  };

  const acessName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const acessPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
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
          onChange={acessName}
        />
        <input
          className="input-login"
          type="password"
          id="password"
          placeholder="Password"
          required
          onChange={acessPassword}
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
