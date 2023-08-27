import React, { useState, useCallback } from "react";

import { AiFillFire, AiFillHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

// INTERNAL IMPORT
import "./BigNFTSlider.css";
import images from "../../imgs";
import Button from "../Button/Button";

const BigNFTSlider = () => {
  const [idNumber, setIdNumber] = useState(0);

  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Suraj Patil",
      collection: "Gym",
      price: "0064664 ETH",
      like: 243,
      image: images.user1,
      nftImage: images.nft_image_1,
      time: {
        days: 27,
        hours: 10,
        minutes: 11,
        seconds: 35,
      },
    },
    {
      title: "Block NFT",
      id: 2,
      name: "Bhushan Patil",
      collection: "Home",
      price: "056 ETH",
      like: 243,
      image: images.user2,
      nftImage: images.nft_image_2,
      time: {
        days: 82,
        hours: 12,
        minutes: 41,
        seconds: 15,
      },
    },
    {
      title: "Life NFT",
      id: 3,
      name: "Aman Jha",
      collection: "life",
      price: "62 ETH",
      like: 243,
      image: images.user3,
      nftImage: images.nft_image_3,
      time: {
        days: 12,
        hours: 18,
        minutes: 38,
        seconds: 20,
      },
    },
    {
      title: "Coder NFT",
      id: 4,
      name: "Varad Patil",
      collection: "programming",
      price: "27 ETH",
      like: 243,
      image: images.user4,
      nftImage: images.nft_image_1,
      time: {
        days: 64,
        hours: 10,
        minutes: 27,
        seconds: 51,
      },
    },
    {
      title: "Coder NFT",
      id: 5,
      name: "Atharva Pimple",
      collection: "programming",
      price: "42 ETH",
      like: 242,
      image: images.user5,
      nftImage: images.nft_image_2,
      time: {
        days: 42,
        hours: 10,
        minutes: 26,
        seconds: 54,
      },
    },
  ];

  // --- increment function
  const increment = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  // --- decrement function
  const decrement = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div className="bigNFTSlider">
      <div className="bigNFTSlider_box">
        <div className="bigNFTSlider_box_left">
          <h2>{sliderData[idNumber].title}</h2>

          <div className="bigNFTSlider_box_left_creator">
            <div className="bigNFTSlider_box_left_creator_profile">
              <img
                className="bigNFTSlider_box_left_creator_profile_img"
                src={sliderData[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
              />

              <div className="bigNFTSlider_box_left_creator_profile_info">
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>

            <div className="bigNFTSlider_box_left_creator_collection">
              <AiFillFire className="bigNFTSlider_box_left_creator_collection_icon" />

              <div className="bigNFTSlider_box_left_creator_collection_info">
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>

          <div className="bigNFTSlider_box_left_bidding">
            <div className="bigNFTSlider_box_left_bidding_box">
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price} <span>$1,34,567</span>
              </p>
            </div>

            <p className="bigNFTSlider_box_left_bidding_box_auction">
              <MdTimer className="bigNFTSlider_box_left_bidding_box_icon" />
              <span>Auction ending in</span>
            </p>

            <div className="bigNFTSlider_box_left_bidding_box_timer">
              <div className="bigNFTSlider_box_left_bidding_box_timer_item">
                <p>{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>

              <div className="bigNFTSlider_box_left_bidding_box_timer_item">
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>

              <div className="bigNFTSlider_box_left_bidding_box_timer_item">
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>Minutes</span>
              </div>

              <div className="bigNFTSlider_box_left_bidding_box_timer_item">
                <p>{sliderData[idNumber].time.seconds}</p>
                <span>Seconds</span>
              </div>
            </div>

            <div className="bigNFTSlider_box_left_button">
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>

          <div className="bigNFTSlider_box_left_sliderBtn">
            <TbArrowBigLeftLines
              className="bigNFTSlider_box_left_sliderBtn_icon"
              onClick={() => decrement()}
            />

            <TbArrowBigRightLine
              className="bigNFTSlider_box_left_sliderBtn_icon"
              onClick={() => increment()}
            />
          </div>
        </div>

        <div className="bigNFTSlider_box_right">
          <div className="bigNFTSlider_box_right_box">
            <img
              src={sliderData[idNumber].nftImage}
              alt="NFT IMAGE"
              className="bigNFTSlider_box_right_box_img"
            />

            <div className="bigNFTSlider_box_right_box_like">
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSlider;