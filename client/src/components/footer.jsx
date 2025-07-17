import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-accent-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Navigation and Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img src="https://res.cloudinary.com/du6yvy7yw/image/upload/c_crop,w_850,h_850/v1752577550/Copilot_20250715_175507_sk8uuu.png" alt="logo" className="w-32 mx-auto" />
            <h2 className="text-2xl font-light mb-8 tracking-wide text-center">Ahli Gigi Bintaro</h2>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-100 mb-4">Navigasi</h3>
            <ul className="space-y-3">
              <li>
                <Link to={"/"} className="text-gray-100 hover:text-white transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/about-us"} className="text-gray-100 hover:text-white transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={"/services"} className="text-gray-100 hover:text-white transition-colors duration-200 text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to={"/gallery"} className="text-gray-100 hover:text-white transition-colors duration-200 text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to={"/article"} className="text-gray-100 hover:text-white transition-colors duration-200 text-sm">
                  Article
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-100 mb-4">Ikuti Kami</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-100 hover:text-white transition-colors duration-200 text-sm">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-100 hover:text-white transition-colors duration-200 text-sm">
                  Tiktok
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-100 hover:text-white transition-colors duration-200 text-sm">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-100 hover:text-white transition-colors duration-200 text-sm">
                  Youtube
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-100 mb-4">Konsultasi :</h3>
            <ul className="space-y-3">
              <li>
                <a href={`https://wa.me/6281510718728?text=Halo,%20saya%20ingin%20membuat%20janji%20dengan%20Ahli%20Gigi%20Bintaro`} target="_blank" className="text-gray-100 hover:text-white transition-colors duration-200 text-sm">
                  Admin 1 - 081510718728
                </a>
              </li>
              <li>
                <a href={`https://wa.me/6285816137431?text=Halo,%20saya%20ingin%20membuat%20janji%20dengan%20Ahli%20Gigi%20Bintaro`} target="_blank" className="text-gray-100 hover:text-white transition-colors duration-200 text-sm">
                  Admin 2 - 085816137431
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Location Section - Full Width on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-100 mb-4">Lokasi</h3>
            <div className="space-y-3">
              <p className="text-gray-100 text-sm">
                Ahli Gigi Bintaro
                <br />
                Bintaro sektor 5 Jl. H. Riban, Jurang Mangu Barat, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15222
              </p>
              <div className="space-y-2">
                <p className="text-gray-100 text-sm">
                  <span className="text-gray-200 font-bold">Telp:</span> +62 815-1071-8728
                </p>
                <p className="text-gray-100 text-sm">
                  <span className="text-gray-200 font-bold">Email:</span> ahligigibintaro@gmail.com
                </p>
                <p className="text-gray-100 text-sm">
                  <span className="text-gray-200 font-bold">Senin - Jumat :</span> 07.00 - 23.00 WIB <br />
                  <span className="text-gray-200 font-bold">Sabtu :</span> 08.00 - 23.00 WIB.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="w-full h-64 lg:h-80 bg-gray-800 rounded-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8528.38549758865!2d106.72634176996287!3d-6.273026809524164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1c81b8e0735%3A0x994a4c2e291b8551!2sAhli%20Gigi%20Bintaro!5e0!3m2!1sid!2sid!4v1752579979913!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-400">
          <p className="text-xs text-center sm:text-start text-gray-100">©2025 Ahli Gigi Bintaro. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
