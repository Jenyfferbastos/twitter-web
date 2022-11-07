import "./style.css";
import { DynamicIcon } from "../Icons/Icons"


export interface HeaderProps {
  title: string;
}
export function Header({ title }: HeaderProps) {
  return (
    <>
    <div className="divHeader">
      <h1 className="titleHome">{ title }</h1>
      <button>
      <DynamicIcon icon="TopTweetDefault" theme="common" />
      </button>
    </div>
    </>
  );
}
