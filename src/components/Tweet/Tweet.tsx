import "./style.css";
import AvatarMedium from "../../assets/img/AvatarSmall.svg";
import ImageFeed from "../../assets/img/ImageFeed.svg";
import { DynamicIcon } from "../Icons/Icons";

export function Tweet() {
  return (
    <div className="tweet">
      <div className="tweet-profile">
        <img className="tweet-img-avatar" src={AvatarMedium}></img>
        <div>
          <div className="tweet-information-user">
            <h2 className="tweet-name-light tweet-name-dark">Davide Biscuso</h2>
            <h2 className="tweet-user-light tweet-user-dark">@biscuttu</h2>
            <p className="tweet-temp-post-light tweet-temp-post-dark">23s</p>
          </div>
          <p className="tweet-text-post-light tweet-text-post-dark">
            Tom is in a big hurry.
          </p>
        </div>
      </div>
      <img className="tweet-img-post" src={ImageFeed} />

      <div className="tweet-buttons">

        <button className="tweet-button tweet-button-light tweet-button-dark">
          <DynamicIcon icon="CommentDefault" theme="light" />
          61
        </button>

        <button className="tweet-button tweet-button-light tweet-button-dark">
          <DynamicIcon icon="RetweetDefault" theme="light" />
          12
        </button>

        <button className="tweet-button tweet-button-light tweet-button-dark">
          <DynamicIcon icon="LikeDefault" theme="light" />
          6.2K
        </button>

        <button className="tweet-button tweet-button-light tweet-button-dark">
          <DynamicIcon icon="ShareDefault" theme="light" />
          61
        </button>

      </div>

      <p className="tweet-share-link">Show this thread</p>

    </div>
  );
}
