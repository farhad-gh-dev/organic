import { combineReducers } from "redux";
import { SET_NEW_THEME } from "./actions";

import { _NavbarData_ } from "../components/Navbar/_navbar-types";
import { _HeaderData_ } from "../components/Header/_header-types";

import AloeVeraGraphic from "../assets/images/aloevera-graphic.png";
import BlueBerryGraphic from "../assets/images/blueberry-graphic.png";
import ChocolateGraphic from "../assets/images/chocolate-graphic.png";

import BrandLogo from "../assets/logo/logo.png";
import ChocolateBrandLogo from "../assets/logo/chocolate.png";
import BlueberryBrandLogo from "../assets/logo/blueberry.png";

import AloeveraProductImage1 from "../assets/images/model-product-1.png";
import AloeveraProductImage2 from "../assets/images/model-product-2.png";
import ChocolateProductImage1 from "../assets/images/hot-chocolate.png";
import ChocolateProductImage2 from "../assets/images/frozen-hot-chocolate.png";

import LeafImage from "../assets/images/leaf.png";
import CookieImage from "../assets/images/cookies.png";
import BlueBerriesImage from "../assets/images/blueberries.png";

import HeaderVideo from "../assets/videos/teaser.mp4";

interface Theme {
  activeTheme: string;
  navbar: _NavbarData_;
  themes: any;
}

const initTheme: Theme = {
  activeTheme: "chocolate",
  navbar: {
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
      mainGraphicSrc: AloeVeraGraphic,
      title: "It's all organic here",
      description:
        "An Organic product is made from materials producted by organic agriculture",
      headerGraphicElement: LeafImage,
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
      brandName: "Bluberry Bay",
      brandLogo: BlueberryBrandLogo,
      mainGraphicSrc: BlueBerryGraphic,
      title: "It's all organic here",
      description:
        "An Organic product is made from materials producted by organic agriculture",
      headerGraphicElement: BlueBerriesImage,
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
      brandName: "Chocolove",
      brandLogo: ChocolateBrandLogo,
      mainGraphicSrc: ChocolateGraphic,
      title: "It's all organic here",
      description:
        "An Organic product is made from materials producted by organic agriculture",
      headerGraphicElement: CookieImage,
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
