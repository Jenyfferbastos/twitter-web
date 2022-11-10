import './style.css';
import '../../styles/general.css'
import { useState, useContext } from "react";

import { SideMenu } from "../../components/SideMenu/SideMenu";
import { Header } from "../../components/Header/Header";
import { Post } from "../../components/Post/Post";
import { Tweet } from "../../components/Tweet/Tweet";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { News } from "../../components/News/News";
import { Follow } from "../../components/Follow/Follow";
import { TermsServicePrivacyPolicy } from "../../components/TermsServicePrivacyPolicy/TermsServicePrivacyPolicy";
import { Footer } from "../../components/Footer/Footer";
import { DynamicIcon } from "../../components/Icons/Icons";
import { ThemeContext } from '../../common/context/Theme'


export function Home() {
 const {
  theme, 
 } = useContext(ThemeContext)
 const classHome = `App app-${theme}`;
 const clasFeed = `Feed feed-${theme}`;

  return (
    <div className="body">
      <div className={classHome}>
        <SideMenu />
        <div className={clasFeed}>
          <Header title="Home" />
          <Post />
          <div className="TweetMain">
            <Tweet  />
            <Tweet  />
            <Tweet  />
          </div>
        </div>
        <div>
          <SearchBar />
          <News />
          <Follow />
          <TermsServicePrivacyPolicy />
        </div>
      </div>
      <div className="footerTwitter">
        <Footer />
      </div>
    </div>
  );
}