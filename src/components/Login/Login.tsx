import "./style.css";
import LogoTwitter from "../../assets/img/LogoTwitter.svg";
import { Link } from "react-router-dom";

export function Login() {
 function handleLogin(e){
  e.preventDefault;
  console.log(e.target.value)
 }
  return (
    <div className="login-container">
      <img className="img-logo-twitter" src={LogoTwitter}></img>
      <h1 className="title-login">Log in to Twitter</h1>
      <form className="form-login">
      <input
        className="input-login"
        type="text"
        id="username"
        placeholder="Username"
        required
      />
      <input
        className="input-login"
        type="password"
        id="password"
        placeholder="Password"
        required
      />
      </form>
      <button className="button-login" type="submit" onSubmit={handleLogin}>
        Log in
      </button>
      <div className="links-login">
        <Link to="/Error">Forgot password?</Link>
        <Link to="/Signup">Sign up to Twitter</Link>
      </div>
    </div>
  );
}
