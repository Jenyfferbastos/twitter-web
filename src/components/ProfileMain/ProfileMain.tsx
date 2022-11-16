import { useContext } from "react";
import "./style.css";
import AvatarSmall from "../../assets/img/AvatarSmall.svg";
import BackProfile from "../../assets/img/backProfile.svg";
import { DynamicIcon } from "../Icons/Icons";
import { ThemeContext } from "../../common/context/Theme";
import { SideMenu } from "../SideMenu/SideMenu";
import { Follow } from "../Follow/Follow";
import { News } from "../News/News";

export function ProfileMain() {
  const {
    theme, 
   } = useContext(ThemeContext)
  return (
    <div className="container-profile-main">
      <div>
      <SideMenu />
      </div>
      <div>
      <img src={BackProfile} />
      <img src={AvatarSmall} />
      <h2>Davide Biscuso</h2>
      <h3>@biscuttu</h3>
      <h4>Product Designer</h4>
      <DynamicIcon icon="LocationDefault" theme={theme} />
      <h5>London</h5>
      <DynamicIcon icon="CalendarDefault" theme={theme} />
      <h6>Joined September 2011</h6>
      <button>Edit profile</button>
      </div>
      <div>
      <Follow />
      <News/>
      </div>
    </div>
  );
}

