import { create } from "zustand";
import axios from "axios";

const useLogoStore = create((set) => ({
  logo: null,
  loading: true,

  fetchLogo: async () => {
    set({ loading: true });
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/logo/get-all`, { withCredentials: true });
      set({ logo: data.data, loading: false });
    } catch {
      set({ logo: null, loading: false });
    }
  },
}));

export default useLogoStore;
