import React, { useState } from "react";
import { ReactComponent as DropdownIcon } from "../../../../assets/dropdown.svg";

interface Dropdown {
  text: string;
  link: string;
}

interface Props {
  text: string;
  dropdown?: Dropdown[];
}

const NavbarItem: React.FC<Props> = ({ text, dropdown }) => {
  const [active, setActive] = useState<boolean>(false);

  if (dropdown)
    return (
      <li className="position-relative">
        <div className="nav-item" onClick={() => setActive(!active)}>
          <div className="d-flex align-items-center">
            {text}
            <span className="dropdown-icon">
              <DropdownIcon />
            </span>
          </div>
        </div>
        <div className={`dropdown-container${active ? " active" : ""}`}>
          <div className="nav-item">face wash</div>
          <div className="nav-item">makeup removers</div>
          <div className="nav-item">night serom</div>
        </div>
      </li>
    );

  return <li className="nav-item">{text}</li>;
};

export default NavbarItem;
