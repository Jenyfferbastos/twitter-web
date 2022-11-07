import './style.css'
import AvatarSmall from "../../assets/img/AvatarSmall.svg"
import { DynamicIcon } from "../Icons/Icons"

export interface ProfileProps {
  textName: string;
  textUser: string;

}
export function Profile({ textName, textUser }: ProfileProps) {
  return (
    <div className='divProfile'>
      <img className='imgProfile' src={ AvatarSmall } />
      <div className='userProfile'>
      <p className='textName'>{textName}</p>
      <p className='textUser'>{textUser}</p>
      </div>
      <DynamicIcon icon="EllipsesDefault" theme="light" />
      </div>
  );
}
