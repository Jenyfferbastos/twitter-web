import "./style.css";
import { DynamicIcon } from "../Icons/Icons";

export function SearchBar() {
  return (
    <div className="divSearchBar">
      <DynamicIcon icon="SearchDefault" theme="common" />
      <input className="inputSearch" type="text" placeholder="Search Twitter" />
    </div>
  );
}
