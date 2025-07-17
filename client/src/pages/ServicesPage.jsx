import Cards from "@/components/cards/cards";

const ServicesPage = () => {
  return (
    <div className="container mx-auto max-w-7xl px-5 md:mt-18 mb-20">
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
    </div>
  );
};

export default ServicesPage;
