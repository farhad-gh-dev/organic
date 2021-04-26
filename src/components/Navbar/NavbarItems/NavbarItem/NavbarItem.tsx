import React from "react";
import { _NavbarLink_ } from "../../_navbar-types";

const NavbarItem: React.FC<any> = ({ title, target }) => {
  return (
    <li>
      <a
        href={target}
        className="nav-item custom-link __primary-text-color__ __navbar-item-bg-color__"
      >
        {title}
      </a>
    </li>
  );
};

export default NavbarItem;
