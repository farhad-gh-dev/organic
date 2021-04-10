import React, { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import NavbarItem from "./NavbarItem/NavbarItem";

const NavbarItems: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="navbar-items position-relative">
      <div className="search-and-dropdown">
        <SearchBox />
        <button
          className={`dropdown-button custom-button${active ? " active" : ""}`}
          onClick={() => setActive(!active)}
        >
          <div className="top"></div>
          <div className="middle"></div>
          <div className="bottom"></div>
        </button>
      </div>
      <ul className="items-container">
        <NavbarItem text={"home"} />
        <NavbarItem
          text={"products"}
          dropdown={[{ text: "facewash", link: "#" }]}
        />
        <NavbarItem text={"about"} />
      </ul>
    </div>
  );
};

export default NavbarItems;
