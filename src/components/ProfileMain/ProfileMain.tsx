import { useContext } from "react";
import "./style.css";
import AvatarSmall from "../../assets/img/AvatarSmall.svg";
import BackProfile from "../../assets/img/backProfile.svg";
import { DynamicIcon } from "../Icons/Icons";
import { ThemeContext } from "../../common/context/Theme";
import { SideMenu } from "../SideMenu/SideMenu";
import { Follow } from "../Follow/Follow";
import { News } from "../News/News";
import { HeaderProfile } from "../HeaderProfile/HeaderProfile";
import { TabBar } from "../TabBar/TabBar";
import { Tweet } from "../Tweet/Tweet";
import { SearchBar } from "../SearchBar/SearchBar";
import { TermsServicePrivacyPolicy } from "../TermsServicePrivacyPolicy/TermsServicePrivacyPolicy";

export function ProfileMain() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container-profile-main">
      <div className="container-side-menu">
        <SideMenu />
      </div>
      <div>
        <HeaderProfile />
        <img className="back-profile-main" src={BackProfile} />
        <img className="avatar-profile" src={AvatarSmall} />
        <div className="container-informations">
          <div>
            <div className="user">
              <h2 className="name-profile">Davide Biscuso</h2>
              <h3 className="user-profile">@biscuttu</h3>
              <h4>Product Designer</h4>
              <div className="container-informations">
                <div className="informations">
                  <DynamicIcon icon="LocationDefault" theme="common" />
                  <h5>London</h5>
                </div>
                <div className="informations">
                  <DynamicIcon icon="CalendarDefault" theme={theme} />
                  <h6>Joined September 2011</h6>
                </div>
              </div>
              <div className="container-follower">
                <div className="following">
                  <p className="number-following">569</p><p className="text-following">Following</p>
                  </div>
                  <div className="followers">
                  <p className="number-followers">72</p><p className="text-followers">Followers</p>
                </div>
              </div>
            </div>
          </div>
          <button className="button-edit-profile">EditProfile</button>
        </div>
      <TabBar />
      <div className="TweetMain">
      <Tweet />
      <Tweet />
      </div>
      </div>
      <div className="container-search">
        < SearchBar />
        <Follow />
        <News />
        < TermsServicePrivacyPolicy />
      </div>
    </div>
  );
}
