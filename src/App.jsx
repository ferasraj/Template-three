import React from "react";
import Header from "./components/Header"; // Assuming Header.jsx is in src/components
import Landing from "./components/Landing"; // Assuming Landing.jsx is in src/components
import Articles from "./components/Articles";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div>
      <Header />
      <Landing />
      <Articles />
      <Gallery />
      <Testimonials />
    </div>
  );
};

export default App;
