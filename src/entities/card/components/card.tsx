import React from "react";
import { Product } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import "./card.scss";

interface Props {
    product: Product;
    children: JSX.Element;
    cutDescription?: boolean;
}

export const Card: React.FC<Props> = ({product, children, cutDescription=false})=> {
    const navigate = useNavigate();

    return <div className="card" onClick={()=>navigate(`/${product.id}`)}>
        <img src={product.images[0]} alt="photo of product" />
        <div className="card__other">
            <h3>{product.title}</h3>
            <p>{product.category.name}</p>
            <p>
                {cutDescription ? product.description.split(" ").slice(0, 8).join(' ')+"..." : product.description }
            </p>
            {children}
        </div>
    </div>
}