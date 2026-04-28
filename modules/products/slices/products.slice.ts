import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsMockData } from "../data/products-mock.data";
import { Product, ProductsState } from "./products.slice.types";

const initialState: ProductsState = {
    products: productsMockData,
    cart: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const productExists = state.cart.find((product) => product.id === action.payload.id);
            if (!productExists) {
                state.cart.push(action.payload);
            }
        },
        removeFromCart: (state, action: PayloadAction<Product>) => {
            state.cart = state.cart.filter((product) => product.id !== action.payload.id);
        },
    },
});

export const { addToCart, removeFromCart } = productsSlice.actions;

export default productsSlice.reducer;