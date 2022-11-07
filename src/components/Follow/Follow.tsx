import "./style.css"
import AvatarMediumFollow from "../../assets/img/AvatarMediumFollow.svg"
import AvatarMediumFollowB from "../../assets/img/AvatarMediumFollowB.svg"

export function Follow(){
  return(
    <div className="follow follow-light follow-dark">
      <h3 className="follow-title follow-title-light follow-title-dark">Who to follow</h3>


      <div className="follow-profile">
        <img className="follow-img-profile" src={AvatarMediumFollow}></img>
        <div>
        <h4 className="follow-name-light follow-name-dark">Bessie Cooper</h4>
        <h5 className="follow-user follow-user-light follow-user-dark">@bessiecooper</h5>
        </div>
        <button className="buttonFollow">Follow</button>
      </div>


      <div className="follow-profile">
        <img className="follow-img-profile" src={AvatarMediumFollowB}></img>
        <div>
        <h4 className="follow-name follow-name-light follow-name-dark">Jeny Wilson</h4>
        <h5 className="follow-user follow-user-light follow-user-dark">@jenywilson</h5>
        </div>
        <button className="buttonFollow">Follow</button>
      </div>
        <a className="showMoreFollow">Show more</a>
    </div>
  )
}