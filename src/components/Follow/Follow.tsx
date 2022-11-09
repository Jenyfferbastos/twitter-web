import "./style.css";
import AvatarMediumFollow from "../../assets/img/AvatarMediumFollow.svg";
import AvatarMediumFollowB from "../../assets/img/AvatarMediumFollowB.svg";

export interface IFollowProps {
  theme: string;
}

export function Follow({ theme }: IFollowProps) {
  const classFollow = `follow follow-${theme}`;
  const classFollowTitle = `follow-title follow-title-${theme}`;
  const classFollowName = `follow-name follow-name-${theme}`;
  const classFollowUser = `follow-user follow-user-${theme}`;

  return (
    <div className={classFollow}>
      <h3 className={classFollowTitle}>Who to follow</h3>

      <div className="follow-profile">
        <img className="follow-img-profile" src={AvatarMediumFollow}></img>
        <div>
          <h4 className={classFollowName}>Bessie Cooper</h4>
          <h5 className={classFollowUser}>
            @bessiecooper
          </h5>
        </div>
        <button className="buttonFollow">Follow</button>
      </div>

      <div className="follow-profile">
        <img className="follow-img-profile" src={AvatarMediumFollowB}></img>
        <div>
          <h4 className={classFollowName}>Jeny Wilson</h4>
          <h5 className={classFollowUser}>
            @jenywilson
          </h5>
        </div>
        <button className="buttonFollow">Follow</button>
      </div>
      <a className="showMoreFollow">Show more</a>
    </div>
  );
}