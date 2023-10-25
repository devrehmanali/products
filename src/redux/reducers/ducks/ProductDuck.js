import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  productsDataList: null,
  productsDataLoading: false,
  isLoading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    // request reducers
    getProductsRequest: (state) => state,
    addAProductRequest: (state) => state,
    updateAProductsRequest: (state) => state,

    // other reducers
    updateGetProductsResponse(state, { payload }) {
      return {
        ...state,
        productsDataList: payload.response,
      };
    },

    updateProductsLoading(state, { payload }) {
      return {
        ...state,
        productsDataLoading: payload,
      };
    },
  },
});

export const {
  getProductsRequest,
  addAProductRequest,
  updateAProductsRequest,

  updateGetProductsResponse,

  updateProductsLoading,
} = productsSlice.actions;

export default productsSlice.reducer;
