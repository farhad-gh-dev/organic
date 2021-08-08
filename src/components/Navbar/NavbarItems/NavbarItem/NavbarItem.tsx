import React from "react";

interface Props {
  title: string;
  target: any;
}

const NavbarItem: React.FC<Props> = ({ title, target }) => {
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
