// Libraries
import React from "react";
// Assets
import heroHomeImg from "../../../assets/img-hero-home-400kb.jpg";
// Custom components
import Jumbotron from "../../../components/banners/Jumbotron";
import TextShowcase from "../../../components/banners/TextShowcase";
import CreatePotluck from "../../sections/CreatePotluck";
import ViewPotlucks from "../../sections/ViewPotlucks";

// Main component
const HomePage = (props) => {
  const { isLoggedIn } = props;

  return (
    <>
      {!isLoggedIn ? (
        // When the user is NOT logged in, show MARKETING
        <section className="home-page">
          <Jumbotron
            height="50rem"
            title="Potluck Planner"
            description="The Ultimate Potluck Organizer"
            imageURL={heroHomeImg}
            showButton={true}
            buttonText="Start Now"
            buttonURL="/account"
          />
          <TextShowcase
            title="Planning Made Easy"
            content={
              <>
                <p>
                  If you have ever tried to organize a potluck through text
                  messages, online to-do lists or spreadsheets, you'll
                  understand why this app is essential.
                </p>
                <p>
                  In the world of social gatherings and potlucks the 'Potluck
                  Planner' is king.
                </p>
                <p>This is your place for all things pot luck.</p>
              </>
            }
            textAlign="center"
          />
        </section>
      ) : (
        // When the user IS logged in, show REAL UI
        <>
          <CreatePotluck />
          <ViewPotlucks />
        </>
      )}
    </>
  );
};

export default HomePage;
