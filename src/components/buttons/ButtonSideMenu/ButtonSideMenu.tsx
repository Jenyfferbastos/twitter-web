import "./style.css";
import iconHome from "../../../assets/img/IconHome.svg";
import iconExplore from "../../../assets/img/IconExplore.svg"
import iconNotifications from "../../../assets/img/IconNotifications.svg"
import iconMessages from "../../../assets/img/IconMessages.svg"
import iconBookmarks from "../../../assets/img/IconBookmarks.svg"
import iconLists from "../../../assets/img/IconLists.svg"
import iconProfile from "../../../assets/img/IconProfile.svg"
import iconMore from "../../../assets/img/IconMore.svg"

const icons = {
  ['home']: iconHome,
  ['explore']: iconExplore,
  ['notifications']: iconNotifications,
  ['messages']: iconMessages,
  ['bookmarks']: iconBookmarks,
  ['lists']: iconLists,
  ['profile']: iconProfile,
  ['more']: iconMore,
}

export interface ButtonSideMenuProps {
  icon: string;
  text: string;
  color: string;
}
export function ButtonSideMenu({ icon, text, color }: ButtonSideMenuProps) {
  return (
    <>
    <div className="Button">
      <img src={icons[icon]} />
      <button className={color}>{text}</button>
      </div>
    </>
  );
}
