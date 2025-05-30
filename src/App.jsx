import React from "react";
import Header from "./components/Header"; // Assuming Header.jsx is in src/components
import Landing from "./components/Landing"; // Assuming Landing.jsx is in src/components
import Articles from "./components/Articles";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div>
      <Header />
      <Landing />
      <Articles />
      <Gallery />
    </div>
  );
};

export default App;
