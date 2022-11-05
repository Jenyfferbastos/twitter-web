import './style.css'
import imgNewCovid from '../../assets/img/imgNewCovid.svg'
import imgNewTrump from '../../assets/img/imgNewTrump.svg'
import imgNewSport from '../../assets/img/imgNewSport.svg'

export function News() {
  return (
    <div className='divNews'>
      <h2 className='titleNews news'>What's happening</h2>
      <div className='news'>
        <div className='new'>
        <h3 className='informNews'>COVID19 - Last night</h3>
        <p className='textNews'>England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic</p>
        <p className='informNews'>Trending with</p>
        <p className='hastagNews'>#covid19</p>
        <img src={imgNewCovid}></img>
        </div>
      </div>
      <div className='news'> 
        <h3 className='informNews'>US news - 4h ago</h3>
        <p className='textNews'>Parler may go offline following suspensions by Amazon, Apple and Google</p>
        <p className='informNews'>Trending with</p>
        <p className='hastagNews'>#trump</p>
        <img src={imgNewTrump}></img>
        </div>
      <div className='news'> 
        <h3 className='informNews'>India - 1h ago</h3>
        <p className='textNews'>India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test</p>
        <p className='informNews'>Trending with</p>
        <p className='hastagNews'>#sport</p>
        <img src={imgNewSport}></img>
        </div>
        <a>Show more</a>
    </div>
  )
}