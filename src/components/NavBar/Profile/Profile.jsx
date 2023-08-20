import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";

// INTERNAL IMPORT
import "./Profile.css";
import images from "../../../imgs";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile_account">
        <img
          src={images.user1}
          alt="user profile"
          width={50}
          height={50}
          className="profile_account_img"
        />

        <div className="profile_account_info">
          <p>Suraj Patil</p>
          <small>5xaed...fd</small>
        </div>
      </div>

      <div className="profile_menu">
        <div className="profile_menu_one">
          <div className="profile_menu_one_item">
            <FaUserAlt />
            <p>
              <Link to={"/myprofile"}>My Profile</Link>
            </p>
          </div>

          <div className="profile_menu_one_item">
            <FaRegImage />
            <p>
              <Link to={"/my-items" }>My Items</Link>
            </p>
          </div>

          <div className="profile_menu_one_item">
            <FaUserEdit />
            <p>
              <Link to={"/edit-profile" }>Edit Profile</Link>
            </p>
          </div>

        </div>

        {/* border added  */}
        <div className="profile_menu_two">
          <div className="profile_menu_one_item">
            <MdHelpCenter />
            <p>
              <Link  to={"/help"} >Help</Link>
            </p>
          </div>

          <div className="profile_menu_one_item">
            <TbDownload />
            <p>
              <Link to={"/disconnect"}>Disconnect</Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
