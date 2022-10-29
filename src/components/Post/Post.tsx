import "./style.css";
import AvatarSmall from "../../assets/img/AvatarSmall.svg";
import { ButtonPrimaryMedium } from "../buttons/ButtonPrimaryMedium/ButtonPrimaryMedium";
import IconImage from "../../assets/img/IconImage.svg";
import IconGif from "../../assets/img/IconGif.svg";
import IconEnquete from "../../assets/img/IconEnquete.svg";
import IconEmoji from "../../assets/img/IconEmoji.svg";
import iconProgramar from "../../assets/img/IconProgramar.svg";

export function Post() {
  return (
    <div className="divPost">
      <div className="divPostProfile">
        <img className="imgAvatarFeed" src={AvatarSmall}></img>
        <textarea
          className="divTextAreaPost"
          name="texto"
          maxLength={380}
          placeholder="What's happening?"
        />
      </div>
      <div className="buttonsPost">
        <div>
          <button>
            <img src={IconImage}></img>
          </button>
          <button>
            <img src={IconGif}></img>
          </button>
          <button>
            <img src={IconEnquete}></img>
          </button>
          <button>
            <img src={IconEmoji}></img>
          </button>
          <button>
            <img src={iconProgramar}></img>
          </button>
        </div>
        <ButtonPrimaryMedium text="Tweet"></ButtonPrimaryMedium>
      </div>
    </div>
  );
}
