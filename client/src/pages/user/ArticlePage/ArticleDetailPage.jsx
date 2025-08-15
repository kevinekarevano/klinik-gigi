import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import axios from "axios";
import { MessageCircleMore } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const ArticleDetailPage = () => {
  const { id } = useParams();

  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/${id}`);
        setArticles(data.data);
      } catch (err) {
        setError("Gagal memuat data artikel atau artikel tidak ditemukan.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchArticles();
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>
          <Loader />
          <p className="text-center mt-3 font-medium text-accent-700">Memuat artikel...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex text-accent-700 items-center justify-center">
        <div>
          <h1 className="text-6xl text-center font-bold">Oops...</h1>
          <p className="text-center text-accent-600 mt-5 font-medium ">
            Artikel yang anda cari, tidak ditemukan🥲 Kembali ke{" "}
            <Link to={"/article"} className="font-semibold underline italic">
              Halaman Artikel
            </Link>
          </p>
        </div>
      </div>
    );
  }

  if (!articles) {
    return <p>Artikel tidak ditemukan.</p>;
  }

  return (
    <div className="container mx-auto max-w-7xl px-5 mt-5 md:mt-12 mb-20">
      <title>Ahli Gigi Bintaro - Article</title>

      <div className="h-[50vh] max-w-md  mx-auto ">
        <img className="rounded-lg h-full w-full object-cover" src={articles.image} alt={articles.title} />
      </div>

      <div className="text-center mt-6">
        <h1 className="text-2xl  text-center  font-medium">{articles.title}</h1>
        <p className="text-accent-800 font-medium">Artikel</p>
      </div>

      <div className="mt-10 text-zinc-800">
        <div dangerouslySetInnerHTML={{ __html: articles.content }} />
      </div>

      <div className="space-x-2">
        <a href={`https://wa.me/6281510718728?text=Halo,%20saya%20ingin%20membuat%20janji%20dengan%20Ahli%20Gigi%20Bintaro`} target="_blank">
          <Button className={"bg-accent-700 cursor-pointer  hover:bg-accent-600 text-white mt-5"}>
            Buat Janji Sekarang <MessageCircleMore />
          </Button>
        </a>
        <Link to={"/article"}>
          <Button className={"bg-transparent border-2 border-accent-700 text-accent-700 cursor-pointer    font-semibold hover:bg-accent-50 mt-5"}>Kambali</Button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
