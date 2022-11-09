import "./styles/general.css";
import { useState, useContext } from "react";

import { SideMenu } from "./components/SideMenu/SideMenu";
import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Tweet } from "./components/Tweet/Tweet";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { News } from "./components/News/News";
import { Follow } from "./components/Follow/Follow";
import { TermsServicePrivacyPolicy } from "./components/TermsServicePrivacyPolicy/TermsServicePrivacyPolicy";
import { Footer } from "./components/Footer/Footer";
import { DynamicIcon } from "./components/Icons/Icons";
import { ThemeContext } from './common/context/Theme'

export function App() {
 const {
  theme, setTheme
 } = useContext(ThemeContext)
  return (
    <div className="body">
      <div className="App app-light app-dark">
        <SideMenu theme={theme} />
        <div className="Feed feed-light feed-dark">
          <Header title="Home" />
          <Post />
          <div className="TweetMain">
            <Tweet theme={theme} />
            <Tweet theme={theme} />
            <Tweet theme={theme} />
          </div>
        </div>
        <div>
          <SearchBar theme={theme} />
          <News theme={theme} />
          <Follow theme={theme} />
          <TermsServicePrivacyPolicy />
        </div>
      </div>
      <div className="footerTwitter">
        <Footer />
      </div>
    </div>
  );
}