import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Favorites {
    favorites: number[]
}

const initialState: Favorites = {
    favorites: []
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<number>) => {
            state.favorites = [...state.favorites, action.payload]
        },
        removeFavorite: (state, action: PayloadAction<number>) => {
            state.favorites = [...state.favorites.filter((e)=>e!=action.payload)]
        },
    }
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
