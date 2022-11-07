import "./styles/general.css";
import { SideMenu } from "./components/SideMenu/SideMenu";
import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Tweet } from "./components/Tweet/Tweet";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { News } from "./components/News/News";
import { Follow } from "./components/Follow/Follow";
import { TermsServicePrivacyPolicy } from "./components/TermsServicePrivacyPolicy/TermsServicePrivacyPolicy";
import { Footer } from "./components/Footer/Footer";

export function App() {
  return (
    <div className="body">
      <div className="divApp">
        <SideMenu />
        <div className="divFeed">
          <Header title="Home" />
          <Post />
          <div className="divTweetMain">
            <Tweet />
            <Tweet />
            <Tweet />
          </div>
        </div>
        <div>
          <SearchBar />
          <News />
          <Follow />
          <TermsServicePrivacyPolicy />
        </div>
      </div>
      <div className="footerTwitter">
        <Footer />
      </div>
    </div>
  );
}
