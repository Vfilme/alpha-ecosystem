import React from "react";
import './favoriteButton.scss';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { addFavorite, removeFavorite } from "../../../app/favoritesSlice";

interface Props {
    id: number;
}

export const FavoriteButton: React.FC<Props> = ({id})=> {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState)=>state.favorites.favorites)
    
    const systemFavorites = (id: number)=> {
        if (favorites.includes(id)) {
            dispatch(removeFavorite(id));
        }
        else {
            dispatch(addFavorite(id))
        }
    }

    const isFavorite = favorites.includes(id)
    
    return (
        <button className="favorite-button" onClick={(e)=>{systemFavorites(id); e.stopPropagation();}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`favorite-heart ${isFavorite ? 'active-heart' : ''}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
        </button>
    )
}