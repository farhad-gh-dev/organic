import React, { ChangeEvent, useState } from "react";
import TeaserVideo from "../../assets/videos/teaser.mp4";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import { ReactComponent as PlayIcon } from "../../assets/play.svg";
import { ReactComponent as PauseIcon } from "../../assets/pause.svg";
import { ReactComponent as FullscreenInIcon } from "../../assets/fullscreen-in.svg";
import { ReactComponent as UnmuteIcon } from "../../assets/unmute.svg";
import { ReactComponent as MuteIcon } from "../../assets/mute.svg";

interface Props {
  videoSrc?: string;
  closeHandler: () => void;
}

const VideoPanel: React.FC<Props> = ({ videoSrc, closeHandler }) => {
  const [videoAttributes, setVideoAttributes] = useState({
    paused: false,
    muted: false,
    volume: "1",
  });

  const videoRef = React.useRef<HTMLVideoElement | any>(null);

  const changePlayStatus = () => {
    if (!videoRef.current?.paused) {
      videoRef.current?.pause();
      return;
    }

    videoRef.current?.play();
  };

  const onPlayHandler = () => {
    setVideoAttributes({
      ...videoAttributes,
      paused: false,
    });
  };

  const onPauseHandler = () => {
    setVideoAttributes({
      ...videoAttributes,
      paused: true,
    });
  };

  const fullscreenHandler = () => {
    videoRef.current?.requestFullscreen();
  };

  const muteHandler = () => {
    if (videoAttributes.muted) {
      setVideoAttributes({
        ...videoAttributes,
        muted: false,
        volume: videoRef.current.volume,
      });
      return;
    }
    setVideoAttributes({
      ...videoAttributes,
      muted: true,
      volume: "0",
    });
  };

  const volumeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    videoRef.current.volume = e.target.value;
    setVideoAttributes({
      ...videoAttributes,
      volume: e.target.value,
    });
  };

  return (
    <div className="video-panel cover-page z-index-fixed d-flex flex-column justify-content-center">
      <div className="video-container position-relative">
        <video
          autoPlay
          ref={videoRef}
          {...videoAttributes}
          onClick={changePlayStatus}
          onPause={onPlayHandler}
          onPlay={onPauseHandler}
          className="position-absolute to-center"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="control-buttons cover-parent">
          <button
            onClick={changePlayStatus}
            className="play-button custom-button position-absolute to-center"
          >
            {videoAttributes.paused ? <PauseIcon /> : <PlayIcon />}
          </button>
          <button
            onClick={fullscreenHandler}
            className="fullscreen-button custom-button position-absolute"
          >
            <FullscreenInIcon />
          </button>
          <div className="volume-container position-absolute d-flex align-items-center">
            <button onClick={muteHandler} className="mute-button custom-button">
              {videoAttributes.muted ? <MuteIcon /> : <UnmuteIcon />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              value={videoAttributes.volume}
              onChange={(e) => volumeHandler(e)}
              step="0.05"
              className="custom-range-input"
            />
          </div>
        </div>
      </div>
      <button
        onClick={closeHandler}
        className="close-button custom-button position-absolute"
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export default VideoPanel;
