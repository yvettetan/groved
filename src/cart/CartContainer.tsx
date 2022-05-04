import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../hooks";
import { formatCurrency } from "../utils";
import Button from "../shared/Button";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  CartState,
} from "../redux/reducers/cart";
import { connect } from "react-redux";
import { RootState } from "../store";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 8rem auto 10rem auto;
  max-width: 1200px;
  position: relative;

  h1,
  .checkout,
  .empty-cart {
    margin: 0 auto;
    padding: 0 2rem;
  }
  .itemContainer {
    border: 2px solid ${(props) => props.theme.color.primary};
    margin: 2rem;
    padding: 1rem;
    align-items: center;
    display: flex;
  }
  .item-info-container {
    margin-left: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    @media screen and (min-width: 780px) {
      flex-direction: row;
      padding: 0 1rem;
      margin: 0 auto;
      width: 100%;
      justify-content: space-around;
      align-items: center;
    }
    .trash {
      position: absolute;
      right: 0;
      bottom: 0;
      @media screen and (min-width: 780px) {
        position: static;
      }
    }
  }
  .item-info {
    padding: 0.5rem;
    b::after {
      content: ": ";
    }
    p {
      margin: 0;
      display: inline;
    }
    @media screen and (min-width: 780px) {
      padding: 0 1rem;
      text-align: center;
      font-size: 1.2rem;
      b::after {
        content: none;
      }
      p {
        display: block;
        margin: 1rem;
      }
      .quantity-buttons {
        display: flex;
      }
    }
  }
  .checkout {
    position: absolute;
    right: 0;
  }
`;

const CartContainer = ({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}: {
  cart: CartState;
  increaseQuantity: ActionCreatorWithPayload<any, string>;
  decreaseQuantity: ActionCreatorWithPayload<any, string>;
  removeFromCart: ActionCreatorWithPayload<any, string>;
}) => {
  const cartQuantity = useAppSelector((state) => state.cart.cartQuantity);
  let totalCartPrice = 0;
  Object.keys(cart.cartItems).forEach(function (item, key) {
    totalCartPrice += cart.cartItems[key].quantity * cart.cartItems[key].price;
  });

  return (
    <Container>
      <h1>Shopping Cart ({cartQuantity})</h1>

      {cart.cartItems.map((item, key) => {
        return (
          <div className="itemContainer">
            <img
              style={{
                width: "70px",
                height: "100px",
              }}
              src={item.image}
              alt=""
            />
            <div className="item-info-container">
              <div className="item-info">
                <b style={{ textTransform: "capitalize" }}>{item.name}</b>
                <p>{item.color}</p>
              </div>
              <div className="item-info">
                <b>Unit Price</b>
                <p>{formatCurrency(item.price)}</p>
              </div>
              <div className="item-info">
                <b>Quantity</b>
                <div className="quantity-buttons">
                  <button
                    onClick={() => {
                      decreaseQuantity(key);
                    }}
                  >
                    -
                  </button>
                  <p style={{ padding: "0 1rem" }}>{item.quantity}</p>
                  <button
                    onClick={() => {
                      increaseQuantity(key);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="item-info">
                <b>Total</b>
                <p>{formatCurrency(item.price * item.quantity)}</p>
              </div>
              <button
                className="trash"
                onClick={() => {
                  if (
                    window.confirm(
                      `Are you sure you want to remove ${item.name} from your cart?`
                    )
                  ) {
                    removeFromCart(key);
                  } else {
                    return;
                  }
                }}
              >
                <img src="/assets/images/trash.svg" alt="trash" />
              </button>
            </div>
          </div>
        );
      })}
      {cartQuantity > 0 ? (
        <div className="checkout">
          <p>
            <b> Total Price:</b> {formatCurrency(totalCartPrice)}
          </p>
          <Button color="primary" width="50%">
            Proceed to Checkout
          </Button>
        </div>
      ) : (
        <div
          className="empty-cart"
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>You cart is empty</h2>
          <Link to={"/shop/homebud-grove"}>
            <Button color="primary" width="15rem">
              Add items to cart
            </Button>
          </Link>
        </div>
      )}
    </Container>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
})(CartContainer);
