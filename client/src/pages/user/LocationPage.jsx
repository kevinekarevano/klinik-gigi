import { Separator } from "@/components/ui/separator";
import { Clock } from "lucide-react";

const LocationPage = () => {
  return (
    <div className="container mx-auto max-w-7xl px-5 md:mt-18 mb-20">
      <section className="container mx-auto max-w-7xl px-5 mt-15">
        <div>
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">Lokasi Praktik</h1>
            <img src="https://res.cloudinary.com/du6yvy7yw/image/upload/v1752741571/location_dpc4t9.webp" alt="Location Icon" className="w-8 md:w-11 rotate-15 hover:rotate-20 duration-75 " />
          </div>
          <p className="mt-3 text-sm md:text-base text-center">
            Kenyamanan Perawatan Dimulai dari <span className="text-accent-700 font-semibold">Lokasi yang Mudah Ditemukan.</span>
          </p>
        </div>

        <div className="mt-10 md:flex gap-5">
          <div className="w-full h-64 lg:h-80 bg-gray-800 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8528.38549758865!2d106.72634176996287!3d-6.273026809524164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1c81b8e0735%3A0x994a4c2e291b8551!2sAhli%20Gigi%20Bintaro!5e0!3m2!1sid!2sid!4v1752579979913!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="mt-5 md:mt-0 text-zinc-700">
            <h2 className="text-3xl text-zinc-800 font-semibold">Ahli Gigi Bintaro</h2>
            <p className="mt-1">Bintaro sektor 5 Jl. H. Riban, Jurang Mangu Barat, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15222</p>

            <ul className="mt-5">
              <li>
                <span className="font-semibold">Telp:</span> +62 21 1234 5678
              </li>
              <li>
                <span className="font-semibold">Email:</span> ahligigibintaro@gmail.com
              </li>
              <li>
                <Separator className={"mt-5"} />
                <div className="flex items-center gap-2 mt-5">
                  <Clock />
                  <p>
                    {" "}
                    <span className="font-semibold">Senin - Jumat</span> : Buka 07.00 - 23.00 WIB
                  </p>
                </div>

                <Separator className={"mt-5"} />
                <div className="flex items-center gap-2 mt-5">
                  <Clock />
                  <p>
                    <span className="font-semibold">Sabtu</span> : Buka 08.00 - 23.00 WIB
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
