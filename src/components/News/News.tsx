import "./style.css";
import imgNewCovid from "../../assets/img/imgNewCovid.svg";
import imgNewTrump from "../../assets/img/imgNewTrump.svg";
import imgNewSport from "../../assets/img/imgNewSport.svg";

export function News() {
  return (
    <div className="news-container news-container-light news-container-dark">
      <h2 className="news-title news-title-light news-title-dark news">
        What's happening
      </h2>

      <div className="new-container">
        <div className="new-text">
          <div className="grid">
            <div className="grid">
              <h3 className="news-font news-color-light news-color-dark">COVID19 - Last night</h3>
              <p className="news-text news-text-light news-text-dark">
                England’s Chief Medical Officer says the UK is at the most
                dangerous time of the pandemic
              </p>
              <div className="flex">
                <p className="news-font news-color-light news-color-dark">Trending with</p>
                <p className="new-hastag">#covid19</p>
              </div>
            </div>
          </div>
        </div>
        <div className="news-img-container">
          <img className="new-img" src={imgNewCovid}></img>
        </div>
      </div>

      <div className="new-container">
        <div className="new-text">
          <div className="grid">
            <h3 className="news-font news-color-light news-color-dark">US news - 4h ago</h3>
            <p className="news-text news-text-light news-text-dark">
              Parler may go offline following suspensions by Amazon, Apple and
              Google
            </p>
            <div className="flex">
              <p className="news-font news-color-light news-color-dark">Trending with</p>
              <p className="new-hastag">#trump</p>
            </div>
          </div>
        </div>
        <div className="news-img-container">
          <img className="new-img" src={imgNewTrump}></img>
        </div>
      </div>

      <div className="new-container">
        <div className="new-text">
          <div className="grid">
            <h3 className="news-font news-color-light news-color-dark">India - 1h ago</h3>
            <p className="news-text news-text-light news-text-dark">
              India vs Australia: India hold on to earn a draw on Day 5 in
              Sydney Test
            </p>
            <div className="flex">
              <p className="news-font news-color-light news-color-dark">Trending with</p>
              <p className="new-hastag">#sport</p>
            </div>
          </div>
        </div>
        <div className="news-img-container">
          <img className="new-img" src={imgNewSport}></img>
        </div>
      </div>

      <a className="news-show-more">Show more</a>
    </div>
  );
}
