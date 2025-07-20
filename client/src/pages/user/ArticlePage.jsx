import BlogCards from "@/components/cards/blogCards";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const ArticlePage = () => {
  return (
    <div className="container mx-auto max-w-7xl px-5 md:mt-18 mb-20">
      <section className="container mx-auto max-w-7xl px-5 mt-15">
        <div>
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">Artikel Terbaru</h1>
            <img src="https://res.cloudinary.com/du6yvy7yw/image/upload/v1752741471/news_oewhao.webp" alt="Nwes Icon" className="w-10 md:w-15 rotate-6 hover:rotate-12 duration-75 " />
          </div>
          <p className="mt-3 text-sm md:text-base text-center">
            Dapatkan <span className="text-accent-700 font-semibold">Tips dan Edukasi</span> Terbaru untuk Merawat Senyum Anda
          </p>
        </div>

        <div className="mt-10">
          <div className="flex items-center mx-auto mb-10  border-accent-700 border-2 rounded-md px-2 w-full md:w-1/3  ">
            <Input placeholder="Cari berita di sini..." className={"border-none selection:bg-accent-700 w-full shadow-none"} />
            <Search className="text-accent-800" />
          </div>
          <BlogCards />
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
