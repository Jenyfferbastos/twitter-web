import { useContext } from "react";
// import { useHistory } from "react-router-dom";
import "./style.css";
import { DynamicIcon } from "../../Icons/Icons";
import { ThemeContext } from "../../../common/context/Theme";
import { Link } from "react-router-dom";

export function ButtonSideMenu() {
  const {
    theme, 
   } = useContext(ThemeContext)

   const classButton = `button button-${theme}`;

  //  let history = useHistory();

  //  function handleClick() {
  //   history.push("/error");
  // }

  return (
    <>
      <div className={classButton}>
        <button className="button-side-menu" type="button">
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
         <Link to='/Profile'>Profile</Link>
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