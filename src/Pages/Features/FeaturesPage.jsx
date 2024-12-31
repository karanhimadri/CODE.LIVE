import React from "react";
import "./FeaturesPage.css";

const FeaturePage = () => {
  const features = [
    {
      icon: "⚡",
      title: "Real-time Collaboration",
      description:
        "Collaborate with team members in real-time and make coding sessions interactive and fun.",
    },
    {
      icon: "🔒",
      title: "Secure Code Sharing",
      description:
        "Your code is encrypted and securely shared, ensuring complete privacy and safety.",
    },
    {
      icon: "📱",
      title: "Cross-Platform Support",
      description:
        "Access CodeLive on any device, whether desktop, tablet, or mobile, seamlessly.",
    },
    {
      icon: "💡",
      title: "Syntax Highlighting",
      description:
        "Experience enhanced readability with built-in syntax highlighting for multiple languages.",
    },
    {
      icon: "🛠️",
      title: "Integrated Tools",
      description:
        "Built-in tools for debugging, version control, and testing to boost productivity.",
    },
    {
      icon: "🌐",
      title: "Global Access",
      description:
        "Collaborate with developers worldwide without any geographical restrictions.",
    },
    {
      icon: "🗯️",
      title: "LIVE Chat Messages",
      description:
        "Collaborate with team members and enjoy RealTime chat Messages ..",
    },
    {
      icon: "💲",
      title: "Free to Use",
      description:
        "Totally Free to Use for Beginners Students and Users with multiple languages.",
    },
  ];

  return (
    <div className="feature-container">
      <h1 className="feature-title">Explore Our Features</h1>
      <p className="feature-subtitle">
        Designed to empower developers with modern tools and functionality.
      </p>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h2 className="feature-heading">{feature.title}</h2>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturePage;
