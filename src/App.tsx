import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./ui/styles/globals.scss";
import { Frontpage } from "./pages/Frontpage";
import { Products } from "./pages/Products";
import { Product } from "./pages/Product";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { ForgotPassword } from "./pages/ForgotPassword";
import { GreenGoal } from "./pages/GreenGoal";
import { Account } from "./pages/Account";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Header */}
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/products" element={<Products />}>
            <Route path=":produktid" element={<Product />} />
          </Route>
          <Route path="/green-goal" element={<GreenGoal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        {/* Footer */}
      </BrowserRouter>
    </div>
  );
}

export default App;
