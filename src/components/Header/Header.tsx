import React, { useState } from "react";
import VideoPanel from "../VideoPanel/VideoPanel";
import { ReactComponent as GlassGraphic } from "../../assets/glass-graphic.svg";
import { ReactComponent as DonutGraphic } from "../../assets/donut.svg";
import { ReactComponent as HalfCircleGraphic } from "../../assets/half-circle.svg";
import { ReactComponent as ExploreIcon } from "../../assets/explore.svg";
import { ReactComponent as PlayButtonIcon } from "../../assets/play-button-icon.svg";
import { ReactComponent as ArrowGraphic } from "../../assets/arrow.svg";
import LeafImage from "../../assets/images/leaf.png";

const Header: React.FC = () => {
  const [showVideoPanel, setShowVideoPanel] = useState(false);

  const closeHandler = () => {
    setShowVideoPanel(false);
  };

  return (
    <div className="header">
      {showVideoPanel && <VideoPanel closeHandler={closeHandler} />}
      <div className="header-container position-relative">
        <div className="graphic-container position-absolute from-top from-right">
          <GlassGraphic />
          <div className="donut-graphic">
            <DonutGraphic />
          </div>
        </div>

        <div className="text-area">
          <div className="half-circles position-absolute from-left">
            <span className="graphic-1">
              <HalfCircleGraphic />
            </span>
            <span className="graphic-2">
              <HalfCircleGraphic />
            </span>
          </div>
          <h1 className="title text-title p-relative">It's all organic here</h1>
          <p className="description text-paragraph p-relative">
            An Organic product is made from materials producted by organic
            agriculture
          </p>

          <div className="buttons-container position-relative d-flex">
            <div className="explore-button">
              <button className=" primary-button">
                <span className="text-cap">explore now</span>
                <div className="button-icon">
                  <ExploreIcon />
                </div>
              </button>
            </div>

            <div className="video-button">
              <button
                className="custom-button d-flex align-items-center"
                onClick={() => setShowVideoPanel(true)}
              >
                <div className="button-icon custom-button d-flex item-center">
                  <PlayButtonIcon />
                </div>
                <span className="text-cap">see video</span>
              </button>
            </div>

            <div className="buttons-graphic position-absolute">
              <ArrowGraphic />
            </div>

            <div className="buttons-graphic-2 position-absolute">
              <img src={LeafImage} alt="leaf" className="graphic-element" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
