import './filter.scss';
import React from "react";

interface Props {
    filter: boolean;
    setFilter: (filter: boolean)=>void;
}

export const Filter: React.FC<Props> = ({filter, setFilter})=> {
    return (
    <div className="filter">
        <input type="checkbox" name="filter" id="filter"  onChange={()=>{setFilter(filter ? false : true)}}/>
        <label htmlFor="filter">показывать только избранные товары</label>
    </div>
    )
}