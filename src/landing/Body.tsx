import React from "react";
import ItemCard from "../shared/ItemCard";
import styled from "styled-components";
import Button from "../shared/Button";
import { getPlants, getMultiplePlants } from "../data";
import { Link } from "react-router-dom";

const ItemList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  gap: 30px;
`;

const SectionContainer = styled.section`
  margin-top: 2.5rem;
  max-width: 80rem;
  margin: 0 auto;

  .collections {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    /* gap: 0px 0px; */
    grid-auto-flow: row;
    grid-template-areas:
      ". ."
      ". .";
    justify-items: space-between;
    align-items: center;
    text-align: center;

    h3 {
      margin: 0;
    }

    p {
      color: ${(props) => props.theme.color.primaryLight};
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;
    }
  }
`;

const Body = () => {
  let plants = getMultiplePlants(getPlants(), 3);
  return (
    <div style={{ margin: "2rem 10rem" }}>
      <SectionContainer>
        <h2>Popular Plant Picks</h2>
        <ItemList>
          {plants.map((plant) => {
            return (
              <Link
                to={`/shop/homebud-grove/${plant.name.replace(/\s/g, "-")}`}
                key={plant.id}
              >
                <ItemCard {...plant} size={"large"} />
              </Link>
            );
          })}
        </ItemList>
      </SectionContainer>
      <SectionContainer>
        <h2>Collections</h2>
        <div className="collections">
          <img src={"/assets/images/plants/plant-trio.png"} alt="plant trio" />
          <div style={{ maxWidth: "15rem", margin: "0 auto" }}>
            <h3>Homebud grove</h3>
            <p>Perfect home plants</p>
            <Link to={"/shop/homebud-grove"}>
              <Button color="secondary">View collection</Button>
            </Link>
          </div>
          <div style={{ maxWidth: "15rem", margin: "0 auto" }}>
            <h3>Garden kits</h3>
            <p>Green thumb starter kit</p>
            <Link to={"/shop/garden-kits"}>
              <Button color="secondary">View collection</Button>
            </Link>
          </div>
          <img src={"/assets/images/garden-kit.png"} alt="garden kit" />
        </div>
      </SectionContainer>
    </div>
  );
};

export default Body;
