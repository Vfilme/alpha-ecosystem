import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Определите интерфейс для данных
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  }
    rating: {
      rate: number,
      count: number
    }
}

// Создайте API с помощью createApi https://api.escuelajs.co/api/v1/products
export const api = createApi({
  reducerPath: 'api', // Уникальное имя для редьюсера API
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1/' }), // Базовый URL для запросов
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products', // Относительный путь для запроса списка продуктов
    })
    // Вы можете добавить другие endpoints здесь
  }),
});

// Экспортируйте автоматически созданные хуки
export const { useGetProductsQuery } = api;