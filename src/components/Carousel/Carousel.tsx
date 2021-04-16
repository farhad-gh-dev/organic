import React, { useState } from "react";
import ItemCard from "./ItemCard/ItemCard";
import { ReactComponent as NextIcon } from "../../assets/next.svg";
import { ReactComponent as PrevIcon } from "../../assets/prev.svg";
import ModelProduct1 from "../../assets/images/model-product-1.png";
import ModelProduct2 from "../../assets/images/model-product-2.png";

const Carousel: React.FC = () => {
  const cardsData = [
    {
      title: "alovera cream",
      description: "Moisturising for Inflammation for All Skin Types.",
      price: "115",
      background: "light",
      image: ModelProduct1,
    },
    {
      title: "eye makeup remover",
      description: `Vegetarian, Gluten-Free, Without animal
      ingredients except honey & beeswax`,
      price: "130",
      background: "dark",
      image: ModelProduct2,
    },
    {
      title: "alovera cream",
      description: "Moisturising for Inflammation for All Skin Types.",
      price: "115",
      background: "light",
      image: ModelProduct1,
    },
    {
      title: "eye makeup remover",
      description: `Vegetarian, Gluten-Free, Without animal
      ingredients except honey & beeswax`,
      price: "130",
      background: "dark",
      image: ModelProduct2,
    },
  ];

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
      if (activeSlide >= cardsData.length / 2 - 1) return;

      setActiveSlide(activeSlide + 1);
      return;
    }

    //if screen width is less than medium
    if (activeSlide >= cardsData.length - 1) return;
    setActiveSlide(activeSlide + 1);
  };

  return (
    <div className="carousel d-flex">
      <div className="carousel-title text-title">Recommended for you</div>
      <div className="carousel-body position-relative d-flex">
        <div className="slides-container">
          <div className="wrapper" style={{ left: `-${activeSlide * 100}%` }}>
            {cardsData.map((item) => {
              return <ItemCard key={item.title} cardData={item} />;
            })}
          </div>
        </div>

        <div className="control-buttons">
          {activeSlide >= 1 ? (
            <button
              className="prev custom-button"
              onClick={() => prevSlideHandler()}
            >
              <PrevIcon />
            </button>
          ) : null}
          <button
            className="next custom-button"
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
