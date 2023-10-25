import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/products" element={<ProductList />} />
    </Routes>
  );
}

export default App;
