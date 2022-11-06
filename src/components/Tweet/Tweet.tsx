import "./style.css";
import AvatarMedium from "../../assets/img/AvatarSmall.svg";
import ImageFeed from "../../assets/img/ImageFeed.svg";
import { DynamicIcon } from "../Icons/Icons"

export function Tweet() {
  return (
    <div className="divTweet">
      <div className="divProfileFeedPost">
        <img className="imgAvatarMedium" src={AvatarMedium}></img>
        <div>
          <div className="divUser">
            <h2 className="textName">Davide Biscuso</h2>
            <h2 className="textUser">@biscuttu</h2>
            <p className="tempoPost">23s</p>
          </div>
          <p className="textPost">Tom is in a big hurry.</p>
        </div>
      </div>
      <img className="imgPost" src={ImageFeed} />
      <div className="divButtons">
        <button className="buttonTweet">
        <DynamicIcon icon="CommentDefault" theme="light" />
          61
        </button>
        <button className="buttonTweet">
        <DynamicIcon icon="RetweetDefault" theme="light" />
          12
        </button>
        <button className="buttonTweet">
        <DynamicIcon icon="LikeDefault" theme="light" />
          6.2K
        </button>
        <button className="buttonTweet">
        <DynamicIcon icon="ShareDefault" theme="light" />
          61
        </button>
      </div>
      <p className="shareLink">Show this thread</p>
    </div>
  );
}
