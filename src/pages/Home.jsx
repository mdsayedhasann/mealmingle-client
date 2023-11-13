import React from "react";
import Banner from "../shared/Banner";
import AvailableFood from "./AvailableFood";
import About from "../shared/About";
import AvailableFoods from "./AvailableFoods";
import HomeBanner from "../shared/HomeBanner";

const Home = () => {
  return (
    <>
    <Banner></Banner>
    <About></About>
    <AvailableFoods></AvailableFoods>
    <HomeBanner></HomeBanner>
    </>
  );
};

export default Home;
