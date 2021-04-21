const brand = {
  start: {
    opacity: 0,
    translateX: "-30px",
    transitionDuration: "0.6s",
    transitionTimingFunction: "ease-out",
  },
  end: {
    opacity: 1,
    translateX: "0px",
  },
};

const signUpSearch = {
  start: {
    opacity: 0,
    translateX: "50px",
    transitionDuration: "0.5s",
    transitionTimingFunction: "ease-out",
  },
  end: {
    opacity: 1,
    translateX: "0px",
  },
};

const dropdownSearch = {
  start: {
    opacity: 0,
    translateX: "50px",
    transitionDuration: "0.5s",
    transitionTimingFunction: "ease-out",
  },
  end: {
    opacity: 1,
    translateX: "0px",
  },
};

const navbarItems = {
  start: {
    opacity: 0,
    translateY: "-25px",
    transitionDuration: "0.5s",
    transitionTimingFunction: "ease-out",
  },
  end: {
    opacity: 1,
    translateY: "0px",
  },
};

export default {
  brand,
  signUpSearch,
  dropdownSearch,
  navbarItems,
};
