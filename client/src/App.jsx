import { Toaster } from "react-hot-toast";
import AppRouter from "./routes/AppRouter";
import useAuthStore from "./store/auth-store";
import { useEffect } from "react";
import useLogoStore from "./store/logo-store";

function App() {
  // Initialize auth check on app load
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const logo = useLogoStore((state) => state.fetchLogo);
  const icon = useLogoStore((state) => state.logo);

  useEffect(() => {
    checkAuth();
    logo();
  }, [checkAuth, logo]);

  return (
    <main>
      {icon?.image && <link rel="icon" href={icon.image} />}
      <AppRouter />
      <Toaster reverseOrder={false} position="bottom-right" />
    </main>
  );
}

export default App;
