import { useContext } from "react";
import "./style.css";
import { DynamicIcon } from "../../Icons/Icons";
import { ThemeContext } from "../../../common/context/Theme";
import { Link, useNavigate } from "react-router-dom";

export interface ButtonSideMenuProps{}

export function ButtonSideMenu({}: ButtonSideMenuProps) {
  const {
    theme, 
   } = useContext(ThemeContext)
   
   let navigate = useNavigate();

   const classButton = `button button-${theme}`

  return (
    <>
      <div className={classButton}>
        <button className="button-side-menu" type="button">
          <DynamicIcon icon="HomeDefault" theme={theme} />
          <Link to="/"> Home</Link>
        </button>
      </div>

      <div className={classButton}>
        <button className="button-side-menu" onClick={() => navigate("/*")}>
          <DynamicIcon icon="ExploreDefault" theme={theme} />
          <Link to="/*">Explore</Link>
        </button>
      </div>

      <div className={classButton}>
        <button className="button-side-menu">
          <DynamicIcon icon="NotificationsDefault" theme={theme} />
          <Link to="/*">Notifications</Link>
        </button>
      </div>

      <div className={classButton}>
        <button className="button-side-menu">
          <DynamicIcon icon="MessagesDefault" theme={theme} />
          <Link to="/*">Messages</Link>
        </button>
      </div>

      <div className={classButton}>
        <button className="button-side-menu">
          <DynamicIcon icon="BookmarksDefault" theme={theme} />
          <Link to="/*">Bookmarks</Link>
        </button>
      </div>

      <div className={classButton}>
        <button className="button-side-menu">
          <DynamicIcon icon="ListsDefault" theme={theme} />
          <Link to="/*"> Lists</Link>
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
          <Link to="/*">More</Link>
        </button>
      </div>
    </>
  );
}