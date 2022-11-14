import "./style.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../../common/context/Theme"

export function Footer() {
  const {
    theme, 
   } = useContext(ThemeContext)

  return(
    <div className="footerTwitter">
      <div className="textsFooter">
      <h2 className="titleFooter">Don't miss what's happening</h2>
      <p className="textFooter">People on Twitter are the first to know.</p>
      </div>
      <div className="buttonsFooter">
      <button className="buttonLogIn"><Link to='/Login'>Log in</Link></button>
      <button className="buttonSignUp"><Link to='/Signup'>Sign up</Link></button>
      </div>
    </div>
  )
}