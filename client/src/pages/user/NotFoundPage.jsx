import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-teal-100 to-slate-100 flex justify-center text-center items-center">
      <div>
        <h1 className="text-9xl font-bold text-accent-700">404</h1>
        <h2 className="font-medium text-2xl text-accent-600">Not Found</h2>
        <p className="text-zinc-800 italic font-light mt-2">
          Maaf! Halaman tidak ditemukan 🥲,{" "}
          <Link to={"/"} className="font-semibold text-accent-800 underline">
            Kembali ke beranda
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
