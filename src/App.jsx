import React from "react";
import Header from "./components/Header"; // Assuming Header.jsx is in src/components
import Landing from "./components/Landing"; // Assuming Landing.jsx is in src/components
import Articles from "./components/Articles";

const App = () => {
  return (
    <div>
      <Header />
      <Landing />
      <Articles />
    </div>
  );
};

export default App;
