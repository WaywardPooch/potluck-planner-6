// Libraries
import React from "react";
// Assets
import heroHomeImg from "../../assets/img-hero-home-400kb.jpg";
// Custom components
import HeroBanner from "../../components/HeroBanner/HeroBanner.jsx";
import TextShowcase from "../../components/TextShowcase/TextShowcase.jsx";
import CreatePotluckSection from "../CreatePotluckSection/CreatePotluckSection.jsx";

const HomePage = (props) => {
  const { isLoggedIn } = props;

  return (
    <>
      {!isLoggedIn 
      // When the user is NOT logged in, show MARKETING
      ? (
        <section className="home-page">
          <HeroBanner
            height={50}
            title="Potluck Planner"
            description="The Ultimate Potluck Organizer"
            imageURL={heroHomeImg}
            showButton={true}
            buttonText="Start Now"
            buttonURL="/account"
          />
          <TextShowcase 
            title="Planning Made Easy" 
            description={[
              "If you have ever tried to organize a potluck through text messages, online to-do lists or spreadsheets, you'll understand why this app is essential.", 
              "In the world of social gatherings and potlucks the 'Potluck Planner' is king.", 
              "This is your place for all things pot luck."
            ]}
            textAlign="center"
          />
        </section>
      // When the user IS logged in, show REAL UI
      ) : (
        <CreatePotluckSection />
      )}
    </>
  );
};

export default HomePage;
