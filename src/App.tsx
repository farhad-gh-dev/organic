import React from "react";
import Loading from "./components/Loading/Loading";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import BackgroundGraphics from "./components/Graphics/Graphics";
import "./app.scss";

import { useSelector } from "react-redux";
import { RootState } from "./redux/reducer";

const App: React.FC = () => {
  const {
    isLoading,
    navbar: navbarData,
    activeTheme,
    themes,
  } = useSelector((store: RootState) => store.themeReducer);

  return (
    <div className={`app position-relative __${activeTheme}-theme__`}>
      <Loading isActive={isLoading} />

      <BackgroundGraphics />
      <Navbar
        brandName={themes[activeTheme].brandName}
        brandLogo={themes[activeTheme].brandLogo}
        items={navbarData.items}
        signUpPage={navbarData.signUpPage}
      />
      <Header
        mainGraphicSrc={themes[activeTheme].mainGraphicSrc}
        title={themes[activeTheme].title}
        description={themes[activeTheme].description}
        videoSrc={themes[activeTheme].videoSrc}
        GraphicElement={themes[activeTheme].headerGraphicElement}
      />
      <Carousel carouselItems={themes[activeTheme].products} />
    </div>
  );
};

export default App;
