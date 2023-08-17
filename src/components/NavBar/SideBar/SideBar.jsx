import React, { useState } from "react";

import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

// INTERNAL IMPORT
import "./SideBar.css";
import images from "../../../imgs";
import Button from "../../Button/Button";

const SideBar = ({setOpenSideMenu}) => {
  // Usestate
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  // DISCOVER
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account-setting",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "Blog",
    },
  ];

  // help centre
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  const openDiscoverMenu = () => {
    if(!openDiscover)
    {
      setOpenDiscover(true);
    }
    else{
      setOpenDiscover(false);
    }
  };

  const closeSideBar = () => {
    setOpenSideMenu(false);
  }

  const openHelpMenu = () => {
    if(!openHelp){
      setOpenHelp(true);
    }
    else{
      setOpenHelp(false);
    }
  };

  return (
    <div className="sideBar">
      <GrClose
        className="sideBar_closeBtn"
        onClick={() => closeSideBar()}
      />

      <div className="sideBar_box">
        <img src={images.logo} alt="logo" width={150} height={150} />
        <p>
          Discover the most outstanding articles on all topics of NFT & your own
          stories and share them
        </p>

        <div className="sideBar_social">
          <a href="#">
            <TiSocialFacebook />
          </a>

          <a href="#">
            <TiSocialLinkedin />
          </a>

          <a href="#">
            <TiSocialTwitter />
          </a>

          <a href="#">
            <TiSocialYoutube />
          </a>

          <a href="#">
            <TiSocialInstagram />
          </a>
        </div>
      </div>

      <div className="sideBar_menu">
        <div>
          <div
            className="sideBar_menu_box"
            onClick={() => openDiscoverMenu()}
          >
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>

          {openDiscover && (
            <div className="sideBar_discover">
              {discover.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>

        <div>
          <div className="sideBar_menu_box"
          onClick={() => openHelpMenu()}
          >
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>

          {openHelp && (
            <div className="sideBar_discover">
              {helpCenter.map((el, i) => (
                <p key={i+1}>
                  <Link href={{pathname: `${el.link}`}}>{el.name}</Link>
                </p>
              ))}
            </div>  
          )}
        </div>
      </div>

      <div className="sideBar_button">
        <Button btnName= "Create" />
        <Button btnName= "Connect Wallet" />
      </div>
    </div>
  );
};

export default SideBar;
