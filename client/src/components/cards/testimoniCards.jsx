import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronRight, ChevronLeft } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const TestimoniCards = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigationReady, setNavigationReady] = useState(false);

  useEffect(() => {
    setNavigationReady(true);
  }, []);

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={15}
        breakpoints={{
          // when window width is >= 768px (desktop)
          768: {
            slidesPerView: 2,
          },
          // when window width is < 768px (mobile)
          0: {
            slidesPerView: 1,
          },
        }}
        navigation={
          navigationReady
            ? {
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }
            : false
        }
        onInit={(swiper) => {
          if (navigationReady) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
      >
        <SwiperSlide>
          <div className="border shadow min-h-65  rounded-sm p-5">
            <h1 className="text-lg font-semibold text-accent-700">Dimasragilnizam Akbar</h1>

            <div className="mt-3">
              <p className="text-gray-600 leading-relaxed">Sangat memuaskan bapaknya ramah, lucu jadi enjoy.harganya juga pas dikantong ga bikin kering. Terimakasih</p>
              <p className="mt-2">⭐⭐⭐⭐⭐</p>
              <p className="mt-5 text-sm text-gray-500">www.ahligigibintaro.com</p>
            </div>
          </div>
        </SwiperSlide>
       
        <SwiperSlide>
          <div className="border shadow min-h-65  rounded-sm p-5">
            <h1 className="text-lg font-semibold text-accent-700">Risky Dwi Saputro</h1>

            <div className="mt-3">
              <p className="text-gray-600 leading-relaxed">Pelayanann sangaat baguss, hasilnyaa jugaa sangaat memuaskaan, topp pokoknyaaaa</p>
              <p className="mt-2">⭐⭐⭐⭐⭐</p>
              <p className="mt-5 text-sm text-gray-500">www.ahligigibintaro.com</p>
            </div>
          </div>
        </SwiperSlide>
       
        <SwiperSlide>
          <div className="border shadow min-h-65  rounded-sm p-5">
            <h1 className="text-lg font-semibold text-accent-700">Risky Bakti</h1>

            <div className="mt-3">
              <p className="text-gray-600 leading-relaxed">Terimakasih saya suka dengan hasilnya yang memuaskan, pelayanan pun juga sangat baik</p>
              <p className="mt-2">⭐⭐⭐⭐⭐</p>
              <p className="mt-5 text-sm text-gray-500">www.ahligigibintaro.com</p>
            </div>
          </div>
        </SwiperSlide>
       
        <SwiperSlide>
          <div className="border shadow min-h-65  rounded-sm p-5">
            <h1 className="text-lg font-semibold text-accent-700">Muhammad Roffi</h1>

            <div className="mt-3">
              <p className="text-gray-600 leading-relaxed">Pelayanan okee fasilitas cukup lengkap pokoknya joss</p>
              <p className="mt-2">⭐⭐⭐⭐⭐</p>
              <p className="mt-5 text-sm text-gray-500">www.ahligigibintaro.com</p>
            </div>
          </div>
        </SwiperSlide>
       
        <SwiperSlide>
          <div className="border shadow min-h-65  rounded-sm p-5">
            <h1 className="text-lg font-semibold text-accent-700">Alfan</h1>

            <div className="mt-3">
              <p className="text-gray-600 leading-relaxed">Tempat perawatan gigi yang sangat recomend, sangat ramah dan tempatnya bersih 🤩</p>
              <p className="mt-2">⭐⭐⭐⭐⭐</p>
              <p className="mt-5 text-sm text-gray-500">www.ahligigibintaro.com</p>
            </div>
          </div>
       
        </SwiperSlide>
     
        <SwiperSlide>
          <div className="border shadow min-h-65  rounded-sm p-5">
            <h1 className="text-lg font-semibold text-accent-700">Tifa Aulia Cantika</h1>

            <div className="mt-3">
              <p className="text-gray-600 leading-relaxed">bagus sekali kualitas bintang 5</p>
              <p className="mt-2">⭐⭐⭐⭐⭐</p>
              <p className="mt-5 text-sm text-gray-500">www.ahligigibintaro.com</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-end mt-5 gap-3">
        <button ref={prevRef} className="bg-accent-700 rounded-full p-2 shadow cursor-pointer">
          <ChevronLeft color="white" />
        </button>
        <button ref={nextRef} className="bg-accent-700 rounded-full p-2 shadow cursor-pointer">
          <ChevronRight color="white" />
        </button>
      </div>
    </div>
  );
};

export default TestimoniCards;
