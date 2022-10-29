import "./style.css";
import IconButtonHeader from "../../assets/img/IconButtonHeader.svg";


export interface HeaderProps {
  title: string;
}
export function Header({ title }: HeaderProps) {
  return (
    <>
    <div className="divHeader">
      <h1 className="titleHome">{ title }</h1>
      <button>
        <img src={IconButtonHeader}></img>
      </button>
    </div>
    </>
  );
}
