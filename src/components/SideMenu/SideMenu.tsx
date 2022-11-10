import { useContext } from "react";
import "./style.css";
import { ButtonSideMenu } from "../buttons/ButtonSideMenu/ButtonSideMenu";
import { ButtonPrimary } from "../buttons/ButtonPrimary/ButtonPrimary";
import { Profile } from "../Profile/Profile";
import { ThemeContext } from "../../common/context/Theme";

export function SideMenu() {
  const {
    theme, 
   } = useContext(ThemeContext)
   
  return (
    <div className="divSideMenu">
      <img className="LogoTwitter" src="../src/assets/img/LogoTwitter.svg" />
      <ButtonSideMenu />

      <ButtonPrimary size="medium" children="Tweet" />

      <Profile textName="Davide Biscuso" textUser="@biscuttu" />
    </div>
  );
}