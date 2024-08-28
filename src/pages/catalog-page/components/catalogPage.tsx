import React, { useState } from "react";
import { Catalog } from '../../../widgets/components/catalog';
import { Filter } from "../../../features/filter";

export const CatalogPage: React.FC = ()=> {
    const [filter, setFilter] = useState<boolean>(false);

    return (
        <>
            <Filter filter={filter} setFilter={setFilter}/>
            <Catalog filter={filter} />
        </>
    )
}