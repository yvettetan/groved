import React from "react";
import ItemCard from "../shared/ItemCard";
import styled from "styled-components";
import Button from "../shared/Button";
import { getPlants, getMultiplePlants } from "../data";
import { Link } from "react-router-dom";

const ItemList = styled.ul`
  padding: 0;
  display: grid;
  justify-items: center;
  margin-top: 2rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SectionContainer = styled.section`
  margin: 4rem auto;
  max-width: 1200px;

  h2 {
    padding-left: 5rem;
  }

  .collections {
    display: grid;

    img {
      justify-self: center;
    }

    .collection-info {
      padding: 2rem;
      margin: 0 auto;
      text-align: center;
    }
    .collection-info:nth-of-type(2) {
      order: 1;
    }

    button {
    }

    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-auto-flow: row;
      grid-template-areas:
        ". ."
        ". .";
      align-items: center;

      .collection-info {
        max-width: 15rem;
        margin: 0 auto;
        align-self: center;

        h3 {
          margin: 0;
        }

        p {
          color: ${(props) => props.theme.color.primaryLight};
          margin-top: 0.5rem;
          margin-bottom: 1.5rem;
        }
      }
      .collection-info:nth-of-type(2) {
        order: 0;
      }
    }
  }
`;

const Body = () => {
  let plants = getMultiplePlants(getPlants(), 3);
  return (
    <div>
      <SectionContainer>
        <h2>Popular Plant Picks</h2>
        <ItemList>
          {plants.map((plant) => {
            return (
              <Link
                to={`/shop/homebud-grove/${plant.name.replace(/\s/g, "-")}`}
                key={plant.id}
              >
                <ItemCard {...plant} size={"small"} />
              </Link>
            );
          })}
        </ItemList>
      </SectionContainer>
      <SectionContainer>
        <h2>Collections</h2>
        <div className="collections">
          <img src={"/assets/images/plants/plant-trio.png"} alt="plant trio" />
          <div className="collection-info">
            <h3>Homebud grove</h3>
            <p>Perfect home plants</p>
            <Link to={"/shop/homebud-grove"}>
              <Button color="secondary">View collection</Button>
            </Link>
          </div>
          <div className="collection-info">
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
