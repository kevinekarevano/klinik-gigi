import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronRight, ChevronLeft } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
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
        <SwiperSlide>
          <img src="https://res.cloudinary.com/du6yvy7yw/image/upload/v1752743452/banner_1_iz8tz9.webp" alt="banner1" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/du6yvy7yw/image/upload/v1752743450/banner_2_dakbtq.webp" alt="banner2" className="w-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
