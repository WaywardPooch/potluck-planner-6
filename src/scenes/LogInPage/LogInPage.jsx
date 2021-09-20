// Libraries
import React from "react";
// Styles
import "./LogInPage.scss"
// Custom components
import LogInForm from "../../components/LogInForm.js";

const LogInPage = () => {
  return (
    <section className="login-page">
      <div className="login-page-content">
        <LogInForm />
      </div>
    </section>
  );
}

export default LogInPage;