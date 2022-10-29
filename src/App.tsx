import "./styles/general.css";
import { SideMenu } from "./components/SideMenu/SideMenu";
import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Tweet } from "./components/Tweet/Tweet"

export function App() {
  return (
    <div className="divApp">
      <SideMenu />
      <div className="divFeed">
        <Header title="Home" />
        <Post />
        {/* <Tweet text="0" nome="teste" user="biscuttu" tempoPostagem="0" textPost="Hold on I need at least a few minutes!" /> */}
      </div>
    </div>
  );
}
