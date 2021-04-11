import React from "react";

interface Props {
  text: string;
}

const NavbarItem: React.FC<Props> = ({ text }) => {
  return (
    <li>
      <div className="nav-item">{text}</div>
    </li>
  );
};

export default NavbarItem;
