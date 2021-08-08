import React, { useState } from "react";
import { _NavbarDropdown_, _NavbarLink_ } from "../_navbar-types";
import SearchBox from "../SearchBox/SearchBox";
import NavbarDropdownItem from "./NavbarItem/NavbarDropdownItem";
import NavbarItem from "./NavbarItem/NavbarItem";
import "./navbar-items.scss";

interface Props {
  itemsData?: (_NavbarLink_ | _NavbarDropdown_)[];
}

const NavbarItems: React.FC<Props> = ({ itemsData }) => {
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
      {itemsData ? (
        <ul className="items-container">
          {itemsData.map((itemData) => {
            if (itemData.type === "link") return <NavbarItem {...itemData} />;
            if (itemData.type === "dropdown")
              return <NavbarDropdownItem {...itemData} />;
            return;
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default NavbarItems;
