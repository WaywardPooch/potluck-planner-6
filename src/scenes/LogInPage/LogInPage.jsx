// Libraries
import React from "react";
// Styles
import "./LogInPage.scss";
// Custom components
import LogInForm from "../../components/LogInForm.js";

const LogInPage = () => {
  return (
    <section className="login-page">
      <div className="login-page-content">
        <div className="login-area">
          <div className="login-area-top">
            <h1>Log In</h1>
          </div>
          <div className="login-area-bottom">
            <LogInForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogInPage;
