import React from "react";
import ItemCard from "./ItemCard/ItemCard";
import ModelProduct1 from "../../assets/images/model-product-1.png";
import ModelProduct2 from "../../assets/images/model-product-2.png";

const ItemsCarousel: React.FC = () => {
  const cardsData = [
    {
      title: "alovera cream",
      description: "Moisturising for Inflammation for All Skin Types.",
      price: "115",
      image: ModelProduct1,
    },
    // {
    //   title: "eye makeup remover",
    //   description: `Vegetarian, Gluten-Free, Without animal
    //   ingredients except honey & beeswax`,
    //   price: "130",
    //   image: ModelProduct2,
    // },
  ];

  return (
    <div className="items-carousel d-flex">
      <div className="carousel-title text-title">Recommended for you</div>
      <div className="items-slider">
        <div className="wrapper">
          {cardsData.map((item) => {
            return <ItemCard key={item.title} cardData={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemsCarousel;
