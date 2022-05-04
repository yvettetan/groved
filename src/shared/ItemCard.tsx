import React from "react";
import styled from "styled-components";
import { formatCurrency } from "../utils";

const Container = styled.li`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  .item-name {
    text-transform: capitalize;
    margin: 0;
  }
  p {
    margin: 0;
  }
  .plant-scientific-name {
    color: ${(props) => props.theme.color.primaryLight};
  }
  .plant-scientific-name:first-letter {
    text-transform: capitalize;
  }
  .item-price {
    color: ${(props) => props.theme.color.secondary};
    margin-top: 0.5rem;
  }
`;

const ItemImage = styled.img`
  margin-bottom: 1rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const ItemCard = ({
  img,
  name,
  scientificName,
  price,
  size,
}: {
  img: string;
  name: string;
  scientificName?: string;
  price: number;
  size?: "small" | "large";
}) => {
  const getDimensions = (size: string | undefined) => {
    switch (size) {
      case "small":
        return { width: "255px", height: "336px" };
      case "large":
        return { width: "350px", height: "456px" };
    }
  };

  return (
    <Container>
      <ItemImage
        src={img}
        alt={name}
        width={getDimensions(size)?.width}
        height={getDimensions(size)?.height}
      />
      <h3 className="item-name">{name}</h3>
      {scientificName && (
        <p className="plant-scientific-name">{scientificName}</p>
      )}

      <p className="item-price">{formatCurrency(price)}</p>
    </Container>
  );
};

export default ItemCard;
