import "./style.css";
import { DynamicIcon } from "../Icons/Icons";

export function SearchBar() {
  return (
    <div className="search-bar search-bar-light search-bar-dark">
      <DynamicIcon icon="SearchDefault" theme="common" />
      <input className="search-input search-input-light search-input-dark" type="text" placeholder="Search Twitter" />
    </div>
  );
  
}
