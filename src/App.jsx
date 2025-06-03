import React from "react";
import Header from "./components/Header"; // Assuming Header.jsx is in src/components
import Landing from "./components/Landing"; // Assuming Landing.jsx is in src/components
import Articles from "./components/Articles";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Team from "./components/Team";
import Features from "./components/Features";
import WorkSteps from "./components/WorkSteps";

const App = () => {
  return (
    <div>
      <Header />
      <Landing />
      <Articles />
      <Gallery />
      <Features />
      <Testimonials />
      <Team />
      <Services />
      <WorkSteps />
    </div>
  );
};

export default App;
