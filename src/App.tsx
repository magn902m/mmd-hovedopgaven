import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./ui/styles/globals.scss";
import { Frontpage } from "./pages/Frontpage/Frontpage";
import { Products } from "./pages/Products/Products";
import { Product } from "./pages/Product/Product";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword";
import { GreenGoal } from "./pages/GreenGoal/GreenGoal";
import { Account } from "./pages/Account/Account";
import { Cart } from "./pages/Cart/Cart";
import { Checkout } from "./pages/Checkout/Checkout";
import { AuthProvider } from "./contexts/AuthContext";
import { ThreeJSProvider } from "./contexts/ThreeJSContext";

// Firebase
import {
  useFirebaseApp,
  DatabaseProvider,
  StorageProvider,
  // AuthProvider
} from "reactfire";
import { getDatabase } from "firebase/database"; // Firebase v9+
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { PrivateRoute } from "./pages/PrivateRoute";
import { Navbar } from "./ui/components/4-habitats/Navbar/Navbar";
import { Footer } from "./ui/components";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContex";
import { ScrollToTop } from "./hooks/scrollToTop";
import { SkipToMainContent } from "./ui/components/1-atoms/SkipToMainContent";

function App() {
  const app = useFirebaseApp();
  const database = getDatabase(app);
  const auth = getAuth(app);
  const storage = getStorage(app);

  return (
    <div className="App">
      {/* <AuthProvider sdk={auth}> */}
      <AuthProvider auth={auth}>
        <DatabaseProvider sdk={database}>
          <StorageProvider sdk={storage}>
            <ThreeJSProvider>
              <BrowserRouter>
                <ShoppingCartProvider>
                  <SkipToMainContent />
                  <Navbar />
                  <ScrollToTop>
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
                  </ScrollToTop>
                </ShoppingCartProvider>
              </BrowserRouter>
            </ThreeJSProvider>
          </StorageProvider>
        </DatabaseProvider>
      </AuthProvider>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
