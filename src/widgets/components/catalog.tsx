import React, { useEffect } from "react";
import "./catalog.scss";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../../services/api";
import { RootState } from "../../app/store";
import { setProducts } from "../../productsSlice";
import { FavoriteButton } from "../../features/favorite-button";
import { RemoveProduct } from "../../features/remove-product";
import { Card } from "../../entities/card";
import { addFavorite, removeFavorite } from "../../app/favoritesSlice";

interface Props {
    filter: boolean
}

export const Catalog: React.FC<Props> = ({filter})=> {
    const dispatch = useDispatch();
    const { data, error, isLoading } = useGetProductsQuery();
    const products = useSelector((state: RootState)=>state.products.products)
    const favorites = useSelector((state: RootState)=>state.favorites.favorites)

    useEffect(()=>{
        if (data && products.length==0) dispatch(setProducts(data))
    }, [dispatch, data])

    return (
        <>
            <div className="catalog">
                {isLoading && <p>data loading...</p>}
                {error && <p>sorry something wrong...</p>}
                {products && products.map(product=> {
                    if (!filter || favorites.includes(product.id)) {
                    return <Card product={product} cutDescription={true}>
                        <>
                            <FavoriteButton id={product.id} />
                            <RemoveProduct id={product.id}/>
                        </>
                    </Card>
                    }
                    })}
            </div>
        </>
    )
}