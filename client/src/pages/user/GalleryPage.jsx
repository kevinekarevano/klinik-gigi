import GalleryCards from "@/components/cards/galleryCards";

const GalleryPage = () => {
  return (
    <div className="container mx-auto max-w-7xl px-5 md:mt-18 mb-20">
      <title>Ahli Gigi Bintaro - Gallery</title>

      <section className="container mx-auto max-w-7xl px-5 mt-15">
        <div>
          <div className="flex items-center justify-center gap-3">
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
    </div>
  );
};

export default GalleryPage;
