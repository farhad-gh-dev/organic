import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import BackgroundGraphics from "./components/Graphics/Graphics";

import { useSelector } from "react-redux";

const App: React.FC = () => {
  const navbarData: any = useSelector<any>(
    (store) => store.themeReducer.navbar
  );
  const HeaderData: any = useSelector<any>(
    (store) => store.themeReducer.header
  );

  console.log(navbarData);

  return (
    <div className="app position-relative">
      <BackgroundGraphics />
      <Navbar
        brandName={navbarData.brandName}
        brandLogo={navbarData.brandLogo}
        items={navbarData.items}
        signUpPage={navbarData.signUpPage}
      />
      <Header
        mainGraphic={HeaderData.mainGraphic}
        title={HeaderData.title}
        description={HeaderData.description}
        videoSrc={HeaderData.videoSrc}
      />
      <Carousel />
    </div>
  );
};

export default App;
