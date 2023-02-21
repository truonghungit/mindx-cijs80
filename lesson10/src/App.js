import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProductsPage from "./Pages/ProductsPage";
import PageNotFound from "./Pages/PageNotFound";
import ProductDetailPage from "./Pages/ProductDetailPage";
import ProfilePage from "./Pages/Profile/ProfilePage";
import EditProfilePage from "./Pages/Profile/EditProfilePage";
import AboutMePage from "./Pages/Profile/AboutMePage";
import ProfileSettingsPage from "./Pages/Profile/ProfileSettingsPage";
import { AuthProvider } from "./AuthContext";
import { TranslationProvider } from "./TranslationContext";

function App() {
  const [auth, setAuth] = useState(null);

  return (
    <AuthProvider value={{ auth, setAuth }}>
      <TranslationProvider>
        <Header />

        <main className="container" style={{ minHeight: "700px" }}>
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route
              path="/products/:productId"
              element={<ProductDetailPage />}
            />

            <Route path="/profile" element={<ProfilePage />}>
              <Route path="" element={<AboutMePage />} />
              <Route path="edit" element={<EditProfilePage />} />
              <Route path="settings" element={<ProfileSettingsPage />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </TranslationProvider>
    </AuthProvider>
  );
}

export default App;
