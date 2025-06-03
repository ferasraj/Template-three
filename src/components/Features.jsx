import React from "react";
import FeaturesCards from "./FeaturesCards";
import { featuresData } from "../assets/assets";

const Features = () => {
  return (
    <section id="features">
      <div className="features py-primary relative">
        <h2 className="main-title uppercase">features</h2>
        <div className="container">
          <div className="grid grid-auto-300 gap-10">
            {featuresData.map((feature) => (
              <FeaturesCards key={feature.id} features={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
