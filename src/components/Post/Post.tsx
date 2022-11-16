import "./style.css";
import { useContext, useState } from "react";
import { ButtonPrimaryMedium } from "../buttons/ButtonPrimaryMedium/ButtonPrimaryMedium";
import { DynamicIcon } from "../Icons/Icons";
import AvatarSmall from "../../assets/img/AvatarSmall.svg";
import { ThemeContext } from "../../common/context/Theme";

export function Post() {
  const { theme } = useContext(ThemeContext);
  const classPost = `Post post-${theme}`;
  const classTextAreaPost = `TextAreaPost TextAreaPost-${theme}`;

  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className={classPost}>
      <div className="divPostProfile">
        <img className="imgAvatarFeed" src={AvatarSmall}></img>
        <textarea
          className={classTextAreaPost}
          name="texto"
          maxLength={380}
          placeholder="What's happening?"
        />   
      </div>
      <img src={file} />
      <div className="buttonsPost">
        <div className="buttons-icons">
          <label className="media" htmlFor="media-input" tabIndex={0}>
          <span className="media-image">
                <DynamicIcon icon="MediaDefault" theme="common" />
            </span>
            <input type="file" accept="image/*" id="media-input" onChange={handleChange} />
          </label>
          <button>
            <DynamicIcon icon="GIFDefault" theme="common" />
          </button>
          <button>
            <DynamicIcon icon="PollDefault" theme="common" />
          </button>
          <button>
            <DynamicIcon icon="EmojiDefault" theme="common" />
          </button>
          <button>
            <DynamicIcon icon="ScheduleDefault" theme="common" />
          </button>
        </div>
        <ButtonPrimaryMedium text="Tweet"></ButtonPrimaryMedium>
      </div>
    </div>
  );
}
