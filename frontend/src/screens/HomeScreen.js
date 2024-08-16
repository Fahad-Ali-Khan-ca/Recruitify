import React from "react";
import HomePage from "../shared/components/homePage";
// import "./HomeScreen.css"; // Import the CSS file for styling
import "../styles/HomeScreen.css";
import { useSelector } from "react-redux";
const HomeScreen = () => {
  return (
    <div className="home-screen">
      <HomePage />
    </div>
  );
};

export default HomeScreen;
