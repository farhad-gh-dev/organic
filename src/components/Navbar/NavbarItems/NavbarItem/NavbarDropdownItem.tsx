import React, { useState } from "react";
import { ReactComponent as DropdownIcon } from "../../../../assets/dropdown.svg";

const NavbarDropdownItem: React.FC<any> = ({ title, target }) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <li className="position-relative">
      <button
        className="nav-item custom-button cursor-pointer __primary-text-color__ __navbar-item-bg-color__"
        onClick={() => setActive(!active)}
      >
        <div className="d-flex align-items-center">
          {title}
          <span className="dropdown-icon">
            <DropdownIcon />
          </span>
        </div>
      </button>
      <div className={`dropdown-container${active ? " active" : ""}`}>
        {target
          ? target.map((item: any) => {
              return (
                <a
                  href={item.target}
                  key={item.title}
                  className="nav-item custom-link __primary-text-color__ __navbar-dropdown-bg-color__"
                >
                  {item.title}
                </a>
              );
            })
          : null}
      </div>
    </li>
  );
};

export default NavbarDropdownItem;
