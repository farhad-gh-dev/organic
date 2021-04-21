import React from "react";
import { motion } from "framer-motion";
import NavbarAnimations from "../../_navbar_animations";

interface Props {
  text: string;
}

const NavbarItem: React.FC<Props> = ({ text }) => {
  return (
    <motion.li
      initial={NavbarAnimations.navbarItems.start}
      animate={NavbarAnimations.navbarItems.end}
    >
      <a href="#" className="nav-item custom-link">
        {text}
      </a>
    </motion.li>
  );
};

export default NavbarItem;
