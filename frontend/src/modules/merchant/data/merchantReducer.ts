import { createSlice } from "@reduxjs/toolkit"
import { MERCHANT_STORE_NAME } from "../../../redux/constants";

interface merchantState {
  store: any,
  orders: any[],
  products: any[],
  lastOrder: any,
  hasMore: boolean,
  status: string,
  error: Error | undefined
}

const initialState: merchantState = {
  store: {},
  orders: [],
  products: [],
  lastOrder: null,
  hasMore: true,
  status: 'idle',
  error: undefined
}

export const slice = createSlice({
  name: MERCHANT_STORE_NAME,
  initialState,
  reducers: {
    getStoreInfo: (state, action) => {
      console.log('getStoreInfo', action.payload)
      state.store = action.payload;
    },
    getStoreProducts: (state, action) => {
      console.log('getStoreProducts', action.payload)
      state.products = action.payload;
    },
    deleteProdut: (state, action) => {
      console.log('deleteProdut', action.payload)
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      console.log('updateProdut', action.payload);
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      state.products[index] = action.payload;
    },
    createProduct: (state, action) => {
      console.log('createProdut', action.payload);
      state.products = [...state.products, action.payload];
    }
  },
});

export const actions = slice.actions
export const reducer = slice.reducer
