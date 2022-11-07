import "./style.css";
import { ButtonSideMenu } from "../buttons/ButtonSideMenu/ButtonSideMenu";
import { ButtonPrimary } from "../buttons/ButtonPrimary/ButtonPrimary";
import { Profile } from "../Profile/Profile";

export function SideMenu() {
  return (
    <div className="divSideMenu">
      <img className="LogoTwitter" src="../src/assets/img/LogoTwitter.svg" />
      <ButtonSideMenu/>

      <ButtonPrimary size="medium" children="Tweet" />

      <Profile
        textName="Davide Biscuso"
        textUser="@biscuttu"
      />
    </div>
  );
}
