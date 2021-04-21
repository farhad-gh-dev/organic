import React from "react";
import { motion } from "framer-motion";
import NavbarAnimations from "./_navbar_animations";
import Logo from "../../assets/logo/logo.png";
import { ReactComponent as SignUpIcon } from "../../assets/sign-up.svg";
import NavbarItems from "./NavbarItems/NavbarItems";
import SearchBox from "./SearchBox/SearchBox";

interface Props {
  brandName?: string;
  brandLogo?: string;
}

const Navbar: React.FC<Props> = ({ brandName = "organic", brandLogo }) => {
  return (
    <div className="navbar d-flex justify-space-between align-items-center">
      <motion.a
        initial={NavbarAnimations.brand.start}
        animate={NavbarAnimations.brand.end}
        href="#"
        className="brand-container custom-link d-flex align-items-center"
      >
        <img
          src={brandLogo ? brandLogo : Logo}
          alt="brand logo"
          className="brand-logo"
        />
        <div className="brand-name text-title">{brandName}</div>
      </motion.a>

      <NavbarItems />

      <motion.div
        initial={NavbarAnimations.signUpSearch.start}
        animate={NavbarAnimations.signUpSearch.end}
        className="buttons-container"
      >
        <SearchBox />
        <button className="primary-button sign-up-button">
          <span>Sign up</span>
          <div className="button-icon">
            <SignUpIcon />
          </div>
        </button>
      </motion.div>
    </div>
  );
};

export default Navbar;
