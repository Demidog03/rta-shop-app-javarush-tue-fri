import productsSlice from '@/modules/products/slices/products.slice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        products: productsSlice
    },
});

export default store;