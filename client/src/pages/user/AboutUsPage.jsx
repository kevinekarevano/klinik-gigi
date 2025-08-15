import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import useLogoStore from "@/store/logo-store";
import { ChevronRight, CircleCheck, MessageCircleMore } from "lucide-react";
import { Link } from "react-router";

const AboutUsPage = () => {
  const logo = useLogoStore((state) => state.logo);
  const logoLoading = useLogoStore((state) => state.loading);

  return (
    <div className="container mx-auto max-w-7xl px-5 md:mt-18 mb-20">
      <title>Ahli Gigi Bintaro - About Us</title>
      <div className="md:flex justify-center ">
        <div className="md:w-1/3">{logoLoading ? <Skeleton className={"w-full my-5 h-80 rounded-md mr-1 bg-accent-700/35"} /> : <img src={logo?.image} alt="logo" className="  w-full" />}</div>

        <div className="md:w-1/2">
          <h1 className="mb-4 font-medium text-zinc-800">Tentang Kami</h1>
          <h1 className="text-4xl font-semibold">Ahli Gigi Bintaro</h1>
          <h2 className="text-accent-700 font-medium mt-1">Layanan Pemasangan Gigi Palsu</h2>
          <div className="space-y-4 mt-5">
            <p>
              Ahli Gigi Bintaro adalah klinik gigi profesional yang berfokus pada layanan pemasangan gigi palsu. Didukung oleh tim dokter gigi terampil dan teknologi modern, kami berkomitmen untuk memberikan perawatan yang presisi, aman,
              dan mengutamakan kenyamanan setiap pasien.
            </p>
            <p>Kami memahami pentingnya pengalaman yang bebas cemas. Oleh karena itu, setiap perawatan disesuaikan dengan kebutuhan unik Anda untuk membantu Anda mendapatkan kembali senyum yang sehat, fungsional, dan penuh percaya diri.</p>
          </div>

          <ul className="list-i text-accent-800 font-medium mt-7 space-y-2">
            <li className="flex  gap-2">
              <CircleCheck className=" w-6" /> Keahlian & Teknologi Terkini
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck className=" w-6" /> Perawatan yang Nyaman & Solusi Personal
            </li>
          </ul>

          <div className="flex flex-col md:items-center md:flex-row  gap-3 mt-8">
            <a href={`https://wa.me/6281510718728?text=Halo,%20saya%20ingin%20membuat%20janji%20dengan%20Ahli%20Gigi%20Bintaro`} target="_blank">
              <Button className={"bg-accent-700 cursor-pointer transition-all duration-300   hover:bg-accent-600 text-white  "}>
                Buat Janji Sekarang <MessageCircleMore />
              </Button>
            </a>
            <Link to={"/services"}>
              <Button className={"bg-transparent border-3 border-accent-700 cursor-pointer sm:ml-3  transition-all duration-300    hover:bg-accent-700/10   text-accent-700  "}>
                Layanan Kami <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
