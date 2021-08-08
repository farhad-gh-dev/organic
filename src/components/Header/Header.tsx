import React, { useState } from "react";
import { _HeaderData_ } from "./_header-types";
import VideoPanel from "../VideoPanel/VideoPanel";
import { ReactComponent as DonutGraphic } from "../../assets/donut.svg";
import { ReactComponent as HalfCircleGraphic } from "../../assets/half-circle.svg";
import { ReactComponent as ExploreIcon } from "../../assets/explore.svg";
import { ReactComponent as PlayButtonIcon } from "../../assets/play-button-icon.svg";
import { ReactComponent as ArrowGraphic } from "../../assets/arrow.svg";
import "./header.scss";

const Header: React.FC<_HeaderData_> = ({
  mainGraphicSrc,
  title,
  description,
  videoSrc,
  GraphicElement,
}) => {
  const [showVideoPanel, setShowVideoPanel] = useState(false);

  const closeHandler = () => {
    setShowVideoPanel(false);
  };

  return (
    <div className="header">
      {showVideoPanel && (
        <VideoPanel videoSrc={videoSrc} closeHandler={closeHandler} />
      )}
      <div className="header-container position-relative">
        <div className="graphic-container position-absolute from-top from-right">
          <img src={mainGraphicSrc} alt="header image" />
          <div className="donut-graphic __donut-color__">
            <DonutGraphic />
          </div>
        </div>

        <div className="text-area">
          <div className="half-circles position-absolute from-left">
            <span className="graphic-1 __svg-primary-color__">
              <HalfCircleGraphic />
            </span>
            <span className="graphic-2 __svg-secondary-color__">
              <HalfCircleGraphic />
            </span>
          </div>
          <h1 className="title text-title p-relative __primary-text-color__">
            {title}
          </h1>
          <p className="description text-paragraph p-relative __secondary-text-color__">
            {description}
          </p>

          <div className="buttons-container position-relative d-flex">
            <div className="explore-button">
              <button className="primary-button __button-bg-color__ __button-text-color__">
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
                <div className="button-icon custom-button d-flex item-center __primary-bg-color__ __primary-text-color__">
                  <PlayButtonIcon />
                </div>
                <span className="text-cap __primary-text-color__">
                  see video
                </span>
              </button>
            </div>

            <div className="buttons-graphic position-absolute __arrow-color__">
              <ArrowGraphic />
            </div>

            <div className="buttons-graphic-2 position-absolute">
              <img
                src={GraphicElement}
                alt="graphic element"
                className="graphic-element"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
