// src/hooks/useScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router";

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Bergantung pada 'pathname'
};
