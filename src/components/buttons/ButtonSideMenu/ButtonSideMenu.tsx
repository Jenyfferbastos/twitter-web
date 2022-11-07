import "./style.css";
import { DynamicIcon } from "../../Icons/Icons";

export interface ButtonSideMenuProps {

}
export function ButtonSideMenu({  }: ButtonSideMenuProps) {
  return (
    <>
      <div className="button button-dark button-light">
      <button className="button-side-menu">
          <DynamicIcon icon="HomeDefault" theme="light" />
          Home
        </button>
      </div>

      <div className="button button-dark button-light">
      <button className="button-side-menu">
          <DynamicIcon icon="ExploreDefault" theme="light" />
          Explore
        </button>
      </div>

      <div className="button button-dark button-light">
      <button className="button-side-menu">
          <DynamicIcon icon="NotificationsDefault" theme="light" />
          Notifications
        </button>
      </div>

      <div className="button button-dark button-light">
      <button className="button-side-menu">
          <DynamicIcon icon="MessagesDefault" theme="light" />
          Messages
        </button>
      </div>

      <div className="button button-dark button-light">
      <button className="button-side-menu">
          <DynamicIcon icon="BookmarksDefault" theme="light" />
          Bookmarks
        </button>
      </div>

      <div className="button button-dark button-light">
      <button className="button-side-menu">
          <DynamicIcon icon="ListsDefault" theme="light" />
          Lists
        </button>
      </div>

      <div className="button button-dark button-light">
      <button className="button-side-menu">
          <DynamicIcon icon="ProfileDefault" theme="light" />
          Profile
        </button>
      </div>

      <div className="button button-dark button-light">
      <button className="button-side-menu">
          <DynamicIcon icon="MoreDefault" theme="light" />
          More
        </button>
      </div>
    </>
  );
}
