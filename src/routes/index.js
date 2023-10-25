import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "../components/products";

export default function ManageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/products" element={<ProductList />} />
    </Routes>
  );
}
