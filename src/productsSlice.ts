import { Product } from './services/api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ProductsState {
    products: Product[] | []
}

const initialState:ProductsState = {
    products: []
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload; // Заменяем текущее состояние на полученный список товаров
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    // Удаляем товар по ID
    },
  },
});

export const { setProducts, removeProduct } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
