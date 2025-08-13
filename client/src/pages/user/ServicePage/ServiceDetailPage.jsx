import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import axios from "axios";
import { MessageCircleMore } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const ServiceDetailPage = () => {
  const { id } = useParams();

  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchService = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/service/${id}`);
        setService(data.data);
      } catch (err) {
        setError("Gagal memuat data layanan atau layanan tidak ditemukan.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchService();
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>
          <Loader />
          <p className="text-center mt-3 font-medium text-accent-700">Memuat layanan...</p>
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
            Layanan yang anda cari, tidak ditemukan🥲 Kembali ke{" "}
            <Link to={"/services"} className="font-semibold underline italic">
              Halaman Layanan
            </Link>
          </p>
        </div>
      </div>
    );
  }

  if (!service) {
    return <p>Layanan tidak ditemukan.</p>;
  }

  return (
    <div className="container mx-auto max-w-7xl px-5 mt-5 md:mt-12 mb-20">
      <div className="h-[50vh] max-w-md  mx-auto ">
        <img className="rounded-lg h-full w-full object-cover" src={service.image} alt={service.title} />
      </div>

      <div className="text-center mt-6">
        <h1 className="text-4xl font-medium">{service.title}</h1>
        <p className="text-accent-800 font-medium">Layanan</p>
      </div>

      <div className="mt-7 text-zinc-800">
        <div dangerouslySetInnerHTML={{ __html: service.content }} />
      </div>

      <div className="space-x-2">
        <a href={`https://wa.me/6281510718728?text=Halo,%20saya%20ingin%20membuat%20janji%20dengan%20Ahli%20Gigi%20Bintaro`} target="_blank">
          <Button className={"bg-accent-700 cursor-pointer  hover:bg-accent-600 text-white mt-5"}>
            Buat Janji Sekarang <MessageCircleMore />
          </Button>
        </a>
        <Link to={"/gallery"}>
          <Button className={"bg-transparent border-2 border-accent-700 text-accent-700 cursor-pointer    font-semibold hover:bg-accent-50 mt-5"}>Portofolio</Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
