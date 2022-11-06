import "./styles/general.css";
import { SideMenu } from "./components/SideMenu/SideMenu";
import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Tweet } from "./components/Tweet/Tweet";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { News } from "./components/News/News";

export function App() {
  return (
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
      </div>
    </div>
  );
}
