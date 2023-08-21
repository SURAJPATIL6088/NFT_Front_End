import React from "react"

// INTERNAL IMPORT
import "./App.css"
import { HeroSection, Service } from "./components/componentindex";

const Home = () => {

  return (
    <div className="homePage">
      <HeroSection />
      <Service />
    </div>
  );
};

export default Home;
