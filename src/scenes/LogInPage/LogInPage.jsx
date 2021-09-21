// Libraries
import React from "react";
// Styles
import "./LogInPage.scss";
// Custom components
import AccountCard from "../../components/Cards/AccountCard/AccountCard.jsx"

const LogInPage = () => {
  return (
    <section className="login-page">
      {/* Desktop Size Limit Container */}
      <div className="login-page-content">
        <AccountCard />
      </div>
    </section>
  );
};

export default LogInPage;
