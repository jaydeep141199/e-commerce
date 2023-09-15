import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const RemoveItem = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = RemoveItem;
    },
    IncrementQuentity: (state, action) => {
      const ItemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      ItemPresent.quantity++;
    },
    DecrementQuentity: (state, action) => {
      const ItemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (ItemPresent.quantity === 1) {
        const RemoveItem = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = RemoveItem;
      } else {
        ItemPresent.quantity--;
      }
    },
      cleanCart:(state)=>{
        state.cart=[];
      },
  },
});
export const{addToCart,removeFromCart,IncrementQuentity,DecrementQuentity,cleanCart}=cartSlice.actions;
export default cartSlice.reducer;
