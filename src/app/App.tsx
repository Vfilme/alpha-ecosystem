import React from "react";
import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductPage } from '../pages/product-page/components/productPage';
import { CatalogPage } from "../pages/catalog-page";

export const App: React.FC = ()=> {
    return <BrowserRouter basename="/alpha-ecosystem">
        <Routes>
            <Route path="/" element={<CatalogPage />} />
            <Route path="/:id" element={<ProductPage />} />
        </Routes>
    </BrowserRouter>
}