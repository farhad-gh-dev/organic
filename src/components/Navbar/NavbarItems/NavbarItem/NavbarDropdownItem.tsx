import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../../../redux/actions";
import { ReactComponent as DropdownIcon } from "../../../../assets/dropdown.svg";

const NavbarDropdownItem: React.FC<any> = ({ title, target }) => {
  const [active, setActive] = useState<boolean>(false);
  const dispatch = useDispatch();

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
          ? target.map((title: string) => {
              return (
                <button
                  key={title}
                  onClick={() => dispatch(changeTheme(title.replace(" ", "-")))}
                  className="nav-item custom-button __primary-text-color__ __navbar-dropdown-bg-color__"
                >
                  {title}
                </button>
              );
            })
          : null}
      </div>
    </li>
  );
};

export default NavbarDropdownItem;
