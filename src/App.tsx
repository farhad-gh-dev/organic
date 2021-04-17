import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import BackgroundGraphics from "./components/Graphics/Graphics";

const App: React.FC = () => {
  return (
    <div className="app position-relative">
      <BackgroundGraphics />
      <Navbar />
      <Header />
      <Carousel />
    </div>
  );
};

export default App;
