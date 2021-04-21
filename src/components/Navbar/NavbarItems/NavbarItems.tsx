import React, { useState } from "react";
import { motion } from "framer-motion";
import NavbarAnimations from "../_navbar_animations";
import SearchBox from "../SearchBox/SearchBox";
import NavbarDropdownItem from "./NavbarItem/NavbarDropdownItem";
import NavbarItem from "./NavbarItem/NavbarItem";

const NavbarItems: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className={`navbar-items position-relative${active ? " active" : ""}`}>
      <motion.div
        initial={NavbarAnimations.dropdownSearch.start}
        animate={NavbarAnimations.dropdownSearch.end}
        className="search-and-dropdown"
      >
        <SearchBox />
        <button
          className="dropdown-button custom-button"
          onClick={() => setActive(!active)}
        >
          <div className="top"></div>
          <div className="middle"></div>
          <div className="bottom"></div>
        </button>
      </motion.div>
      <ul className="items-container">
        <NavbarItem text={"home"} />
        <NavbarDropdownItem
          title="products"
          dropdownItems={[
            { text: "face wash" },
            { text: "makeup remover" },
            { text: "night serom" },
          ]}
        />
        <NavbarItem text={"about"} />
      </ul>
    </div>
  );
};

export default NavbarItems;
