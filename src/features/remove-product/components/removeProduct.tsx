import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../../productsSlice";
import './removeProduct.scss';

interface Props {
    id: number
}

export const RemoveProduct: React.FC<Props> = ({id})=> {
    const dispatch = useDispatch();
  
    return <button onClick={(e)=>{dispatch(removeProduct(id));  e.stopPropagation()}} className="remove-product">
        <img src="https://cdn-icons-png.flaticon.com/512/2496/2496731.png" alt="remove product" />
    </button>
}