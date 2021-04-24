import { combineReducers } from "redux";
import { _NavbarData_ } from "../components/Navbar/_navbar-types";
import { _HeaderData_ } from "../components/Header/_header-types";
import BrandLogo from "../assets/logo/logo.png";
import { ReactComponent as HeaderGraphic } from "../assets/glass-graphic.svg";
import { ReactComponent as DonutGraphic } from "../assets/donut.svg";
import HeaderVideo from "../assets/videos/teaser.mp4";

interface General {
  backgroundColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
  primaryTextColor?: string;
  secondaryTextColor?: string;
  buttonBackgroundColor?: string;
}

interface Theme {
  general: General;
  navbar: _NavbarData_;
  header: _HeaderData_;
}

const initTheme: Theme = {
  general: {
    backgroundColor: "#f4fff9",
    primaryColor: "",
    secondaryColor: "",
    primaryTextColor: "",
    secondaryTextColor: "",
    buttonBackgroundColor: "",
  },
  navbar: {
    brandName: "Nature",
    brandLogo: BrandLogo,
    items: [
      { type: "link", title: "home", target: "#" },
      {
        type: "dropdown",
        title: "product",
        target: [
          { type: "link", title: "face wash", target: "#" },
          { type: "link", title: "makeup remover", target: "#" },
          { type: "link", title: "night serum", target: "#" },
        ],
      },
      { type: "link", title: "home", target: "#" },
    ],
    signUpPage: "#",
  },
  header: {
    mainGraphic: HeaderGraphic,
    donutGraphic: {
      src: DonutGraphic,
      color: "red",
    },
    title: "It's all organic here",
    description:
      "An Organic product is made from materials producted by organic agriculture",
    videoSrc: HeaderVideo,
  },
};

function themeReducer(state: Theme = initTheme, action: any) {
  return state;
}

export default combineReducers({
  themeReducer,
});
