import React from 'react';
import ReactDOM from 'react-dom/client'
import { Link } from "react-router-dom";

// INTERNAL IMPORT
import './Discover.css';

const Discover = () => {

  // DISCOVER NAVIGATION MENU
  const discover = [
    {
      name: "Collection",
      link: "collection"
    },
    {
      name: "Search",
      link: "search"
    },
    {
      name: "Author Profile",
      link: "author-profile"
    },
    {
      name: "NFT Details",
      link: "NFT-details"
    },
    {
      name: "Account Setting",
      link: "account-setting"
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet"
    },
    {
      name: "Blog",
      link: "Blog"
    },
  ];

  return (
    <div>
      {discover.map((el, i) => (
        <div key= {i+1} className="discover">
          {/* for reference <Link to={user.id}>{user.name}</Link> */}
          <Link href={{pathname: `${el.link}`}}>{el.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Discover;