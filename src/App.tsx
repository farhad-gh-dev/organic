import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Carousel />
    </div>
  );
};

export default App;
