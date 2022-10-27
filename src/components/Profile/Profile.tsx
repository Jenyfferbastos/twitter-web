import './style.css'
import IconProfileAvatar from '../../assets/img/IconProfileAvatar.svg'
import AvatarSmall from '../../assets/img/AvatarSmall.svg'

const icons = {
  ['iconProfile']: IconProfileAvatar,
  ['avatar']: AvatarSmall,
}

export interface ProfileProps {
  avatar:string;
  icon: string;
  textName: string;
  textUser: string;

}
export function Profile({ avatar, icon, textName, textUser }: ProfileProps) {
  return (
    <div className='divProfile'>
      <img src={icons[avatar]} />
      <div className='userProfile'>
      <p>{textName}</p>
      <p>{textUser}</p>
      </div>
      <img src={icons[icon]}/>
      </div>
  );
}
