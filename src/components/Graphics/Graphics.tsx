import React from "react";
import { ReactComponent as Graphic1 } from "../../assets/graphic-1.svg";
import { ReactComponent as Graphic2 } from "../../assets/quarter-circle.svg";
import { ReactComponent as Graphic3 } from "../../assets/donut.svg";

const Graphics: React.FC = () => {
  return (
    <div className="graphics">
      <div className="graphic-1">
        <Graphic1 />
      </div>
      <div className="graphic-2">
        <Graphic2 />
      </div>

      <div className="graphic-3">
        <Graphic3 />
      </div>
    </div>
  );
};

export default Graphics;
