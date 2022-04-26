import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPlant } from "../data";
import styled from "styled-components";
import { getPlants, getMultiplePlants } from "../data";
import ItemCard from "../shared/ItemCard";
import ProductInfo from "./ProductInfo";

const SectionContainer = styled.section`
  max-width: 80rem;
  margin: 2.5rem auto;
  .plantImg {
    width: 445px;
    height: 576px;
  }
`;

const ItemList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
`;

const ProductContainer: React.FC = (props) => {
  const navigate = useNavigate();
  // const { handle, plantName, kitName } = useParams();
  const name = useParams().plantName?.replace(/-/g, " ");
  const plant = name && getPlant(name);
  const plants = getPlants().filter((item) => item !== plant);
  const suggestedPlants = getMultiplePlants(plants, 4);

  return (
    <div style={{ margin: "2rem 8rem" }}>
      <SectionContainer>{plant && <ProductInfo {...plant} />}</SectionContainer>
      <SectionContainer>
        <h2>You might also like</h2>
        <ItemList>
          {suggestedPlants.map((plant) => {
            return (
              <div
                key={plant.id}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(
                    `/shop/homebud-grove/${plant.name.replace(/\s/g, "-")}`
                  );
                }}
              >
                <ItemCard {...plant} size={"small"} />
              </div>
            );
          })}
        </ItemList>
      </SectionContainer>
    </div>
  );
};

export default ProductContainer;
