import "./style.css";
import { DynamicIcon } from "../../Icons/Icons";

export interface ButtonSideMenuProps {
  theme: string;
}
export function ButtonSideMenu({ theme }: ButtonSideMenuProps) {
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