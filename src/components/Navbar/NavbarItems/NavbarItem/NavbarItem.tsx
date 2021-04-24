import React from "react";
import { _NavbarLink_ } from "../../_navbar-types";

const NavbarItem: React.FC<any> = ({ title, target }) => {
  return (
    <li>
      <a href={target} className="nav-item custom-link">
        {title}
      </a>
    </li>
  );
};

export default NavbarItem;
