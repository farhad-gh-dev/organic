import React, { useState } from "react";
import { motion } from "framer-motion";
import NavbarAnimations from "../../_navbar_animations";
import { ReactComponent as DropdownIcon } from "../../../../assets/dropdown.svg";

interface DropdownItem {
  text: string;
  link?: string;
}

interface Props {
  title: string;
  dropdownItems?: DropdownItem[];
}

const NavbarDropdownItem: React.FC<Props> = ({ title, dropdownItems }) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <li className="position-relative">
      <motion.button
        initial={NavbarAnimations.navbarItems.start}
        animate={NavbarAnimations.navbarItems.end}
        className="nav-item custom-button cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <div className="d-flex align-items-center">
          {title}
          <span className="dropdown-icon">
            <DropdownIcon />
          </span>
        </div>
      </motion.button>
      <div className={`dropdown-container${active ? " active" : ""}`}>
        {dropdownItems
          ? dropdownItems.map((item) => {
              return (
                <div key={item.text} className="nav-item">
                  {item.text}
                </div>
              );
            })
          : null}
      </div>
    </li>
  );
};

export default NavbarDropdownItem;
