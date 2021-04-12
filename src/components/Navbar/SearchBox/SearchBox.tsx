import React, { useState } from "react";
import { ReactComponent as SearchLogo } from "../../../assets/search.svg";

const SearchBox: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="search-box position-relative">
      <div className="input-container">
        <input
          className="search-input custom-input"
          placeholder="Search for"
          value={inputValue}
          onChange={(e) => handleInputValue(e)}
        />
      </div>
      <button
        className="custom-button search-button position-absolute"
        onClick={() => console.log("submitted...")}
      >
        <SearchLogo />
      </button>
    </div>
  );
};

export default SearchBox;
