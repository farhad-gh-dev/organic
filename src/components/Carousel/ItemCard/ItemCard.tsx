import React from "react";
import { ReactComponent as QuarterCircle } from "../../../assets/quarter-circle.svg";

interface Props {
  cardData: {
    title: string;
    description: string;
    price: string;
    background: string;
    image: string;
  };
}

const ItemCard: React.FC<Props> = ({ cardData }) => {
  return (
    <div className="item-card d-flex align-items-center">
      <div
        className={`card-image position-relative d-flex ${cardData.background}`}
      >
        <QuarterCircle />
        <img
          src={cardData.image}
          alt="alovera cream"
          className="position-absolute"
        />
      </div>
      <div className="text-area">
        <h3 className="card-title text-title text-cap">{cardData.title}</h3>
        <p className="card-description text-paragraph">
          {cardData.description}
        </p>
        <div className="card-price text-title">${cardData.price}</div>
      </div>
    </div>
  );
};

export default ItemCard;
