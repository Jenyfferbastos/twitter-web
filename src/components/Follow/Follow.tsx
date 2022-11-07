import "./style.css"
import AvatarMediumFollow from "../../assets/img/AvatarMediumFollow.svg"
import AvatarMediumFollowB from "../../assets/img/AvatarMediumFollowB.svg"

export function Follow(){
  return(
    <div className="divFollowMain">
      <h3 className="titleFollow">Who to follow</h3>


      <div className="profileFollow">
        <img className="imgProfileFollow" src={AvatarMediumFollow}></img>
        <div>
        <h4 className="nameProfile">Bessie Cooper</h4>
        <h5 className="userProfile">@bessiecooper</h5>
        </div>
        <button className="buttonFollow">Follow</button>
      </div>


      <div className="profileFollow">
        <img className="imgProfileFollow" src={AvatarMediumFollowB}></img>
        <div>
        <h4 className="nameProfile">Jeny Wilson</h4>
        <h5 className="userProfile">@jenywilson</h5>
        </div>
        <button className="buttonFollow">Follow</button>
      </div>
        <a className="showMoreFollow">Show more</a>
    </div>
  )
}