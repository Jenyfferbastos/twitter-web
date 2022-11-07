import "./style.css";
import { DynamicIcon } from "../../Icons/Icons";

export interface ButtonSideMenuProps {

}
export function ButtonSideMenu({  }: ButtonSideMenuProps) {
  return (
    <>
      <div className="Button">
      <button className="buttonSideMenu">
          <DynamicIcon icon="HomeDefault" theme="light" />
          Home
        </button>
      </div>

      <div className="Button">
        <button className="buttonSideMenu">
          <DynamicIcon icon="ExploreDefault" theme="light" />
          Explore
        </button>
      </div>

      <div className="Button">
        <button className="buttonSideMenu">
          <DynamicIcon icon="NotificationsDefault" theme="light" />
          Notifications
        </button>
      </div>

      <div className="Button">
        <button className="buttonSideMenu">
          <DynamicIcon icon="MessagesDefault" theme="light" />
          Messages
        </button>
      </div>

      <div className="Button">
        <button className="buttonSideMenu">
          <DynamicIcon icon="BookmarksDefault" theme="light" />
          Bookmarks
        </button>
      </div>

      <div className="Button">
        <button className="buttonSideMenu">
          <DynamicIcon icon="ListsDefault" theme="light" />
          Lists
        </button>
      </div>

      <div className="Button">
        <button className="buttonSideMenu">
          <DynamicIcon icon="ProfileDefault" theme="light" />
          Profile
        </button>
      </div>

      <div className="Button">
        <button className="buttonSideMenu">
          <DynamicIcon icon="MoreDefault" theme="light" />
          More
        </button>
      </div>
    </>
  );
}
