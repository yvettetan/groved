import React from "react";
import ItemCard from "../shared/ItemCard";
import { getPlants } from "../data";
import { Link } from "react-router-dom";

import Button from "../shared/Button";
import "./ProductsContainer.scss";

const ProductsContainer = () => {
  let plants = getPlants();

  return (
    <div className="products-container">
      <h1>Homebud Grove: Perfect home plants</h1>
      <p className="description">
        All our plants are guaranteed to arrive happy & healthy or we’ll replace
        them for free. It’s our customer happiness guarantee!
      </p>
      <div className="products-list">
        {plants.map((plant) => {
          return (
            <div key={plant.id}>
              <ItemCard {...plant} size={"small"} />
              <Link to={`${plant.name.replace(/\s/g, "-")}`} key={plant.id}>
                <Button color="primary">View Details</Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsContainer;
