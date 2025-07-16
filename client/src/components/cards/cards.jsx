import { ArrowRight } from "lucide-react";

const Cards = () => {
  const newsItems = [
    {
      id: 1,
      image: "services-image/asset-1.jpg",
      title: "Gigi Palsu Akrilik",
      description: "Gigi palsu akrilik adalah gigi palsu yang di buat dari bahan akrilik baik gigi maupun platnya, proses pembuatan gigi palsu akrilik yaitu pencetakan langsung di mulut pasien untuk sample pembuatan gigi palsu.",
    },
    {
      id: 2,
      image: "services-image/asset-2.jpg",
      title: "Gigi Palsu Valplast",
      description: "Gigi palsu valplast terbuat dari bahan thermoplastik, kelebihannya yaitu kelenturannya sehingga tidak mudah patah apabila terjatuh, dan juga tidak memerlukan kawat penyangga",
    },
    {
      id: 3,
      image: "services-image/asset-3.jpg",
      title: "Gigi Palsu Thermoshen",
      description:
        "Gigi tiruan bahan thermosens. Gigi tiruan lepasan plat thermosens termasuk salah satu jenis gigi palsu terbaru dan terfavorit. Mirip dengan valplast karena cukup fleksibel, tetapi sangat kuat dan bisa menggantikan kehilangan banyak gigi.",
    },
    {
      id: 4,
      image: "services-image/asset-4.jpg",
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
              <img src={item.image} alt={item.title} className="w-full hover:scale-105 duration-500 h-48 object-cover" />
              {/* Category Badge */}
              <div className={`absolute top-4 left-4 bg-accent-700 text-white px-3 py-1 rounded text-sm font-medium`}>Layanan</div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{item.description}</p>

              {/* Read More Link */}
              <div className="flex items-center text-accent-700 hover:text-accent-800 cursor-pointer transition-colors">
                <span className="text-sm font-medium">Read More</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
