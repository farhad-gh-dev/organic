import React from "react";
import { _NavbarData_ } from "./_navbar-types";
import { ReactComponent as SignUpIcon } from "../../assets/sign-up.svg";
import NavbarItems from "./NavbarItems/NavbarItems";
import SearchBox from "./SearchBox/SearchBox";

const Navbar: React.FC<_NavbarData_> = ({
  brandName,
  brandLogo,
  items,
  signUpPage,
}) => {
  return (
    <div className="navbar d-flex justify-space-between align-items-center">
      {brandName && brandLogo ? (
        <a
          href="#"
          className="brand-container custom-link d-flex align-items-center"
        >
          <img src={brandLogo} alt="brand logo" className="brand-logo" />
          <div className="brand-name text-title __brand-name-color__">
            {brandName}
          </div>
        </a>
      ) : null}

      <NavbarItems itemsData={items} />

      <div className="buttons-container">
        <SearchBox />
        <a
          href={signUpPage}
          className="sign-up-button custom-link primary-button __button-bg-color__ __button-text-color__"
        >
          <span>Sign up</span>
          <div className="button-icon">
            <SignUpIcon />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
