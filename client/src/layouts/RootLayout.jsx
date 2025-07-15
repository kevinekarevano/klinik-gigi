import React, { useEffect, useState } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Outlet } from "react-router";
import { ChevronUp} from "lucide-react";
import TopBar from "@/components/topBar";

const RootLayout = () => {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > 200); // muncul jika scroll > 200px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className={`${showToTop ? "" : "translate-y-25"} fixed bottom-4 transition-all duration-500  right-4 z-50 bg-accent-700 text-white p-3 rounded-full shadow-lg cursor-pointer`} onClick={scrollToTop}>
        <ChevronUp size={30} />
      </div>

      <div className={` fixed bottom-20 transition-all duration-500  right-4 z-50 bg-accent-700 text-white p-2 rounded-full shadow-lg cursor-pointer`} onClick={scrollToTop}>
        <img src="whatsapp.png" alt="" className="w-10" />
      </div>

      <TopBar />
      <Navbar />

      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
