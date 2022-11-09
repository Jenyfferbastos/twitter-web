import "./style.css";
import AvatarMedium from "../../assets/img/AvatarSmall.svg";
import ImageFeed from "../../assets/img/ImageFeed.svg";
import { DynamicIcon } from "../Icons/Icons";

export interface ITweetProps {
  theme: string;
}

export function Tweet({ theme }: ITweetProps) {
  const classTweetName = `tweet-name-${theme}`;
  const classTweetUser = `tweet-user-${theme}`;
  const classTempPost = `tweet-temp-post-${theme}`;
  const classTweetTextPost = `tweet-text-post-${theme}`;
  const classTweetButton = `tweet-button tweet-button-${theme}`;

  return (
    <div className="tweet tweet-light tweet-dark">
      <div className="tweet-profile">
        <img className="tweet-img-avatar" src={AvatarMedium}></img>
        <div>
          <div className="tweet-information-user">
            <h2 className={classTweetName}>Davide Biscuso</h2>
            <h2 className={classTweetUser}>@biscuttu</h2>
            <p className={classTempPost}>23s</p>
          </div>
          <p className={classTweetTextPost}>Tom is in a big hurry.</p>
        </div>
      </div>
      <img className="tweet-img-post" src={ImageFeed} />

      <div className="tweet-buttons">
        <button className={classTweetButton}>
          <DynamicIcon icon="CommentDefault" theme={theme} />
          61
        </button>

        <button className={classTweetButton}>
          <DynamicIcon icon="RetweetDefault" theme={theme} />
          12
        </button>

        <button className={classTweetButton}>
          <DynamicIcon icon="LikeDefault" theme={theme} />
          6.2K
        </button>

        <button className={classTweetButton}>
          <DynamicIcon icon="ShareDefault" theme={theme} />
          61
        </button>
      </div>

      <p className="tweet-share-link">Show this thread</p>
    </div>
  );
}