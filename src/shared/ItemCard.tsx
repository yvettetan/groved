import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .plant-name {
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
  .plant-price {
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
  scientificName: string;
  price: string;
  size?: "small" | "medium" | "large";
}) => {
  const getDimensions = (size: string | undefined) => {
    switch (size) {
      case "small":
        return { width: "255px", height: "336px" };
      case "medium":
        return { width: "350px", height: "456px" };
      case "large":
        return { width: "445px", height: "576px" };
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
      <h3 className="plant-name">{name}</h3>
      <p className="plant-scientific-name">{scientificName}</p>
      <p className="plant-price">PHP {price}</p>
    </Container>
  );
};

export default ItemCard;
