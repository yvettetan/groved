import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  cartQuantity: number;
  cartItems: {
    id: number;
    quantity: number;
    name: string;
    image: string;
    price: number;
    color?: string;
  }[];
}

const initialState: CartState = {
  cartQuantity: 0,
  cartItems: [],
};

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fetchCartQuantity: (state, action) => {
      return {
        ...state,
      };
    },
    addToCart: (state, action) => {
      if (state.cartQuantity === 0) {
        let item = {
          id: action.payload.id,
          quantity: action.payload.quantity,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
          color: action.payload.color,
        };
        state.cartItems.push(item);
        state.cartQuantity = state.cartQuantity + item.quantity;
      } else {
        let isInCart = false;
        state.cartItems.map((item) => {
          if (
            item.id === action.payload.id &&
            item.color === action.payload.color
          ) {
            item.quantity = item.quantity + action.payload.quantity;
            state.cartQuantity = state.cartQuantity + action.payload.quantity;
            isInCart = true;
          }
          return isInCart;
        });
        if (!isInCart) {
          let _item = {
            id: action.payload.id,
            quantity: action.payload.quantity,
            name: action.payload.name,
            image: action.payload.image,
            price: action.payload.price,
            color: action.payload.color,
          };
          state.cartItems.push(_item);
          state.cartQuantity = state.cartQuantity + _item.quantity;
        }
      }
    },
    removeFromCart: (state, action) => {
      let quantity = state.cartItems[action.payload].quantity;
      const newItems = state.cartItems.filter((item) => {
        return item.id !== state.cartItems[action.payload].id;
      });
      state.cartQuantity = state.cartQuantity - quantity;
      state.cartItems = newItems;
    },
    increaseQuantity: (state, action) => {
      let quanity = state.cartItems[action.payload].quantity;
      if (quanity < 20) {
        state.cartQuantity++;
        state.cartItems[action.payload].quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      let quantity_ = state.cartItems[action.payload].quantity;
      if (quantity_ > 1) {
        state.cartQuantity--;
        state.cartItems[action.payload].quantity--;
      }
    },
  },
});

export const {
  fetchCartQuantity,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartReducer.actions;
