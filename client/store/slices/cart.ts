import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { IProduct } from '../../types/product';

export interface CartState {
  cart: IProduct[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart = action.payload;
    },
    increment(state, action) {
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload ? { ...product, quantity: product.quantity + 1 } : product,
        ),
      };
    },
    decrement(state, action) {
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload
            ? {
                ...product,
                quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
              }
            : product,
        ),
      };
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.cart };
    },
  },
});

export const cartReducer = cartSlice.reducer;
