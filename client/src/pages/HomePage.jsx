import HeroSlider from "@/components/heroSlider";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, MessageCircleMore, Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Cards from "@/components/cards/cards";
import TestimoniCards from "@/components/cards/testimoniCards";
import { Input } from "@/components/ui/input";
import BlogCards from "@/components/cards/blogCards";
import { Link } from "react-router";
import GalleryCards from "@/components/cards/galleryCards";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />

      {/* Welcomeing Section */}
      <section className="container mx-auto max-w-7xl px-5  ">
        <div className="text-center py-10">
          <div className="md:flex items-center justify-between">
            <div className="flex items-center gap-2 justify-center">
              <h1>Selamat Datang</h1>
              <span className="text-4xl font-thin">|</span>
              <div className="flex items-center">
                <img src="https://res.cloudinary.com/du6yvy7yw/image/upload/v1752577550/Copilot_20250715_175507_sk8uuu.png" alt="logo ahli gigi bintaro" className="w-13 md:w-16" />
                <h2 className="md:text-lg font-medium">Ahli Gigi Bintaro</h2>
              </div>
            </div>
            <a href={`https://wa.me/6281510718728?text=Halo,%20saya%20ingin%20membuat%20janji%20dengan%20Ahli%20Gigi%20Bintaro`} target="_blank">
              <Button className={"bg-accent-700 cursor-pointer rounded-full  hover:bg-accent-600 text-white  mt-7 md:mt-0"}>
                Buat Janji Sekarang <MessageCircleMore />
              </Button>
            </a>
          </div>
        </div>
        <Separator className={"bg-accent-700"} />
      </section>

      {/* Hero Section */}
      <section className="container  mx-auto max-w-7xl px-5 mt-13">
        <div className="flex md:flex-row flex-col-reverse items-center">
          <div>
            <h1 className="text-4xl  lg:text-5xl  md:w-3/4  ">
              Ahli Gigi dan tim kami <span className="text-accent-600 font-medium">siap merawat Anda</span> dan senyum Anda
            </h1>
            <p className="mt-3 text-sm md:text-base">
              Kembalikan senyum penuh percaya diri Anda dengan <span className="text-accent-700 font-semibold">layanan gigi palsu terbaik di Bintaro.</span>
            </p>
            <a href={`https://wa.me/6281510718728?text=Halo,%20saya%20ingin%20membuat%20janji%20dengan%20Ahli%20Gigi%20Bintaro`} target="_blank">
              <Button className={"bg-accent-700 cursor-pointer  hover:bg-accent-600 text-white mt-5"}>
                Buat Janji Sekarang <MessageCircleMore />
              </Button>
            </a>
          </div>
          <img src="https://res.cloudinary.com/du6yvy7yw/image/upload/v1752740567/Dentish_l1b8st.webp" alt="" className="w-100 mb-10   " />
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto max-w-7xl px-5 mt-15">
        <div>
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">Layanan Kami</h1>
            <img src="https://res.cloudinary.com/du6yvy7yw/image/upload/v1752741650/gigi1_rtez47.webp" alt="Gigi Icon" className="w-8 md:w-10 rotate-6 hover:rotate-12 duration-75 " />
          </div>
          <p className="mt-3 text-sm md:text-base text-center">
            <span className="text-accent-700 font-semibold">Gigi palsu berkualitas </span> untuk kenyamanan dan kepercayaan diri Anda.
          </p>
        </div>

        <div className="mt-10">
          <Cards />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto max-w-7xl px-5 mt-15">
        <div>
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center">Kenapa Memilih Kami?</h1>
            <img src="https://res.cloudinary.com/du6yvy7yw/image/upload/v1752741863/gigi2_gki8mv.webp" alt="Gigi Icon" className="w-8 md:w-12 rotate-6 hover:rotate-12 duration-75 " />
          </div>
          <p className="mt-3 text-sm md:text-base text-center">
            Pilihan tepat untuk gigi palsu yang <span className="text-accent-700 font-semibold">nyaman, estetik, dan terpercaya.</span>
          </p>
        </div>

        <div className="mt-10">
          <img src="https://res.cloudinary.com/du6yvy7yw/image/upload/v1752740751/whyChooseUs-1_g0mvkw.webp" alt="Kenapa Memilih Kami" className="hidden md:block" />
          <img src="https://res.cloudinary.com/du6yvy7yw/image/upload/v1752740750/whyChooseUs-2_uywu65.webp" alt="Kenapa Memilih Kami" className="w-full md:hidden" />
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="container mx-auto max-w-7xl px-5 mt-20">
        <div>
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center">Apa Kata Mereka?</h1>
            <img src="https://res.cloudinary.com/du6yvy7yw/image/upload/v1752741373/star_mhhpnw.webp" alt="Stars Icon" className="w-8 md:w-12 rotate-12 hover:rotate-16 duration-75 " />
          </div>
          <p className="mt-3 text-sm md:text-base text-center">
            {" "}
            <span className="text-accent-700 font-semibold">Testimoni pasien </span> tentang layanan gigi palsu kami.
          </p>
        </div>

        <div className="mt-10 ">
          <TestimoniCards />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto max-w-7xl px-5 mt-15">
        <div>
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">Galeri Portofolio</h1>
            <img src="https://res.cloudinary.com/du6yvy7yw/image/upload/v1752741770/gallery_arxcmq.webp" alt="Gallery Icon" className="w-8 md:w-10 rotate-6 hover:rotate-12 duration-75 " />
          </div>
          <p className="mt-3 text-sm md:text-base text-center">
            <span className="text-accent-700 font-semibold">Lihat Bukti Nyata</span> dari Setiap Senyum Penuh Kepercayaan Diri.
          </p>
        </div>

        <div className="mt-10">
          <GalleryCards />
        </div>
      </section>

      {/* Article Section */}
      <section className="container mx-auto max-w-7xl px-5 mt-19 md:mt-25">
        <div>
          <div className="flex items-center  gap-2">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold ">Artikel Terbaru</h1>
            <img src="https://res.cloudinary.com/du6yvy7yw/image/upload/v1752741471/news_oewhao.webp" alt="News Icon" className="w-8 md:w-14  hover:rotate-8 duration-75 " />
          </div>
          <p className="mt-3 text-sm md:text-base ">
            Dapatkan <span className="text-accent-700 font-semibold">tips, edukasi, dan cerita menarik</span> seputar dunia gigi palsu.
          </p>
        </div>

        <div className="mt-8 md:mt-10 ">
          <div className="md:flex justify-between items-center">
            <div className="flex items-center  border-accent-700 border-2 rounded-md px-2 w-full md:w-1/3  ">
              <Input placeholder="Cari berita di sini..." className={"border-none selection:bg-accent-700 w-full shadow-none"} />
              <Search className="text-accent-800" />
            </div>
            <Link to={"/article"}>
              <Button className={"bg-accent-700 cursor-pointer hidden md:flex hover:bg-accent-600 text-white  "}>
                Lihat Selengkapnya <ChevronRight />
              </Button>
            </Link>
          </div>

          <div className="mt-8">
            <Link to={"/article"}>
              <Button className={"bg-accent-700 cursor-pointer mb-3 md:hidden hover:bg-accent-600 text-white  "}>
                Lihat Selengkapnya <ChevronRight />
              </Button>
            </Link>

            <BlogCards />
          </div>
        </div>
      </section>

      {/* Opening Schedule Section */}
      <section className="container mx-auto max-w-7xl px-5 mt-15 mb-20">
        <div className="md:flex justify-between items-center ">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-2xl lg:text-3xl font-medium  ">
              Hadirkan senyum sehat Anda <span className="text-accent-700"> melalui perawatan gigi yang nyaman dan optimal.</span>
            </h1>

            <Separator className={"mt-5"} />
            <div className="flex items-center gap-2 mt-5">
              <Clock />
              <p>Senin - Jumat : Buka 07.00 - 23.00 WIB</p>
            </div>

            <Separator className={"mt-5"} />
            <div className="flex items-center gap-2 mt-5">
              <Clock />
              <p>Sabtu : Buka 08.00 - 23.00 WIB</p>
            </div>
            <a href={`https://wa.me/6281510718728?text=Halo,%20saya%20ingin%20membuat%20janji%20dengan%20Ahli%20Gigi%20Bintaro`} target="_blank">
              <Button className={"bg-accent-700 cursor-pointer   hover:bg-accent-600 text-white  mt-8 "}>
                Buat Janji Sekarang <MessageCircleMore />
              </Button>
            </a>
          </div>

          <img src="https://res.cloudinary.com/du6yvy7yw/image/upload/v1752740937/Gigi_Frame_b91cwd.webp" alt="gambar gigi dengan ilustrasi" className=" mx-auto md:mx-0 max-w-2/3   md:w-1/3 mt-25 md:mt-0" />
        </div>
      </section>

      {/* Footer Image */}
      <div className="w-full h-60 relative mt-35 ">
        <img src="https://res.cloudinary.com/du6yvy7yw/image/upload/v1752741055/suasana_klinik_mphxgd.webp" alt="Suasana Klinik Ahli Gigi Bintaro" className="w-full grayscale-50 brightness-50 sepia-50 h-full object-cover" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-center -translate-y-1/2 ">
          <div className="flex items-center justify-center gap-3">
            <img src="https://res.cloudinary.com/du6yvy7yw/image/upload/c_crop,w_850,h_850/v1752577550/Copilot_20250715_175507_sk8uuu.png" alt="logo" className="w-16 hidden md:block mx-auto" />
            <p className="text-white text-xl md:text-4xl font-semibold">Ahli Gigi Bintaro</p>
          </div>
          <Separator className={"mt-3 bg-zinc-200"} />
          <a href={`https://wa.me/6281510718728?text=Halo,%20saya%20ingin%20membuat%20janji%20dengan%20Ahli%20Gigi%20Bintaro`} target="_blank">
            <Button className={"border-2 bg-transparent cursor-pointer   hover:bg-accent-600/70 text-white font-semibold  mt-6 "}>
              Buat Janji Sekarang <MessageCircleMore />
            </Button>
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
