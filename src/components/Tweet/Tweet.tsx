import './style.css'
import AvatarMedium from '../../assets/img/AvatarMedium.svg'
import ImageFeed from '../../assets/img/ImageFeed.svg'

export interface TweetProps {
  text: string;
  nome: string;
  user: string;
  tempoPostagem: string;
  textPost: string;
}

export function Tweet({ text, nome, user, tempoPostagem, textPost }: TweetProps) {
  return (
    <>
      <div className='divProfileFeedPost'>
        <img>{AvatarMedium}</img>;
        <div>
          <div>
            <h2 className=''>{ nome }</h2>;
            <h2 className=''>{ user }</h2>;
            <p className=''>{ tempoPostagem }</p>;
          </div>
          <p className=''>{ textPost }</p>;
        </div>
      </div>
      <img className='' src={ImageFeed} />
      <div>
        <button><img src='' />{text}</button>
        <button><img src='' />{text}</button>
        <button><img src='' />{text}</button>
        <button><img src='' />{text}</button>
      </div>
      <p className=''></p>
    </>
  )
}