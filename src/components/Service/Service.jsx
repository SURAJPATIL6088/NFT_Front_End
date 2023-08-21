import React from "react";

// INTERNAL IMPORTS
import "./Service.css";
import images from "../../imgs";

const Service = () => {
  return (
    <div className="service">
      <div className="service_box">
        <div className="service_box_item">
          <img
            src={images.service1}
            alt="Filter & Discover"
            width={100}
            height={100}
          />

          <p className="service_box_item_step">
            <span>Step 1</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>Connect with wallet, discover, buy NFTs, sell your NFTs money</p>
        </div>

        <div className="service_box_item">
          <img
            src={images.service2}
            alt="Filter & Discover"
            width={100}
            height={100}
          />

          <p className="service_box_item_step">
            <span>Step 2</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money</p>
        </div>

        <div className="service_box_item">
          <img
            src={images.service3}
            alt="Connect Wallet"
            width={100}
            height={100}
          />

          <p className="service_box_item_step">
            <span>Step 3</span>
          </p>
          <h3>Connect Wallet</h3>
          <p>Connect with wallet, discover, buy NFTs, sell your NFTs money</p>
        </div>

        <div className="service_box_item">
          <img
            src={images.service4}
            alt="Start trading"
            width={100}
            height={100}
          />

          <p className="service_box_item_step">
            <span>Step 4</span>
          </p>
          <h3>Start trading</h3>
          <p>Connect with wallet, discover, buy NFTs, sell your NFTs money</p>
        </div>

      </div>
    </div>
  );
};

export default Service;
