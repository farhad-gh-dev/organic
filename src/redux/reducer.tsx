import { combineReducers } from "redux";
import { SET_NEW_THEME } from "./actions";

import { _NavbarData_ } from "../components/Navbar/_navbar-types";
import { _HeaderData_ } from "../components/Header/_header-types";
import BrandLogo from "../assets/logo/logo.png";
import { ReactComponent as AloeVeraGraphic } from "../assets/aloevera-graphic.svg";
import { ReactComponent as BlueBerryGraphic } from "../assets/blueberry-graphic.svg";
import { ReactComponent as ChocolateGraphic } from "../assets/chocolate-graphic.svg";
import HeaderVideo from "../assets/videos/teaser.mp4";

interface Theme {
  theme: string;
  navbar: _NavbarData_;
  header: _HeaderData_;
}

const initTheme: Theme = {
  theme: "aloe-vera",
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
  header: {
    mainGraphicSrc: <BlueBerryGraphic />,
    title: "It's all organic here",
    description:
      "An Organic product is made from materials producted by organic agriculture",
    videoSrc: HeaderVideo,
  },
};

function themeReducer(state: Theme = initTheme, action: any) {
  switch (action.type) {
    case SET_NEW_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
}

export default combineReducers({
  themeReducer,
});
