import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

import { RiSendPlaneFill } from "react-icons/ri";

// INTERNAL IMPORT
import "./Footer.css";
import images from "../../imgs";
import { Discover, HelpCenter } from "../NavBar/index";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_box">
        <div className="footer_box_social">
          <img src={images.logo} alt="footer logo" height={100} width={100} />
          <p>
            The worlds first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover
            exclusive digital items.
          </p>

          <div className="footer_social">
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

        <div className="footer_box_discover">
          <h3>Discover</h3>
          <Discover />
        </div>

        <div className="footer_box_help">
          <h3>Help Center</h3>
          <HelpCenter />
        </div>

        <div className="subscribe">
          <div className="subscribe_box">
            <input type="email" placeholder="Enter your Email *" />
            <RiSendPlaneFill className="subscribe_box_send" />
          </div>
          <div className="subscribe_box_info">
            <p>
              Discover, collect, and sell extraordinary NFTs OpenSea is the
              first and largest NFT marketplace.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Footer;
