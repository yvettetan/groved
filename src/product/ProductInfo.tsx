import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PlantInfo } from "../data";
import theme from "../theme";
import Button from "../shared/Button";

const Container = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  margin-top: 10rem;

  .product-img {
    width: 445px;
    height: 635px;
  }

  .product-name {
    margin: 0;
  }

  .product-price {
    color: ${(props) => props.theme.color.secondary};
    font-size: 2rem;
    margin: 0;
  }
  .plant-scientific-name {
    color: ${(props) => props.theme.color.primaryLight};
    margin: 0;
  }
  .plant-scientific-name:first-letter {
    text-transform: capitalize;
  }

  .product-color {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: inline-block;
    border: 3px solid white;
    cursor: pointer;
    margin-right: 0.5rem;
  }
  .selected {
    border: 2px solid white;
    outline: 1px solid black;
  }
`;

const InfoContainer = styled.div`
  padding: 1.5rem;
  width: 100%;
  .product-info {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const ButtonContainer = styled.div`
  div {
    margin: 0.5rem 0;
  }
`;

const getImagePath = (plantName: string, color: string) => {
  return `/assets/images/plants/${plantName}/${plantName}-${color}.jpeg`;
};

const ProductInfo: React.FC<PlantInfo> = (props) => {
  const plantName = props.name.replace(/\s/g, "-");
  const potColors = theme.potColor;
  const defaultColor = Object.keys(potColors)[0];
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [imageSrc, setImageSrc] = useState(
    getImagePath(plantName, selectedColor)
  );

  useEffect(() => {
    setImageSrc(getImagePath(plantName, defaultColor!));
    setSelectedColor(defaultColor);
  }, [plantName, defaultColor]);

  const changeProductColor = (e: React.MouseEvent<HTMLElement>) => {
    const color = e.currentTarget.style.backgroundColor;
    const newColorName = Object.keys(potColors).find(
      (key) => potColors[key] === color
    );
    setSelectedColor(newColorName!);
    setImageSrc(getImagePath(plantName, newColorName!));
  };

  const colorOptions = Object.keys(potColors).map((key, i) => (
    <button
      key={i}
      onClick={(e) => changeProductColor(e)}
      className={`product-color ${key === selectedColor ? "selected" : ""}`}
      style={{
        backgroundColor: `${potColors[key]}`,
      }}
    ></button>
  ));

  return (
    <Container>
      <img className="product-img" src={imageSrc} alt={props.name} />
      <InfoContainer>
        <div>
          <div className="product-info">
            <div>
              <h2 className="product-name">{props.name}</h2>
              {props.scientificName && (
                <p className="plant-scientific-name">{props.scientificName}</p>
              )}
            </div>
            <p className="product-price">PHP {props.price}</p>
          </div>
          <p>{props.description}</p>
        </div>
        {props.children}
        {props.scientificName && (
          <div>
            <span>PLANT POT</span>
            <hr />
            <p>Color: {selectedColor}</p>
            {colorOptions}
          </div>
        )}
        <ButtonContainer>
          <Button color="primary">Add to cart</Button>
          <Button color="secondary">Buy now</Button>
        </ButtonContainer>
      </InfoContainer>
    </Container>
  );
};

export default ProductInfo;
