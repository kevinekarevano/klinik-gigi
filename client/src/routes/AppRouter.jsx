import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/user/HomePage";
import NotFoundPage from "../pages/user/NotFoundPage";
import RootLayout from "@/layouts/RootLayout";
import AboutUsPage from "@/pages/user/AboutUsPage";
import ServicesPage from "@/pages/user/ServicePage/ServicesPage";
import LocationPage from "@/pages/user/LocationPage";
import GalleryPage from "@/pages/user/GalleryPage";
import ArticlePage from "@/pages/user/ArticlePage/ArticlePage";
import LoginPage from "@/pages/auth/LoginPage";
import ServiceDetailPage from "@/pages/user/ServicePage/ServiceDetailPage";
import AdsPage from "@/pages/ads/AdsPage";
import HomePageDashboard from "@/pages/dashboard/HomePage";
import DashboardLayout from "@/layouts/dashboard-layout/DashboardLayout";
import ArticlesPage from "@/pages/dashboard/article/ArticlesPage";
import CreateArticlePage from "@/pages/dashboard/article/CreateArticlePage";
import UpdateArticlePage from "@/pages/dashboard/article/UpdateArticlePage";
import ServicesDashboardPage from "@/pages/dashboard/services/ServicesPage";
import CreateServicePage from "@/pages/dashboard/services/CreateServicePage";
import UpdateServicePage from "@/pages/dashboard/services/UpdateServicePage";
import GalleriesPage from "@/pages/dashboard/gallery/GalleriesPage";
import CreateGalleryPage from "@/pages/dashboard/gallery/CreateGalleryPage";
import BannersPage from "@/pages/dashboard/banner/BannersPage";
import CreateBannerPage from "@/pages/dashboard/banner/CreateBannerPage";
import LogoPage from "@/pages/dashboard/logo/LogoPage";
import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoutes";
import ArticleDetailPage from "@/pages/user/ArticlePage/ArticleDetailPage";

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
          <Route path="/article/:id" element={<ArticleDetailPage />} />
          <Route path="/layanangigipalsuterbaik" element={<AdsPage />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<HomePageDashboard />} />
            <Route path="articles" element={<ArticlesPage />} />
            <Route path="create-article" element={<CreateArticlePage />} />
            <Route path="edit-article/:id" element={<UpdateArticlePage />} />
            <Route path="services" element={<ServicesDashboardPage />} />
            <Route path="create-service" element={<CreateServicePage />} />
            <Route path="edit-service/:id" element={<UpdateServicePage />} />
            <Route path="galleries" element={<GalleriesPage />} />
            <Route path="create-gallery" element={<CreateGalleryPage />} />
            <Route path="banners" element={<BannersPage />} />
            <Route path="create-banner" element={<CreateBannerPage />} />
            <Route path="logo" element={<LogoPage />} />
          </Route>
        </Route>

        {/* Auth Route */}
        <Route element={<GuestRoute />}>
          <Route path="/login/admin" element={<LoginPage />} />
        </Route>

        {/* Not Found Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
