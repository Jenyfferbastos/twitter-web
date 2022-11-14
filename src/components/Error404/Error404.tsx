import { useContext } from 'react';
import { SideMenu } from '../SideMenu/SideMenu'
import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../common/context/Theme';

export function Error404(){
  const {
    theme, 
   } = useContext(ThemeContext)
   
  return(
    <>
    <div>
    <SideMenu/>
    </div>
    <div>
      <p>Hey, this page doesn't exist. Try looking for something else.</p>
      <button>Search</button>
    </div>
    </>
  )
}
