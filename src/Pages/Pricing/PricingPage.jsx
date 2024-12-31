import React from "react";
import "./PricingPage.css";

const PricingPage = () => {
  const pricingPlans = [
    {
      title: "Basic",
      price: "₹99/month",
      features: [
        "1 Project",
        "Real-time Collaboration",
        "Basic Support",
        "Access to Public Repos",
      ],
      buttonText: "Get Started",
      buttonColor: "#4CAF50",
    },
    {
      title: "Pro",
      price: "₹299/month",
      features: [
        "10 Projects",
        "Priority Support",
        "Private Repos",
        "Collaborator Access",
      ],
      buttonText: "Upgrade Now",
      buttonColor: "#FF5722",
    },
    {
      title: "Enterprise",
      price: "₹499/month",
      features: [
        "Unlimited Projects",
        "Dedicated Support",
        "Advanced Security",
        "API Access",
      ],
      buttonText: "Contact Us",
      buttonColor: "#2196F3",
    },
  ];

  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Our Pricing Plans</h1>
      <p className="pricing-subtitle">
        Choose the plan that suits your needs. No hidden fees.
      </p>
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h2 className="pricing-title">{plan.title}</h2>
            <p className="pricing-price">{plan.price}</p>
            <ul className="pricing-features">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button
              className="pricing-button"
              style={{ backgroundColor: plan.buttonColor }}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
