import React from "react";
import "./loading.scss";

interface Props {
  isActive: boolean;
}

const Loading: React.FC<Props> = ({ isActive = false }) => {
  return (
    <div className={`theme-loading${isActive ? " active" : ""}`}>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
      <div className="loading-text">Changing The Theme</div>
    </div>
  );
};

export default Loading;
