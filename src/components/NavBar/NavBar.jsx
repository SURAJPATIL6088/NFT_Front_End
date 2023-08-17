import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client'
import { Link } from "react-router-dom";

// IMPORT ICONS
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

// INTERNAL IMPORT
import "./NavBar.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import { Button } from "../componentindex";
import images from "../../imgs";

const NavBar = () => {
  // USESTATE COMPONENTS
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;

    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Help Center") {
      setHelp(true);
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    } else {
      setProfile(false);
      setHelp(false);
      setDiscover(false);
      setNotification(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setProfile(false);
      setHelp(false);
      setDiscover(false);
      setNotification(true);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if(!profile){
      setProfile(true);
      setHelp(false);
      setDiscover(false);
      setNotification(false);
    }
    else{
      setProfile(false);
    }
  }

  const openSideBar = () => {
    if(!openSideMenu){
      setOpenSideMenu(true);
    }
    else{
      setOpenSideMenu(false);
    }
  }

  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="navbar_container_left">
          <div className="logo">
            <img
              src={images.logo}
              alt="NFT Market Place"
              width={100}
              height={100}
            />
          </div>

          <div className="navbar_container_left_box_input">
            <div className="navbar_container_left_box_input_box">
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className="search_icon" />
            </div>
          </div>
        </div>
        {/* END OF THE LEFT SECTION  */}

        <div className="navbar_container_right">
          <div className="navbar_container_right_discover">
            <p onClick={(e) => openMenu(e)}>Discover</p>

            {/* DISCOVER MENU */}
            {discover && (
              <div className="navbar_container_right_discover_box">
                <Discover />
              </div>
            )}
          </div>

          {/* HELP CENTER MENU */}
          <div className="navbar_container_right_help">
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className="navbar_container_right_help_box">
                <HelpCenter />
              </div>
            )}
          </div>

          {/* NOTIFICATION */}
          <div className="navbar_container_right_notify">
            <MdNotifications
              className="notify"
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div>

          {/* CREATE BUTTON SECTION */}
          <div className="navbar_container_right_button">
            <Button btnText="Create" />
          </div>

          {/* USER PROFILE */}
          <div className="navbar_container_right_profile_box">
            <div className="navbar_container_right_profile_box">
              <img
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className="navbar_container_right_profile"
              />

              {profile && <Profile />}
            </div>
          </div>

          {/* MENU BUTTON */}
          <div className="navbar_container_right_menuBtn">
            <CgMenuRight
              className="menuIcon"
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>

      {/* SIDEBAR COMPONENET */}
      {
        openSideMenu && (
          <div className="SideBar">
            <SideBar setOpenSideMenu={setOpenSideMenu}/>
          </div>
        )
      }
    </div>
  );
};

export default NavBar;
