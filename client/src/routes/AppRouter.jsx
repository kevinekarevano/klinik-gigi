import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import RootLayout from "@/layouts/RootLayout";
import AboutUsPage from "@/pages/AboutUsPage";
import ServicesPage from "@/pages/ServicesPage";
import LocationPage from "@/pages/LocationPage";
import GalleryPage from "@/pages/GalleryPage";
import ArticlePage from "@/pages/ArticlePage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Route */}
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/article" element={<ArticlePage />} />
        </Route>

        {/* Not Found Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
