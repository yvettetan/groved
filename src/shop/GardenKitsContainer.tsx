import React, { useEffect } from "react";
import ItemCard from "../shared/ItemCard";
import { getGardenKits } from "../data";
import { Link } from "react-router-dom";
import Button from "../shared/Button";
import "./ProductsContainer.scss";

const ProductsContainer = () => {
  // useEffect(() => {
  //   console.log(location);
  // }, [location]);

  let gardenKits = getGardenKits();
  return (
    <div className="products-container">
      <h1>Garden Kits: Green thumb starter kit</h1>
      <p className="description">
        All our plants are guaranteed to arrive happy & healthy or we’ll replace
        them for free. It’s our customer happiness guarantee!
      </p>
      <div className="products-list">
        {gardenKits.map((kit) => {
          return (
            <div key={kit.id}>
              <ItemCard {...kit} size={"small"} />
              <Link to={`${kit.name.replace(/\s/g, "-")}`} key={kit.id}>
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
