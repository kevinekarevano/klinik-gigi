import axios from "axios";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Loader from "../ui/loader";

const Cards = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchServices = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/service/get-all`);
      setServices(data.data);
    } catch (error) {
      console.error("Gagal mengambil data layanan:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Loader />
        <p className="text-center mt-3 font-medium text-accent-700">Memuat layanan...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.length > 0 ? (
          services.map((item, index) => (
            <div key={index} className="bg-white rounded-sm shadow overflow-hidden ">
              {/* Image Section */}
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-full hover:scale-105 duration-500 h-48 object-cover" />
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 bg-accent-700 text-white px-3 py-1 rounded text-sm font-medium`}>Layanan</div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{item.title}</h3>

                {/* Read More Link */}
                <Link to={`/service/${item._id}`} className="flex items-center text-accent-700 hover:text-accent-800 cursor-pointer transition-colors">
                  <span className="text-sm font-medium">Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>Belum ada layanan yang tersedia saat ini.</p>
        )}
        {}
      </div>
    </div>
  );
};

export default Cards;
