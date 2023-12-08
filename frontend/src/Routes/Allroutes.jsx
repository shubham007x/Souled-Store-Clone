import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Cart from "../Pages/Cart";
import Mens from "../Pages/Mens";
import Womens from "../Pages/Womens";
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/men" element={<Mens />} />
        <Route path="/women" element={<Womens />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
