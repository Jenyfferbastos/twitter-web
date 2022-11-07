import "./style.css";
import { DynamicIcon } from "../Icons/Icons"


export interface HeaderProps {
  title: string;
}
export function Header({ title }: HeaderProps) {
  return (
    <>
    <div className="header header-light header-dark">
      <h1 className="header-title">{ title }</h1>
      <button>
      <DynamicIcon icon="TopTweetDefault" theme="common" />
      </button>
    </div>
    </>
  );
}
