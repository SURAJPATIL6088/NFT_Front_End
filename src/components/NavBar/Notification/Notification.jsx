import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";

// INTERNAL IMPORT
import "./Notification.css";
import images from "../../../imgs";

const Notification = () => {
  return (
    <div className="notification">
      <p>Notification</p>
      <div className="notification_box">
        <div className="notification_box_img">
          <img
            src={images.user1}
            alt="profile image"
            width={50}
            height={50}
            className="notification_box_img"
          />
        </div>

        <div className="notification_box_info">
          <h4>Suraj Patil</h4>
          <p>Measure actoin your user...</p>
          <small> 3 minutes ago</small>
        </div>

        {/* for styling purpose */}
        <span className="notification_box_new"></span>
      </div>
    </div>
  );
};

export default Notification;
