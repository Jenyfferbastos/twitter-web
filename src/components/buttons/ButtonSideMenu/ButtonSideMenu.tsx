import { useContext } from "react";
import "./style.css";
import { DynamicIcon } from "../../Icons/Icons";
import { ThemeContext } from "../../../common/context/Theme";

export function ButtonSideMenu() {
  const {
    theme, 
   } = useContext(ThemeContext)
   
  const classButton = `button button-${theme}`;

  return (
    <>
      <div className={classButton}>
        <button className="button-side-menu">
          <DynamicIcon icon="HomeDefault" theme={theme} />
          Home
        </button>
      </div>

      <div className={classButton}>
        <button className="button-side-menu">
          <DynamicIcon icon="ExploreDefault" theme={theme} />
          Explore
        </button>
      </div>

      <div className={classButton}>
        <button className="button-side-menu">
          <DynamicIcon icon="NotificationsDefault" theme={theme} />
          Notifications
        </button>
      </div>

      <div className={classButton}>
        <button className="button-side-menu">
          <DynamicIcon icon="MessagesDefault" theme={theme} />
          Messages
        </button>
      </div>

      <div className={classButton}>
        <button className="button-side-menu">
          <DynamicIcon icon="BookmarksDefault" theme={theme} />
          Bookmarks
        </button>
      </div>

      <div className={classButton}>
        <button className="button-side-menu">
          <DynamicIcon icon="ListsDefault" theme={theme} />
          Lists
        </button>
      </div>

      <div className={classButton}>
        <button className="button-side-menu">
          <DynamicIcon icon="ProfileDefault" theme={theme} />
          Profile
        </button>
      </div>

      <div className={classButton}>
        <button className="button-side-menu">
          <DynamicIcon icon="MoreDefault" theme={theme} />
          More
        </button>
      </div>
    </>
  );
}