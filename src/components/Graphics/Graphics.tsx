import React from "react";
import { ReactComponent as Graphic1 } from "../../assets/graphic-1.svg";

const Graphics: React.FC = () => {
  return (
    <div className="graphics">
      <div className="graphic-1">
        <Graphic1 />
      </div>
    </div>
  );
};

export default Graphics;
