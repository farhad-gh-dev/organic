import { combineReducers } from "redux";
import { SET_NEW_THEME } from "./actions";

import { _NavbarData_ } from "../components/Navbar/_navbar-types";
import { _HeaderData_ } from "../components/Header/_header-types";
import BrandLogo from "../assets/logo/logo.png";
import { ReactComponent as AloeVeraGraphic } from "../assets/aloevera-graphic.svg";
import { ReactComponent as BlueBerryGraphic } from "../assets/blueberry-graphic.svg";
import { ReactComponent as ChocolateGraphic } from "../assets/chocolate-graphic.svg";

import AloeveraProductImage1 from "../assets/images/model-product-1.png";
import AloeveraProductImage2 from "../assets/images/model-product-2.png";
import ChocolateProductImage1 from "../assets/images/hot-chocolate.png";
import ChocolateProductImage2 from "../assets/images/frozen-hot-chocolate.png";

import HeaderVideo from "../assets/videos/teaser.mp4";

interface Theme {
  activeTheme: string;
  navbar: _NavbarData_;
  themes: any;
}

const initTheme: Theme = {
  activeTheme: "chocolate",
  navbar: {
    brandName: "Organic",
    brandLogo: BrandLogo,
    items: [
      { type: "link", title: "home", target: "#" },
      {
        type: "dropdown",
        title: "themes",
        target: ["aloe vera", "blueberry", "chocolate"],
      },
      { type: "link", title: "home", target: "#" },
    ],
    signUpPage: "#",
  },
  themes: {
    "aloe-vera": {
      brandName: "Organic",
      brandLogo: BrandLogo,
      mainGraphicSrc: <AloeVeraGraphic />,
      title: "It's all organic here",
      description:
        "An Organic product is made from materials producted by organic agriculture",
      videoSrc: HeaderVideo,
      products: [
        {
          title: "alovera cream",
          description: "Moisturising for Inflammation for All Skin Types.",
          price: "115",
          background: "light",
          image: AloeveraProductImage1,
        },
        {
          title: "eye makeup remover",
          description: `Vegetarian, Gluten-Free, Without animal
          ingredients except honey & beeswax`,
          price: "130",
          background: "dark",
          image: AloeveraProductImage2,
        },
        {
          title: "alovera cream",
          description: "Moisturising for Inflammation for All Skin Types.",
          price: "115",
          background: "light",
          image: AloeveraProductImage1,
        },
        {
          title: "eye makeup remover",
          description: `Vegetarian, Gluten-Free, Without animal
          ingredients except honey & beeswax`,
          price: "130",
          background: "dark",
          image: AloeveraProductImage2,
        },
      ],
    },
    blueberry: {
      brandName: "Organic",
      brandLogo: BrandLogo,
      mainGraphicSrc: <BlueBerryGraphic />,
      title: "It's all organic here",
      description:
        "An Organic product is made from materials producted by organic agriculture",
      videoSrc: HeaderVideo,
      products: [
        {
          title: "alovera cream",
          description: "Moisturising for Inflammation for All Skin Types.",
          price: "115",
          background: "light",
          image: AloeveraProductImage1,
        },
        {
          title: "eye makeup remover",
          description: `Vegetarian, Gluten-Free, Without animal
          ingredients except honey & beeswax`,
          price: "130",
          background: "dark",
          image: AloeveraProductImage2,
        },
        {
          title: "alovera cream",
          description: "Moisturising for Inflammation for All Skin Types.",
          price: "115",
          background: "light",
          image: AloeveraProductImage1,
        },
        {
          title: "eye makeup remover",
          description: `Vegetarian, Gluten-Free, Without animal
          ingredients except honey & beeswax`,
          price: "130",
          background: "dark",
          image: AloeveraProductImage2,
        },
      ],
    },
    chocolate: {
      brandName: "Organic",
      brandLogo: BrandLogo,
      mainGraphicSrc: <ChocolateGraphic />,
      title: "It's all organic here",
      description:
        "An Organic product is made from materials producted by organic agriculture",
      videoSrc: HeaderVideo,
      products: [
        {
          title: "alovera cream",
          description: "Moisturising for Inflammation for All Skin Types.",
          price: "115",
          background: "light",
          image: ChocolateProductImage2,
        },
        {
          title: "eye makeup remover",
          description: `Vegetarian, Gluten-Free, Without animal
          ingredients except honey & beeswax`,
          price: "130",
          background: "dark",
          image: ChocolateProductImage1,
        },
        {
          title: "alovera cream",
          description: "Moisturising for Inflammation for All Skin Types.",
          price: "115",
          background: "light",
          image: ChocolateProductImage2,
        },
        {
          title: "eye makeup remover",
          description: `Vegetarian, Gluten-Free, Without animal
          ingredients except honey & beeswax`,
          price: "130",
          background: "dark",
          image: ChocolateProductImage1,
        },
      ],
    },
  },
};

function themeReducer(state: Theme = initTheme, action: any) {
  switch (action.type) {
    case SET_NEW_THEME:
      let newMainGraphic = <ChocolateGraphic />;

      if (action.payload === "aloe-vera") newMainGraphic = <AloeVeraGraphic />;
      if (action.payload === "blueberry") newMainGraphic = <BlueBerryGraphic />;
      if (action.payload === "chocolate") newMainGraphic = <ChocolateGraphic />;

      return {
        ...state,
        activeTheme: action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  themeReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
