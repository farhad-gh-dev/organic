import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import BackgroundGraphics from "./components/Graphics/Graphics";

import { useSelector } from "react-redux";
import { RootState } from "./redux/reducer";

const App: React.FC = () => {
  const {
    navbar: navbarData,
    activeTheme,
    themes,
  } = useSelector((store: RootState) => store.themeReducer);

  console.log(themes[activeTheme]);

  return (
    <div className={`app position-relative __${activeTheme}-theme__`}>
      <BackgroundGraphics />
      <Navbar
        brandName={navbarData.brandName}
        brandLogo={navbarData.brandLogo}
        items={navbarData.items}
        signUpPage={navbarData.signUpPage}
      />
      <Header
        mainGraphicSrc={themes[activeTheme].mainGraphicSrc}
        title={themes[activeTheme].title}
        description={themes[activeTheme].description}
        videoSrc={themes[activeTheme].videoSrc}
      />
      <Carousel carouselItems={themes[activeTheme].products} />
    </div>
  );
};

export default App;
