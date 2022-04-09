import React from "react";
import ItemCard from "../shared/ItemCard";
import trio from "../assets/images/plants/plant-trio.png";
import kit from "../assets/images/garden-kit.png";
import styled from "styled-components";
import Button from "../shared/Button";
import { getPlants, getMultiplePlants } from "../data";
import { Link } from "react-router-dom";

const ItemList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  gap: 30px;
`;

const SectionContainer = styled.section`
  margin-top: 2.5rem;

  .collections {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      ". ."
      ". .";
    justify-items: center;
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
              <Link to={`/plants/${plant.name.replace(/\s/g, "-")}`}>
                <ItemCard
                  key={plant.id}
                  img={plant.img}
                  name={plant.name}
                  scientificName={plant.scientificName}
                  price={plant.price}
                  size={"medium"}
                />
              </Link>
            );
          })}
        </ItemList>
      </SectionContainer>
      <SectionContainer>
        <h2>Collections</h2>
        <div className="collections">
          <img src={trio} alt="plant trio" />
          <div>
            <h3>Homebud grove</h3>
            <p>Perfect home plants</p>
            <Button color="secondary">View collection</Button>
          </div>
          <div>
            <h3>Garden kits</h3>
            <p>Green thumb starter kit</p>
            <Button color="secondary">View collection</Button>
          </div>
          <img src={kit} alt="garden kit" />
        </div>
      </SectionContainer>
    </div>
  );
};

export default Body;
