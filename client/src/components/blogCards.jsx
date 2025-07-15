import { ArrowRight } from "lucide-react";

const BlogCards = () => {
  const newsItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
      title: "Tips Merawat Gigi Palsu Agar Awet",
      description: "Pelajari cara merawat gigi palsu dengan benar agar tetap nyaman digunakan dan tahan lama. Simak tips sederhana yang bisa Anda lakukan di rumah.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      title: "Perbedaan Gigi Palsu Akrilik dan Valplast",
      description: "Kenali kelebihan dan kekurangan gigi palsu akrilik dan valplast sebelum memilih yang paling sesuai dengan kebutuhan Anda.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      title: "Proses Pemasangan Gigi Palsu: Apa yang Perlu Diketahui?",
      description: "Proses pemasangan gigi palsu ternyata mudah dan cepat. Ketahui langkah-langkahnya agar Anda lebih siap sebelum ke klinik.",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      title: "Mitos dan Fakta Seputar Gigi Palsu",
      description: "Masih banyak mitos tentang gigi palsu yang beredar di masyarakat. Cari tahu fakta sebenarnya agar tidak salah paham.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white rounded-sm shadow overflow-hidden ">
            {/* Image Section */}
            <div className="relative">
              <img src={item.image} alt={item.title} className="w-full hover:scale-105 duration-500 h-48 object-cover" />
              {/* Category Badge */}
              <div className={`absolute top-4 left-4 bg-accent-700 text-white px-3 py-1 rounded text-sm font-medium`}>Artikel</div>
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

export default BlogCards;
