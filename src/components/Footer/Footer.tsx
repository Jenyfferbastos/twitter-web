import "./style.css"

export function Footer(){
  return(
    <div className="footerTwitter">
      <div className="textsFooter">
      <h2 className="titleFooter">Don't miss what's happening</h2>
      <p className="textFooter">People on Twitter are the first to know.</p>
      </div>
      <div className="buttonsFooter">
      <button className="buttonLogIn">Log in</button>
      <button className="buttonSignUp">Sign up</button>
      </div>
    </div>
  )
}