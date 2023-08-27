import React from "react"

// INTERNAL IMPORT
import "./App.css"
import { HeroSection, Service, BigNFTSlider } from "./components/componentindex";

const Home = () => {

  return (
    <div className="homePage">
      <HeroSection />
      <Service />
      <BigNFTSlider />
    </div>
  );
};

export default Home;
