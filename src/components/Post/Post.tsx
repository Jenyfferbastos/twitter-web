import "./style.css";
import { useContext } from "react";
import { ButtonPrimaryMedium } from "../buttons/ButtonPrimaryMedium/ButtonPrimaryMedium";
import { DynamicIcon } from "../Icons/Icons"
import AvatarSmall from "../../assets/img/AvatarSmall.svg"
import { ThemeContext } from "../../common/context/Theme";


export function Post() {
  const {
    theme, 
   } = useContext(ThemeContext)

   const classPost = `Post post-${theme}`;
   const classTextAreaPost = `TextAreaPost TextAreaPost-${theme}`;
  
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
      <div className="buttonsPost">
        <div>
          <button>
            <DynamicIcon icon="MediaDefault" theme="common" />
          </button>
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
