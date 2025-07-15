import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import RootLayout from "@/layouts/RootLayout";
import AboutUsPage from "@/pages/AboutUsPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Route */}
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Route>

        {/* Not Found Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
