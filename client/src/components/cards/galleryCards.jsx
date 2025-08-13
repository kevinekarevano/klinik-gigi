import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../ui/loader";

const GalleryCards = () => {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGalleries = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/gallery/get-all`);
      setGalleries(data.data);
    } catch (error) {
      console.error("Gagal mengambil data galeri:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleries();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Loader />
        <p className="text-center mt-3 font-medium text-accent-700">Memuat galeri...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleries.map((item, index) => (
          <div key={index} className="bg-white rounded-sm shadow overflow-hidden ">
            {/* Image Section */}
            <div className="relative">
              <img src={item.image} alt={item.title} className="w-full hover:scale-105 duration-500 h-80 object-cover" />
              {/* Category Badge */}
              <div className={`absolute top-4 left-4 bg-accent-700 text-white px-3 py-1 rounded text-sm font-medium`}>Galeri</div>
              <div className={`absolute bottom-0 right-0 bg-accent-700 text-white px-3 py-1 rounded-tl-sm text-sm font-medium`}>ahligigibintaro.com</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCards;
