import React, { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import NavbarDropdownItem from "./NavbarItem/NavbarDropdownItem";
import NavbarItem from "./NavbarItem/NavbarItem";

const NavbarItems: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className={`navbar-items position-relative${active ? " active" : ""}`}>
      <div className="search-and-dropdown">
        <SearchBox />
        <button
          className="dropdown-button custom-button"
          onClick={() => setActive(!active)}
        >
          <div className="top"></div>
          <div className="middle"></div>
          <div className="bottom"></div>
        </button>
      </div>
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
