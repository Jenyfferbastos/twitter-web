import { useContext } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

import AvatarSmall from "../../assets/img/AvatarSmall.svg";
import { DynamicIcon } from "../Icons/Icons";
import { ThemeContext } from "../../common/context/Theme";

export interface ProfileProps {
  textName: string;
  textUser: string;
}
export function Profile({ textName, textUser }: ProfileProps) {
  const { theme } = useContext(ThemeContext);
  const history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user-data");
    history('login')
  };

  const classProfileWeight = `profile-weight profile-name-${theme}`;
  const classProfileUser = `profile-user-${theme}`;

  return (
    <div className="profile">
      <img className="profile-img" src={AvatarSmall} />
      <div className="profile-information-user">
        <p className={classProfileWeight}>{textName}</p>
        <p className={classProfileUser}>{textUser}</p>
      </div>
      <button onClick={handleLogout}>
        {" "}
        <DynamicIcon icon="EllipsesDefault" theme={theme} />
      </button>
    </div>
  );
}