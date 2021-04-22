import React from "react";

interface Props {
  text: string;
}

const NavbarItem: React.FC<Props> = ({ text }) => {
  return (
    <li>
      <a href="#" className="nav-item custom-link">
        {text}
      </a>
    </li>
  );
};

export default NavbarItem;
