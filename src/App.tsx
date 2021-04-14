import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import ItemsCarousel from "./components/ItemsCarousel/ItemsCarousel";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <ItemsCarousel />
    </div>
  );
};

export default App;
