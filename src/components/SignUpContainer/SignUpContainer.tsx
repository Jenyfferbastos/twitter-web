import "./style.css";
import LogoTwitter from "../../assets/img/LogoTwitter.svg";
import LogoGoogle from '../../assets/img/google-icon.svg';
import LogoApple from '../../assets/img/logo-apple.svg'
import { Link } from "react-router-dom";


export function SignUpContainer() {
  return (
    <div className="signup-container">
      <div className="signup-container-acess">
      <img className="img-logo-twitter" src={LogoTwitter}></img>
      <h1 className="title-signup">Happening now</h1>
      <h2 className="title-secondary-signup">Join Twitter today</h2>
      <button  className="buttom-signup"><img src={ LogoGoogle } />Sign up with Google</button>
      <button  className="buttom-signup">< img src={ LogoApple } />Sign up with Apple</button>
      <button  className="buttom-signup">Sign up with phone or email</button>
      <div className="text-signup">
      <p>
        By singing up you agree to the 
        <Link className="links-signup" to='/Error'> Terms of Service </Link>
        and
        <Link className="links-signup" to='/Error'> Privacy <br/>Policy</Link>
        , including 
        <Link className="links-signup" to='/Error'> Cookie Use</Link>
        .
      </p>
      <p>
        Already have an account? 
        <Link className="links-signup" to='/Login'> Log in</Link>
      </p>
      </div>
      </div>
      <footer>
        
      </footer>
    </div>
  );
}

