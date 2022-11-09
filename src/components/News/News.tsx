import "./style.css";
import imgNewCovid from "../../assets/img/imgNewCovid.svg";
import imgNewTrump from "../../assets/img/imgNewTrump.svg";
import imgNewSport from "../../assets/img/imgNewSport.svg";

export interface NewsProps {
  theme: string;
}

export function News({ theme }: NewsProps) {
  const classTheme = `news-container news-container-${theme}`;
  const classTitle = `news-title news-title-${theme} news`;
  const classNewsFont = `news-font news-color-${theme}`;
  const classText = `news-text news-text-${theme}`;

  return (
    <div className={classTheme}>
      <h2 className={classTitle}>What's happening</h2>

      <div className="new-container new-container-light new-container-dark">
        <div className="new-text">
          <div className="grid">
            <div className="grid">
              <h3 className={classNewsFont}>COVID19 - Last night</h3>
              <p className={classText}>
                England’s Chief Medical Officer says the UK is at the most
                dangerous time of the pandemic
              </p>
              <div className="flex">
                <p className={classNewsFont}>Trending with</p>
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
            <h3 className={classNewsFont}>US news - 4h ago</h3>
            <p className={classText}>
              Parler may go offline following suspensions by Amazon, Apple and
              Google
            </p>
            <div className="flex">
              <p className={classNewsFont}>Trending with</p>
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
            <h3 className={classNewsFont}>India - 1h ago</h3>
            <p className={classText}>
              India vs Australia: India hold on to earn a draw on Day 5 in
              Sydney Test
            </p>
            <div className="flex">
              <p className={classNewsFont}>Trending with</p>
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