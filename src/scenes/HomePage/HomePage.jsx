import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner.jsx";

import heroHomeImg from "../../assets/img-hero-home-400kb.jpg";
import HomePageCard from "../../components/Cards/HomePageCard/HomePageCard.jsx";

const HomePage = () => {
  return (
    <>
      <HeroBanner
        height={10}
        title="Potluck Planner"
        description="The Ultimate Potluck Organizer"
        imageURL={heroHomeImg}
        showButton={true}
        buttonText="Start Now"
        buttonURL="/potlucks/create"
      />,

      <HomePageCard />
    </>
  );
};

export default HomePage;
