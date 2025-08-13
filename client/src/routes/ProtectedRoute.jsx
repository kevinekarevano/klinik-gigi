import { Navigate, Outlet } from "react-router";
import useAuthStore from "@/store/auth-store";
import Loader from "@/components/ui/loader";

const ProtectedRoute = () => {
  const { user, loading } = useAuthStore();

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>
          <Loader />
          <p className="text-center mt-3 font-medium text-accent-700">Memuat halaman...</p>
        </div>
      </div>
    ); // atau loader

  return user ? <Outlet /> : <Navigate to="/login/admin" replace />;
};

export default ProtectedRoute;
