import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const useAuthStore = create((set) => ({
  user: null,
  loading: true,

  checkAuth: async () => {
    set({ loading: true });
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/me`, { withCredentials: true });
      set({ user: data.data, loading: false });
    } catch {
      set({ user: null, loading: false });
    }
  },

  logout: async () => {
    await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {}, { withCredentials: true });
    toast("goodbye", {
      icon: "👋",
    });
    set({ user: null });
  },
}));

export default useAuthStore;
