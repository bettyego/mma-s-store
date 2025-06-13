import React, { useEffect } from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./Component/page/Home";
import Products from "./Component/page/ProductCatalog/products";
import Login from "./Component/page/Login/Login";
import Payment from "./Component/page/Payment/Payment";
import Checkout from "./Component/page/Checkedout";

function App() {
  
  return (
    
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      
    </>
    
  );
}

export default App;

