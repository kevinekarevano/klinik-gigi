import { ArrowRight } from "lucide-react";

const GalleryCards = () => {
  const newsItems = [
    {
      id: 1,
      image: "https://res.cloudinary.com/du6yvy7yw/image/upload/v1752643631/Group_12_ukuxyr.webp",
      title: "Gigi Palsu Akrilik",
      description: "Gigi palsu akrilik adalah gigi palsu yang di buat dari bahan akrilik baik gigi maupun platnya, proses pembuatan gigi palsu akrilik yaitu pencetakan langsung di mulut pasien untuk sample pembuatan gigi palsu.",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/du6yvy7yw/image/upload/v1752643629/Group_14_kcwivl.webp",
      title: "Gigi Palsu Valplast",
      description: "Gigi palsu valplast terbuat dari bahan thermoplastik, kelebihannya yaitu kelenturannya sehingga tidak mudah patah apabila terjatuh, dan juga tidak memerlukan kawat penyangga",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/du6yvy7yw/image/upload/v1752643629/Group_15_ri29fx.webp",
      title: "Gigi Palsu Thermoshen",
      description:
        "Gigi tiruan bahan thermosens. Gigi tiruan lepasan plat thermosens termasuk salah satu jenis gigi palsu terbaru dan terfavorit. Mirip dengan valplast karena cukup fleksibel, tetapi sangat kuat dan bisa menggantikan kehilangan banyak gigi.",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/du6yvy7yw/image/upload/v1752643629/Group_11_ltej01.webp",
      title: "Gigi Palsu Frame",
      description: "Gigi palsu frame adalah gigi palsu lepasan yang terbuat dari bahan logam jenis titanium anti karat sebagai platnya yang di kombinasikan dengan bahan akrilik ataupun valplast.",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/du6yvy7yw/image/upload/v1752643628/Group_10_e7hyo3.webp",
      title: "Gigi Palsu Frame",
      description: "Gigi palsu frame adalah gigi palsu lepasan yang terbuat dari bahan logam jenis titanium anti karat sebagai platnya yang di kombinasikan dengan bahan akrilik ataupun valplast.",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/du6yvy7yw/image/upload/v1752643628/Group_13_lxszoj.webp",
      title: "Gigi Palsu Frame",
      description: "Gigi palsu frame adalah gigi palsu lepasan yang terbuat dari bahan logam jenis titanium anti karat sebagai platnya yang di kombinasikan dengan bahan akrilik ataupun valplast.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white rounded-sm shadow overflow-hidden ">
            {/* Image Section */}
            <div className="relative">
              <img src={item.image} alt={item.title} className="w-full hover:scale-105 duration-500 h-80 object-cover" />
              {/* Category Badge */}
              <div className={`absolute top-4 left-4 bg-accent-700 text-white px-3 py-1 rounded text-sm font-medium`}>Galeri</div>
              <div className={`absolute bottom-0 right-0 bg-accent-700 text-white px-3 py-1 rounded-tl-sm text-sm font-medium`}>ahligigibintaro.com</div>
            </div>

            {/* Content Section */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCards;
