import { combineReducers } from "redux";
import { SET_NEW_THEME } from "./actions";

import { _NavbarData_ } from "../components/Navbar/_navbar-types";

import AloeVeraGraphic from "../assets/images/aloevera-graphic.png";
import BlueBerryGraphic from "../assets/images/blueberry-graphic.png";
import ChocolateGraphic from "../assets/images/chocolate-graphic.png";

import BrandLogo from "../assets/logo/aloe-vera.png";
import ChocolateBrandLogo from "../assets/logo/chocolate.png";
import BlueberryBrandLogo from "../assets/logo/blueberry.png";

import AloeveraProductImage1 from "../assets/images/model-product-1.png";
import AloeveraProductImage2 from "../assets/images/model-product-2.png";
import BlueberryProductImage1 from "../assets/images/blueberry-ice-cream-1.png";
import BlueberryProductImage2 from "../assets/images/blueberry-ice-cream-2.png";
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
  activeTheme: "aloe-vera",
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
      title: "Make sweet memories",
      description:
        "All of our vegan ice creams take a lengthy and rewarding process to make, try them now.",
      headerGraphicElement: BlueBerriesImage,
      videoSrc: HeaderVideo,
      products: [
        {
          title: "Goji Moon Berry",
          description:
            "Wolfberry and goji berry ice cream with fudge sauce swirls.",
          price: "8.50",
          background: "light",
          image: BlueberryProductImage1,
        },
        {
          title: "Dragonfruit Lemonade",
          description: `Creamy and tart dragonfruit with fresh lemon.`,
          price: "10.00",
          background: "dark",
          image: BlueberryProductImage2,
        },
        {
          title: "Goji Moon Berry",
          description:
            "Wolfberry and goji berry ice cream with fudge sauce swirls.",
          price: "8.50",
          background: "light",
          image: BlueberryProductImage1,
        },
        {
          title: "Dragonfruit Lemonade",
          description: `Creamy and tart dragonfruit with fresh lemon.`,
          price: "10.00",
          background: "dark",
          image: BlueberryProductImage2,
        },
      ],
    },
    chocolate: {
      brandName: "Chocolove",
      brandLogo: ChocolateBrandLogo,
      mainGraphicSrc: ChocolateGraphic,
      title: " Set your bars high",
      description:
        "Savor the difference of artisan chocolate, handcrafted by local chocolatiers for you.",
      headerGraphicElement: CookieImage,
      videoSrc: HeaderVideo,
      products: [
        {
          title: "Chocolate milkshake",
          description:
            "This indulgent masterpiece topped with cream and drizzle is one seriously special treat.",
          price: "2.59",
          background: "light",
          image: ChocolateProductImage2,
        },
        {
          title: "Hot Chocolate",
          description: `This rich and creamy Hot Chocolate has intense chocolate flavor.`,
          price: "4.98",
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
