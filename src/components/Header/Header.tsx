import "./style.css";
import IconButtonHeader from "../../assets/img/IconButtonHeader.svg";


export interface HeaderProps {
  title: string;
}
export function Header({ title }: HeaderProps) {
  return (
    <div className="divHeader">
      <p>{ title }</p>
      <button>
        <img src={IconButtonHeader}></img>
      </button>
    </div>
  );
}
