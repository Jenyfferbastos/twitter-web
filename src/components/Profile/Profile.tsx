import './style.css'
import AvatarSmall from "../../assets/img/AvatarSmall.svg"
import { DynamicIcon } from "../Icons/Icons"

export interface ProfileProps {
  textName: string;
  textUser: string;

}
export function Profile({ textName, textUser }: ProfileProps) {
  return (
    <div className='profile'>
      <img className='profile-img' src={ AvatarSmall } />
      <div className='profile-information-user'>
      <p className='profile-weight profile-name-light profile-name-dark'>{textName}</p>
      <p className='profile-user-light profile-user-dark'>{textUser}</p>
      </div>
      <DynamicIcon icon="EllipsesDefault" theme="light" />
      </div>
  );
}
