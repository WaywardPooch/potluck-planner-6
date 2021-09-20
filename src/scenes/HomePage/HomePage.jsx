import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner.jsx"

import heroHomeImg from "../../assets/hero-home-400kb.jpg"

const HomePage = () => {
  return (
    <>
      <HeroBanner title="Potluck Planner" description="The Ultimate Potluck Organizer" imageURL={heroHomeImg}/>
    </>
  );
}

export default HomePage;