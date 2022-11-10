import { useContext } from "react";
import "./style.css";
import AvatarMedium from "../../assets/img/AvatarMedium.svg";
import { DynamicIcon } from "../Icons/Icons";
import { ThemeContext } from "../../common/context/Theme";

export function ProfileMain() {
  const {
    theme, 
   } = useContext(ThemeContext)
  return (
    <div>
      <img src={AvatarMedium} />
      <h2>Davide Biscuso</h2>
      <h3>@biscuttu</h3>
      <h4>Product Designer</h4>
      <DynamicIcon icon="LocationDefault" theme={theme} />
      <h5>London</h5>
      <DynamicIcon icon="CalendarDefault" theme={theme} />
      <h6>Joined September 2011</h6>
      <button>Edit profile</button>
    </div>
  );
}

