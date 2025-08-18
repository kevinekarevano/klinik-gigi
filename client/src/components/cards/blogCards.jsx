import axios from "axios";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Loader from "../ui/loader";
import { Skeleton } from "../ui/skeleton";

const BlogCards = ({ searchTerm }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/get-all`);
      setArticles(data.data);
    } catch (error) {
      console.error("Gagal mengambil data artikel:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const filteredArticles = articles.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase().trim());
  });

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-sm p-2 shadow overflow-hidden ">
          {/* Image Section */}
          <Skeleton className={"h-48 bg-gray-300"} />

          {/* Content Section */}
          <div className="my-4 w-1/2">
            {/* Title */}
            <Skeleton className={"h-4  bg-gray-300"} />
            <Skeleton className={"h-3 mt-2 w-1/2 bg-gray-300"} />
          </div>
        </div>
        <div className="bg-white rounded-sm p-2 shadow overflow-hidden ">
          {/* Image Section */}
          <Skeleton className={"h-48 bg-gray-300"} />

          {/* Content Section */}
          <div className="my-4 w-1/2">
            {/* Title */}
            <Skeleton className={"h-4  bg-gray-300"} />
            <Skeleton className={"h-3 mt-2 w-1/2 bg-gray-300"} />
          </div>
        </div>
        <div className="bg-white rounded-sm p-2 shadow overflow-hidden ">
          {/* Image Section */}
          <Skeleton className={"h-48 bg-gray-300"} />

          {/* Content Section */}
          <div className="my-4 w-1/2">
            {/* Title */}
            <Skeleton className={"h-4  bg-gray-300"} />
            <Skeleton className={"h-3 mt-2 w-1/2 bg-gray-300"} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.length === 0 && searchTerm !== "" ? (
          <p className="col-span-3 text-center text-gray-500">
            Tidak ada artikel ditemukan untuk pencarian <span className="font-semibold">"{searchTerm}"</span> .
          </p>
        ) : filteredArticles.length === 0 ? (
          <p className="text-zinc-400 text-center col-span-full">Belum ada artikel yang tersedia.</p>
        ) : (
          filteredArticles.map((item, index) => (
            <div key={index} className="bg-white rounded-sm shadow overflow-hidden ">
              {/* Image Section */}
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-full hover:scale-105 duration-500 h-48 object-cover" />
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 bg-accent-700 text-white px-3 py-1 rounded text-sm font-medium`}>Artikel</div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{item.description}</p>

                {/* Read More Link */}
                <Link to={`/article/${item._id}`} className="flex items-center text-accent-700 hover:text-accent-800 cursor-pointer transition-colors">
                  <span className="text-sm font-medium">Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogCards;
