import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="my-about-container">
      <div className="about-container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1 className="about-title">About CodeLive</h1>
          <p className="about-subtitle">
            Collaborate, Share, and Innovate with real-time live coding!
          </p>
        </section>

        {/* Content Section */}
        <section className="about-content">
          <div className="about-feature feature-one">
            <h2 className="feature-title">Our Mission</h2>
            <p className="feature-description">
              Breaking barriers in software development by providing a platform
              for live collaboration, secure sharing, and efficient debugging.
            </p>
          </div>
          <div className="about-feature feature-two">
            <h2 className="feature-title">Why Choose Us?</h2>
            <p className="feature-description">
              Seamless performance, intuitive design, and a developer-friendly
              environment tailored for teams and individuals's work.
            </p>
          </div>
          <div className="about-feature feature-three">
            <h2 className="feature-title">The Team</h2>
            <p className="feature-description">
              Built by passionate developers, we create tools to enhance
              productivity and foster innovation.
            </p>
          </div>
          <div className="about-feature feature-three">
            <h2 className="feature-title">The Team</h2>
            <p className="feature-description">
              Built by passionate developers, we create tools to enhance
              productivity and foster innovation.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
