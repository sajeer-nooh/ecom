import { createSlice } from "@reduxjs/toolkit"
import { CUSTOMER_STORE_NAME } from "../../../redux/constants";

interface CustomerState {
  orders: any[],
  lastOrder: any,
  hasMore: boolean,
  status: string,
  error: Error | undefined
}

const initialState: CustomerState = {
  orders: [],
  lastOrder: null,
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
    }
  },
});

export const actions = slice.actions
export const reducer = slice.reducer

