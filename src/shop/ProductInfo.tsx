import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import theme from "../theme";
import Tabs from "../shared/Tabs";
import { formatCurrency } from "../utils";
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

const InfoHeader = styled.span`
  font-family: ${theme.fontFamily.headline};
  color: ${theme.color.primaryLight};
`;

const HorizontalLine = styled.hr`
  margin: 0;
  height: 1px;
  background-color: ${(props) => props.theme.color.gray};
  border: none;
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

const CheckoutContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
`;

const CounterButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.color.light};
  cursor: "pointer";
  padding: 1rem;
`;

const getImagePath = (plantName: string, color: string) => {
  return `/assets/images/plants/${plantName}/${plantName}-${color}.jpeg`;
};

interface PropInfo {
  id: number;
  name: string;
  scientificName: string;
  description: string;
  price: number;
  img: string;
  care: { sun: string; water: string; other: string };
  handleAddToCart: (color: string, quantity: number) => void;
}

const ProductInfo: React.FC<PropInfo> = (props) => {
  const plantName = props.name.replace(/\s/g, "-");
  const potColors = theme.potColor;
  const defaultColor = Object.keys(potColors)[0];
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [imageSrc, setImageSrc] = useState(
    getImagePath(plantName, selectedColor)
  );
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setImageSrc(getImagePath(plantName, selectedColor));
  }, [plantName, selectedColor]);

  useEffect(() => {
    setSelectedColor(defaultColor);
  }, [defaultColor]);

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

  const tabContent = [
    {
      title: "Plant Information",
      body: props.description,
      isContentList: false,
    },
    {
      title: "Plant Care",
      body: props.care!,
      isContentList: true,
    },
  ];

  const decrementRef = useRef<HTMLButtonElement>(null);
  const incrementRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (quantity <= 1) {
      decrementRef.current!.style.cursor = "not-allowed";
    }
  }, [quantity]);

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
            <p className="product-price">{formatCurrency(props.price)}</p>
          </div>
          <p>{props.description}</p>
        </div>
        {props.children}
        {props.scientificName && (
          <>
            <div>
              <InfoHeader>PLANT POT</InfoHeader>
              <HorizontalLine />
              <p style={{ color: `${theme.color.dark}` }}>
                Color:{" "}
                <em
                  style={{
                    textTransform: "capitalize",
                    color: `${theme.color.primaryLight}`,
                  }}
                >
                  {selectedColor}
                </em>
              </p>
              {colorOptions}
              <br />
              <br />
            </div>
            <Tabs content={tabContent} />
          </>
        )}
        <br />
        <InfoHeader>QUANTITY (maximum 20)</InfoHeader>
        <HorizontalLine />
        <CheckoutContainer>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "1rem",
                border: `1px solid ${theme.color.primary}`,
                height: "100%",
              }}
            >
              <CounterButton
                ref={decrementRef}
                onClick={(e) => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                    incrementRef.current!.style.cursor = "pointer";
                  }
                  if (quantity <= 1) {
                    e.currentTarget.style.cursor = "not-allowed";
                  }
                }}
                disabled={quantity <= 1 ? true : false}
              >
                -
              </CounterButton>
              <span
                style={{
                  padding: ".5rem 3rem",
                  width: "1rem",
                }}
              >
                {quantity}
              </span>
              <CounterButton
                onClick={(e) => {
                  if (quantity < 20) {
                    setQuantity(quantity + 1);
                  }
                  decrementRef.current!.style.cursor = "pointer";
                  if (quantity >= 19) {
                    e.currentTarget.style.cursor = "not-allowed";
                  }
                }}
                ref={incrementRef}
                disabled={quantity >= 20 ? true : false}
              >
                +
              </CounterButton>
            </div>
          </div>
          <Button
            color="primary"
            width="12rem"
            onClick={() => {
              setQuantity(1);
              props.handleAddToCart(selectedColor, quantity);
            }}
          >{`Add to cart -  ${formatCurrency(quantity * props.price)}`}</Button>
        </CheckoutContainer>
      </InfoContainer>
    </Container>
  );
};

export default ProductInfo;
