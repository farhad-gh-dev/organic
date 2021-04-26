import React from "react";
import { ReactComponent as TwoLeafs } from "../../assets/two-leafs.svg";
import { ReactComponent as QuarterCircle } from "../../assets/quarter-circle.svg";
import { ReactComponent as Donut } from "../../assets/donut.svg";

const Graphics: React.FC = () => {
  return (
    <div className="graphics">
      <div className="two-leafs __two-leafs-color__">
        <TwoLeafs />
      </div>
      <div className="quarter-circle __svg-primary-color__">
        <QuarterCircle />
      </div>

      <div className="donut __donut-color__">
        <Donut />
      </div>
    </div>
  );
};

export default Graphics;
