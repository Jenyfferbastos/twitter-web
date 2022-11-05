import './style.css'
import AvatarMedium from '../../assets/img/AvatarMedium.svg'
import ImageFeed from '../../assets/img/ImageFeed.svg'



export function Tweet() {
  return (
    <>
      <div className='divProfileFeedPost'>
        <img>{AvatarMedium}</img>;
        <div>
          <div>
            <h2 className='textName'>teste</h2>;
            <h2 className='textUser'>teste</h2>;
            <p className='tempoPost'>teste</p>;
          </div>
          <p className='textPost'>teste</p>;
        </div>
      </div>
      <img className='imgPost' src={ImageFeed} />
      <div>
        <button><img src='../../assets/img/IconComment.svg' /></button>
        <button><img src='../../assets/img/IconRetweet.svg' /></button>
        <button><img src='../../assets/img/IconLike.svg'/></button>
        <button><img src='../../assets/img/IconShare.svg' /></button>
      </div>
      <p className='shareLink'>teste</p>
    </>
  )
}