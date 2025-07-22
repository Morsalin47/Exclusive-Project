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
    },

    cartQuantity: (state, action) => {
      if (action.payload.type === "increment") {
        state.cartItems[action.payload.id].cartQuantity += 1;
      }else if (action.payload.type === "decrement") {
        if (state.cartItems[action.payload.id].cartQuantity > 1) {
          state.cartItems[action.payload.id].cartQuantity -= 1;
        } else {
          state.cartItems.splice(action.payload.id, 1);
        }
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    }
  }
})

// Action creators are generated for each case reducer function
export const { cartTotal, cartQuantity } = cartSlice.actions

export default cartSlice.reducer