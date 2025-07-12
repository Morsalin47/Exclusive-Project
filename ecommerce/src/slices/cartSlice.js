import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
  },
  reducers: {
    cartTotal: (state, action) => {
      const findindex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (findindex >= 0) {
        state.cartItems[findindex].cartQuantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, cartQuantity: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    }
  }
})

// Action creators are generated for each case reducer function
export const { cartTotal } = cartSlice.actions

export default cartSlice.reducer