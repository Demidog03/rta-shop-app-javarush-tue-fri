import productsSlice from '@/modules/products/slices/products.slice';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';

const rootReducer = combineReducers({
    products: productsSlice
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['products'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            }
        })
});

export const persitor = persistStore(store);

export default store;