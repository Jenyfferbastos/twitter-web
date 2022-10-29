import './style.css'
import { ButtonSideMenu } from "../buttons/ButtonSideMenu/ButtonSideMenu";
import { ButtonPrimary } from "../buttons/ButtonPrimary/ButtonPrimary";
import { Profile } from "../Profile/Profile";

export function SideMenu() {
  return (
    <div className="divSideMenu">
      <img className="LogoTwitter" src="../src/assets/img/LogoTwitter.svg" />
      <ButtonSideMenu cor="" icon="home" text="Home" />
      <ButtonSideMenu cor="" icon="explore" text="Explore" />
      <ButtonSideMenu cor="" icon="notifications" text="Notifications" />
      <ButtonSideMenu cor="" icon="messages" text="Messages" />
      <ButtonSideMenu cor="" icon="bookmarks" text="Bookmarks" />
      <ButtonSideMenu cor="" icon="lists" text="Lists" />
      <ButtonSideMenu cor="" icon="profile" text="Profile" />
      <ButtonSideMenu cor="" icon="more" text="More" />

      <ButtonPrimary size="medium" children="Tweet" />

      <Profile
        avatar="avatar"
        textName="Davide Biscuso"
        textUser="@biscuttu"
        icon="iconProfile"
      />
    </div>
  );
}
