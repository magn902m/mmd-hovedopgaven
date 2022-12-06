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
import { AuthProvider } from "./contexts/AuthContext";
import { ThreeJSProvider } from "./contexts/ThreeJSContext";

// Firebase
import {
  useFirebaseApp,
  DatabaseProvider,
  // AuthProvider
} from "reactfire";
import { getDatabase } from "firebase/database"; // Firebase v9+
import { getAuth } from "firebase/auth";
import { PrivateRoute } from "./pages/PrivateRoute";
import { Navbar } from "./ui/components";
import { Footer } from "./ui/components";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContex";

function App() {
  const app = useFirebaseApp();
  const database = getDatabase(app);
  const auth = getAuth(app);

  return (
    <div className="App">
      {/* <AuthProvider sdk={auth}> */}
      <AuthProvider auth={auth}>
        <DatabaseProvider sdk={database}>
          <ThreeJSProvider>
            <BrowserRouter>
              <ShoppingCartProvider>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Frontpage />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/product" element={<Product />}>
                    <Route path=":productid" element={<Product />} />
                  </Route>
                  <Route path="/green-goal" element={<GreenGoal />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  {/* <Route path="/account" element={<Account />} /> */}
                  <Route
                    path="/account"
                    element={
                      <PrivateRoute>
                        <Account />
                      </PrivateRoute>
                    }
                  />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                </Routes>
                <Footer />
              </ShoppingCartProvider>
            </BrowserRouter>
          </ThreeJSProvider>
        </DatabaseProvider>
      </AuthProvider>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
