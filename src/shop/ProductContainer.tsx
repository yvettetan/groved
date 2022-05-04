import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getPlants, getItem, getGardenKits } from "../data";
import ItemCard from "../shared/ItemCard";
import ProductInfo from "./ProductInfo";
import { addToCart } from "../redux/reducers/cart";
import { useDispatch } from "react-redux";

const SectionContainer = styled.section`
  margin: 4rem auto;
  max-width: 1200px;
  .plantImg {
    width: 445px;
    height: 576px;
  }
`;
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
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProductContainer: React.FC = (props) => {
  const navigate = useNavigate();
  const { plantName, kitName } = useParams();
  const itemName = (plantName || kitName)?.replace(/-/g, " ");
  const item = getItem(itemName!);
  const suggestedItems = [...getPlants(), ...getGardenKits()]
    .filter((product) => product !== item)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  const dispatch = useDispatch();

  const handleAddToCart = (
    imageSrc: string,
    quantity: number,
    color?: string
  ) => {
    item &&
      dispatch(
        addToCart({
          id: item.id,
          name: item.name,
          quantity: quantity,
          image: imageSrc,
          price: item.price,
          color: color,
        })
      );
  };
  return (
    <SectionContainer>
      <div>
        {item && <ProductInfo {...item} handleAddToCart={handleAddToCart} />}
      </div>
      <h2 style={{ marginLeft: "2rem" }}>You might also like</h2>
      <ItemList>
        {suggestedItems.map((item) => {
          return (
            <div
              key={item.id}
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(
                  `/shop/homebud-grove/${item.name.replace(/\s/g, "-")}`
                );
              }}
            >
              <ItemCard {...item} size={"small"} />
            </div>
          );
        })}
      </ItemList>
    </SectionContainer>
  );
};

export default ProductContainer;
