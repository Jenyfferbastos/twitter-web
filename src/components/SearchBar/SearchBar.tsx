import { useContext } from "react";
import "./style.css";
import { DynamicIcon } from "../Icons/Icons";
import { ThemeContext } from "../../common/context/Theme";

export function SearchBar() {
  const {
    theme, 
   } = useContext(ThemeContext)
   
  const classSearchBar = `search-bar search-bar-${theme}`;
  const classSearchInput = `search-input search-input-${theme}`;

  return (
    <div className={classSearchBar}>
      <DynamicIcon icon="SearchDefault" theme="common" />
      <input
        className={classSearchInput}
        type="text"
        placeholder="Search Twitter"
      />
    </div>
  );
}