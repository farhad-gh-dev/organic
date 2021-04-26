import { combineReducers } from "redux";
import { SET_NEW_THEME } from "./actions";

import { _NavbarData_ } from "../components/Navbar/_navbar-types";
import { _HeaderData_ } from "../components/Header/_header-types";
import BrandLogo from "../assets/logo/logo.png";
import { ReactComponent as HeaderGraphic } from "../assets/glass-graphic.svg";
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
        target: ["aloe vera", "blueberry", "orange"],
      },
      { type: "link", title: "home", target: "#" },
    ],
    signUpPage: "#",
  },
  header: {
    mainGraphicSrc: HeaderGraphic,
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
