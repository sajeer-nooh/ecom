import { createSlice } from "@reduxjs/toolkit"
import { CUSTOMER_STORE_NAME } from "../../../redux/constants";

interface CustomerState {
  orders: any[],
  cart: any,
  hasMore: boolean,
  status: string,
  error: Error | undefined
}

const initialState: CustomerState = {
  orders: [],
  cart: null,
  hasMore: true,
  status: 'idle',
  error: undefined
}

export const slice = createSlice({
  name: CUSTOMER_STORE_NAME,
  initialState,
  reducers: {
    getCustomerOrders: (state, action) => {
      console.log('getCustomerOrders', action.payload)
      state.orders = action.payload;
    },
    getCustomerCart: (state, action) => {
      console.log('getCustmerCart', action.payload)
      state.cart = action.payload;
    },
    updateCartItem: (state, action) => {
      console.log('updateCartItem', action.payload)
    },
    removeFromCart: (state, action) => {
      console.log('removeFromCart', action.payload)
    },
    addToCart: (state, action) => {
      console.log('addToCart', action.payload)
    }
  },
});

export const actions = slice.actions
export const reducer = slice.reducer

