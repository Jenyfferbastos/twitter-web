import "./style.css";
import imgNewCovid from "../../assets/img/imgNewCovid.svg";
import imgNewTrump from "../../assets/img/imgNewTrump.svg";
import imgNewSport from "../../assets/img/imgNewSport.svg";

export function News() {
  return (
    <div className="divNewsMain">
          <h2 className="titleNews news">What's happening</h2>
      <div className="containerNews">
        <div className="divTextNews">
          <div className="news">
            <div className="new">
              <h3 className="informNews">COVID19 - Last night</h3>
              <p className="textNews">
                England’s Chief Medical Officer says the UK is at the most
                dangerous time of the pandemic
              </p>
              <div className="divTopic">
              <p className="informNews">Trending with</p>
              <p className="hastagNews">#covid19</p>
              </div>
            </div>
          </div>
        </div>
        <div className="divImgNews">
          <img className="imgNews" src={imgNewCovid}></img>
        </div>
      </div>

      <div className="containerNews">
        <div className="divTextNews">
          <div className="news">
            <h3 className="informNews">US news - 4h ago</h3>
            <p className="textNews">
              Parler may go offline following suspensions by Amazon, Apple and
              Google
            </p>
            <div className="divTopic">
            <p className="informNews">Trending with</p>
            <p className="hastagNews">#trump</p>
            </div>
          </div>
        </div>
        <div className="divImgNews">
          <img className="imgNews" src={imgNewTrump}></img>
        </div>
      </div>

      <div className="containerNews">
        <div className="divTextNews">
          <div className="news">
            <h3 className="informNews">India - 1h ago</h3>
            <p className="textNews">
              India vs Australia: India hold on to earn a draw on Day 5 in
              Sydney Test
            </p>
            <div className="divTopic">
            <p className="informNews">Trending with</p>
            <p className="hastagNews">#sport</p>
            </div>
          </div>
        </div>
        <div className="divImgNews">
          <img className="imgNews" src={imgNewSport}></img>
        </div>
      </div>

      <a className="showMoreNews">Show more</a>
    </div>
  );
}
