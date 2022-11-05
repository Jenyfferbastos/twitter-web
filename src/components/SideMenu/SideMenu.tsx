import './style.css'
import { ButtonSideMenu } from "../buttons/ButtonSideMenu/ButtonSideMenu";
import { ButtonPrimary } from "../buttons/ButtonPrimary/ButtonPrimary";
import { Profile } from "../Profile/Profile";

export function SideMenu() {
  return (
    <div className="divSideMenu">
      <img className="LogoTwitter" src="../src/assets/img/LogoTwitter.svg" />
      <ButtonSideMenu color="" icon="home" text="Home" />
      <ButtonSideMenu color="" icon="explore" text="Explore" />
      <ButtonSideMenu color="" icon="notifications" text="Notifications" />
      <ButtonSideMenu color="" icon="messages" text="Messages" />
      <ButtonSideMenu color="" icon="bookmarks" text="Bookmarks" />
      <ButtonSideMenu color="" icon="lists" text="Lists" />
      <ButtonSideMenu color="" icon="profile" text="Profile" />
      <ButtonSideMenu color="" icon="more" text="More" />

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
