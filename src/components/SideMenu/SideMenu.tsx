import "./style.css";
import { ButtonSideMenu } from "../buttons/ButtonSideMenu/ButtonSideMenu";
import { ButtonPrimary } from "../buttons/ButtonPrimary/ButtonPrimary";
import { Profile } from "../Profile/Profile";

export interface ISideMenu {
  theme: string;
}

export function SideMenu({ theme }: ISideMenu) {
  return (
    <div className="divSideMenu">
      <img className="LogoTwitter" src="../src/assets/img/LogoTwitter.svg" />
      <ButtonSideMenu theme={theme} />

      <ButtonPrimary size="medium" children="Tweet" />

      <Profile textName="Davide Biscuso" textUser="@biscuttu" theme={theme} />
    </div>
  );
}