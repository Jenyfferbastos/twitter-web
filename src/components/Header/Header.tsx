import { useState, useContext } from "react";
import "./style.css";
import { DynamicIcon } from "../Icons/Icons";
import { ThemeContext } from '../../common/context/Theme';



export interface HeaderProps {
  title: string;
}
export function Header({ title }: HeaderProps) {
  
  const {
    theme, setTheme
  } = useContext(ThemeContext)
  const classHeader = `header header-${theme}`;

  function handleTheme(e) {
    e.preventDefault;

    theme === "light" && setTheme("dark");
    theme === "dark" && setTheme("light");
  }

  return (
    <>
      <div className={classHeader}>
        <h1 className="header-title">{title}</h1>
        <button className="buttonMode" onClick={handleTheme}>
            <DynamicIcon icon="TopTweetDefault" theme="common" />
          </button>
      </div>
    </>
  );
}