import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/user/HomePage";
import NotFoundPage from "../pages/user/NotFoundPage";
import RootLayout from "@/layouts/RootLayout";
import AboutUsPage from "@/pages/user/AboutUsPage";
import ServicesPage from "@/pages/user/ServicePage/ServicesPage";
import LocationPage from "@/pages/user/LocationPage";
import GalleryPage from "@/pages/user/GalleryPage";
import ArticlePage from "@/pages/user/ArticlePage";
import LoginPage from "@/pages/auth/LoginPage";
import ServiceDetailPage from "@/pages/user/ServicePage/ServiceDetailPage";
import AdsPage from "@/pages/ads/AdsPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Route */}
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service/:id" element={<ServiceDetailPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/layanangigipalsuterbaik" element={<AdsPage />} />
        </Route>

        {/* Auth Route */}
        <Route path="/login/admin" element={<LoginPage />} />

        {/* Not Found Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
