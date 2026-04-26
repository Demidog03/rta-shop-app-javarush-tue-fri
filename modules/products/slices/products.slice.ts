import { createSlice } from "@reduxjs/toolkit";
import { productsMockData } from "../data/products-mock.data";
import { ProductsState } from "./products.slice.types";

const initialState: ProductsState = {
    products: productsMockData,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        
    },
});

export default productsSlice.reducer;