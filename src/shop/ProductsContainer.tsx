import React from "react";
import ItemCard from "../shared/ItemCard";
import { getPlants } from "../data";
import { Link } from "react-router-dom";

const ProductsContainer = () => {
  let plants = getPlants();
  return (
    <div>
      {plants.map((plant) => {
        return (
          <Link to={`${plant.name.replace(/\s/g, "-")}`} key={plant.id}>
            <ItemCard {...plant} size={"small"} />
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsContainer;
