import './style.css'
import LogoTwitter from "../../assets/img/LogoTwitter.svg"
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../common/context/Theme';
import { useContext } from 'react';

export function Error404(){
  const {
    theme, 
   } = useContext(ThemeContext)
   
  return(
    <div className='container-error'>
    <img className='logo-twitter' src={LogoTwitter} />
    <div>
      <p>Hey, this page doesn't exist. Try looking for something else.</p>
    </div>
    <button className='button-return-home'><Link to="/">Return Home</Link></button>
    </div>
  )
}
