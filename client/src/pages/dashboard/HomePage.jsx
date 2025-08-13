import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Link } from "react-router";
import HeroSlider from "@/components/heroSlider";
import CountUp from "react-countup";
import axios from "axios";

const HomePageDashboard = () => {
  const [now, setNow] = useState(dayjs());
  const [counts, setCounts] = useState({
    services: 0,
    articles: 0,
    banners: 0,
    galleries: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(dayjs());
    }, 1000); // update setiap detik

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [servicesRes, articlesRes, bannersRes, galleriesRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/api/service/get-all`),
          axios.get(`${import.meta.env.VITE_API_URL}/api/blog/get-all`),
          axios.get(`${import.meta.env.VITE_API_URL}/api/banner/get-all`),
          axios.get(`${import.meta.env.VITE_API_URL}/api/gallery/get-all`),
        ]);
        setCounts({
          services: servicesRes.data.data.length,
          articles: articlesRes.data.data.length,
          banners: bannersRes.data.data.length,
          galleries: galleriesRes.data.data.length,
        });
      } catch (err) {
        console.error("Error fetching counts:", err);
        setCounts({
          services: 0,
          articles: 0,
          banners: 0,
          galleries: 0,
        });
      }
    };
    fetchCounts();
  }, []);

  return (
    <div>
      
      <h1 className="font-bold text-white text-2xl">Home</h1>
      <div className="mt-4">
        <h2 className="text-zinc-200 text-4xl">
          Ahli Gigi Bintaro <span className="font-thin">|</span> Dashboard
        </h2>
        <p className="text-zinc-300 text-lg">{now.format("dddd, DD MMMM YYYY HH:mm:ss")}</p>
      </div>

      <div className="mt-5 bg-[#052B2D] p-2  rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <div className="bg-[#106065] p-5 rounded-md">
              <div className="font-bold text-2xl text-white">
                <CountUp end={counts.services} duration={2} />
              </div>
              <p className="text-2xl text-zinc-200">Services</p>
              <div className="mt-2">
                <Link to={"/dashboard/services"} className="underline font text-accent-200 italic">
                  View Services
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[#16787f] p-5 rounded-md">
            <p className="font-bold text-2xl text-white">
              <CountUp end={counts.articles} duration={2} />
            </p>
            <p className="text-2xl text-zinc-200">Articles</p>
            <div className="mt-2">
              <Link to={"/dashboard/articles"} className="underline font text-accent-200 italic">
                View Articles
              </Link>
            </div>
          </div>
          <div className="bg-[#1b8991] p-5 rounded-md">
            <p className="font-bold text-2xl text-white">
              <CountUp end={counts.banners} duration={2} />
            </p>
            <p className="text-2xl text-zinc-200">Banner</p>
            <div className="mt-2">
              <Link to={"/dashboard/banners"} className="underline font text-accent-200 italic">
                View Banners
              </Link>
            </div>
          </div>
          <div className="bg-[#26a2aa] p-5 rounded-md">
            <p className="font-bold text-2xl text-white">
              <CountUp end={counts.galleries} duration={2} />
            </p>
            <p className="text-2xl text-zinc-200">Galleries</p>
            <div className="mt-2">
              <Link to={"/dashboard/galleries"} className="underline font text-accent-200 italic">
                View Galleries
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-5  rounded-md overflow-hidden">
          <HeroSlider />
        </div>
      </div>
    </div>
  );
};

export default HomePageDashboard;
