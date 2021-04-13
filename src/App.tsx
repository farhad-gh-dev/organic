import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
