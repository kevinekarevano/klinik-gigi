import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronRight, ChevronLeft } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

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
          <div className="border shadow  rounded-sm p-5">
            <div className="flex items-center gap-4">
              <Avatar className={"w-14 h-14"}>
                <AvatarImage src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-lg font-semibold text-accent-700">Customer 1</p>
            </div>

            <div className="mt-3">
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa maiores similique voluptatibus enim voluptatum harum fuga? Repellat earum possimus odio nostrum eum reprehenderit harum consectetur doloremque architecto
                fugiat. Perspiciatis.
              </p>
              <p className="mt-2">⭐⭐⭐⭐⭐</p>
              <p className="mt-5 text-sm text-gray-500">www.ahligigibintaro.com</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border shadow  rounded-sm p-5">
            <div className="flex items-center gap-4">
              <Avatar className={"w-14 h-14"}>
                <AvatarImage src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-lg font-semibold text-accent-700">Customer 1</p>
            </div>

            <div className="mt-3">
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa maiores similique voluptatibus enim voluptatum harum fuga? Repellat earum possimus odio nostrum eum reprehenderit harum consectetur doloremque architecto
                fugiat. Perspiciatis.
              </p>
              <p className="mt-2">⭐⭐⭐⭐⭐</p>
              <p className="mt-5 text-sm text-gray-500">www.ahligigibintaro.com</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border shadow  rounded-sm p-5">
            <div className="flex items-center gap-4">
              <Avatar className={"w-14 h-14"}>
                <AvatarImage src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-lg font-semibold text-accent-700">Customer 1</p>
            </div>

            <div className="mt-3">
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa maiores similique voluptatibus enim voluptatum harum fuga? Repellat earum possimus odio nostrum eum reprehenderit harum consectetur doloremque architecto
                fugiat. Perspiciatis.
              </p>
              <p className="mt-2">⭐⭐⭐⭐⭐</p>
              <p className="mt-5 text-sm text-gray-500">www.ahligigibintaro.com</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border shadow  rounded-sm p-5">
            <div className="flex items-center gap-4">
              <Avatar className={"w-14 h-14"}>
                <AvatarImage src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-lg font-semibold text-accent-700">Customer 1</p>
            </div>

            <div className="mt-3">
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa maiores similique voluptatibus enim voluptatum harum fuga? Repellat earum possimus odio nostrum eum reprehenderit harum consectetur doloremque architecto
                fugiat. Perspiciatis.
              </p>
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
