import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from '../../../app/store';
import { Card } from "../../../entities/card";
import { FavoriteButton } from "../../../features/favorite-button";
import { RemoveProduct } from "../../../features/remove-product";
import './productPage.scss';

export const ProductPage: React.FC = ()=> {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const products = useSelector((state: RootState)=>state.products.products);
    const [product] = products.filter(product=>product.id==Number(id))

    return (
    <div className="product-page">
        <Card product={product}>
            <>
                <FavoriteButton id={product.id} />
                <RemoveProduct id={product.id}/>
            </>
        </Card>
        <button onClick={()=>navigate(-1)}>вернуться обратно</button>
    </div>
    )
}