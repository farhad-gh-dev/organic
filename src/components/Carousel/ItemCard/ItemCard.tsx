import React from "react";
import { ReactComponent as QuarterCircle } from "../../../assets/quarter-circle.svg";

interface Props {
  index: number;
  cardData: {
    title: string;
    description: string;
    price: string;
    background: string;
    image: string;
  };
}

const ItemCard: React.FC<Props> = ({ index, cardData }) => {
  return (
    <div className="item-card d-flex align-items-center">
      <div
        className={`card-image position-relative d-flex ${
          index % 2 === 0 ? "__svg-secondary-color__" : "__svg-primary-color__"
        }`}
      >
        <QuarterCircle />
        <img
          src={cardData.image}
          alt="alovera cream"
          className="position-absolute"
        />
      </div>
      <div className="text-area">
        <h3 className="card-title text-title text-cap __primary-text-color__">
          {cardData.title}
        </h3>
        <p className="card-description text-paragraph __secondary-text-color__">
          {cardData.description}
        </p>
        <div className="card-price text-title __primary-text-color__">
          ${cardData.price}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
