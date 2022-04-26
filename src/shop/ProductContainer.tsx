import React from "react";
import { useParams } from "react-router-dom";
import { getPlant } from "../data";
import styled from "styled-components";
import { getPlants, getMultiplePlants } from "../data";
import ItemCard from "../shared/ItemCard";
import { Link } from "react-router-dom";
import ProductInfo from "./ProductInfo";
import { getArticles, getMultipleArticles } from "../data";

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

const ProductContainer = () => {
  const name = useParams().plantName?.replace(/-/g, " ");
  const plant = name && getPlant(name);
  const plants = getPlants().filter((item) => item !== plant);
  const suggestedPlants = getMultiplePlants(plants, 4);

  const articles = getMultipleArticles(getArticles(), 3);
  return (
    <div style={{ margin: "2rem 8rem" }}>
      <SectionContainer>{plant && <ProductInfo {...plant} />}</SectionContainer>
      <SectionContainer>
        <h2>You might also like</h2>
        <ItemList>
          {suggestedPlants.map((plant) => {
            return (
              <Link
                to={`/shop/${plant.name.replace(/\s/g, "-")}`}
                key={plant.id}
              >
                <ItemCard {...plant} size={"small"} />
              </Link>
            );
          })}
        </ItemList>
      </SectionContainer>
      <SectionContainer>
        <h2>Learn from our blog</h2>
        <ItemList>
          {articles.map((article) => {
            return (
              <Link
                to={`/blog/${article.title.replace(/\s/g, "-")}`}
                key={article.id}
              >
                <img src={article.img} alt={article.title} />
                <p style={{ width: "100%" }}>{article.title}</p>
              </Link>
            );
          })}
        </ItemList>
      </SectionContainer>
    </div>
  );
};

export default ProductContainer;
