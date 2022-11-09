import "./style.css";
import { DynamicIcon } from "../Icons/Icons";

export interface ISearchBarProps {
  theme: string;
}

export function SearchBar({ theme }: ISearchBarProps) {
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