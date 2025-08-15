import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronRight, ChevronLeft } from "lucide-react";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Skeleton } from "./ui/skeleton";

const HeroSlider = () => {
  const [banner, setBanner] = useState([]);
  const [loading, setLoading] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const fetchBanner = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/banner/get-all`);
      setBanner(data.data);
    } catch (error) {
      console.error("Gagal mengambil data banner:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  if (loading) {
    return (
      <div>
        <Skeleton className={"h-[25vh] md:h-[70vh] w-full bg-gray-400  rounded-none"} />
      </div>
    );
  }

  return (
    <div className="w-full relative">
      <button ref={prevRef} className="opacity-60 hidden md:block  absolute z-10 top-1/2 left-4 -translate-y-1/2 bg-accent-700 rounded-full p-2 shadow cursor-pointer">
        <ChevronLeft color="white" />
      </button>
      <button ref={nextRef} className="opacity-60 hidden md:block  absolute z-10 top-1/2 right-4 -translate-y-1/2 bg-accent-700 rounded-full p-2 shadow cursor-pointer">
        <ChevronRight color="white" />
      </button>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        onInit={(swiper) => {
          // Attach navigation refs
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {banner.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.image} alt={`banner ${index + 1}`} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
