import React, { useState } from "react";
import ItemCard from "./ItemCard/ItemCard";
import { ReactComponent as NextIcon } from "../../assets/next.svg";
import { ReactComponent as PrevIcon } from "../../assets/prev.svg";

interface CarouselItem {
  title: string;
  description: string;
  price: string;
  background: string;
  image: string;
}

interface Props {
  carouselItems: CarouselItem[];
}

const Carousel: React.FC<Props> = ({ carouselItems }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const screenWidth = window.innerWidth;
  const breakpoint = 768;

  const prevSlideHandler = () => {
    if (activeSlide < 1) return;
    setActiveSlide(activeSlide - 1);
  };

  const nextSlideHandler = () => {
    //if screen width is more than medium
    if (screenWidth > breakpoint) {
      if (activeSlide >= carouselItems.length / 2 - 1) return;

      setActiveSlide(activeSlide + 1);
      return;
    }

    //if screen width is less than medium
    if (activeSlide >= carouselItems.length - 1) return;
    setActiveSlide(activeSlide + 1);
  };

  return (
    <div className="carousel">
      <div className="carousel-title text-title __primary-text-color__">
        Recommended for you
      </div>
      <div className="carousel-body position-relative">
        <div className="slides-container">
          <div className="wrapper" style={{ left: `-${activeSlide * 100}%` }}>
            {carouselItems.map((item, index) => {
              return (
                <ItemCard key={item.background} index={index} cardData={item} />
              );
            })}
          </div>
        </div>

        <div className="control-buttons">
          {activeSlide >= 1 ? (
            <button
              className="prev custom-button __button-bg-color__"
              onClick={() => prevSlideHandler()}
            >
              <PrevIcon />
            </button>
          ) : null}
          <button
            className="next custom-button __button-bg-color__"
            onClick={() => nextSlideHandler()}
          >
            <NextIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
