import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Loader from "@/components/ui/loader";
import axios from "axios";
import { Pencil } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router";

const LogoPage = () => {
  const { id } = useParams();
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [logoId, setLogoId] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [error, setError] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const fetchLogo = async () => {
    setLoading(true);
    setError(false);
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/logo/get-all`, {
        withCredentials: true,
      });
      if (data.success) {
        setLogoId(data.data._id);
        setImagePreview(data.data.image);
      } else {
        setError(true);
        // Tidak perlu toast.error di sini
      }
    } catch (error) {
      setError(true);
      console.error("Error fetching logo:", error);
      toast.error("Failed to fetch logo.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogo(id);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center flex-col gap-2 items-center min-h-[200px]">
        <Loader className="border-4 w-16 h-16" />
        <h1 className="text-gray-300 font-semibold text-md">Fething data...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10 space-y-1">
        <h1 className="text-accent-700 font-semibold text-2xl">Logo Not Found 🥲</h1>
        <p className="text-gray-400">
          The logo you are looking for does not exist or could not be retrieved.{" "}
          <Link to={"/dashboard"} className="underline  font-medium text-accent-600 italic">
            Back to home page
          </Link>
        </p>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitLoading(true);

    try {
      const formData = new FormData();

      if (imageFile) {
        formData.append("image", imageFile);
      }

      await toast.promise(
        axios.patch(`${import.meta.env.VITE_API_URL}/api/logo/update/${logoId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }),
        {
          loading: "Updating logo...",
          success: (res) => {
            if (res.data.success) {
              setImageFile(null);
              // Optional: redirect or update UI
              return "Logo updated successfully!";
            }
            throw new Error(res.data.message || "Failed to update logo.");
          },
          error: (err) => err?.response?.data?.message || err.message || "An error occurred.",
        }
      );
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div>
      <h1 className="font-bold text-white text-2xl">Edit Logo</h1>

      <form onSubmit={handleSubmit} className="bg-[#052B2D] mt-5 h rounded-md p-5">
        <div className="md:flex space-y-3 md:space-y-0 gap-3 w-full">
          <div className="md:w-1/2 space-y-0.5">
            <Label htmlFor="image" className={"text-zinc-200 font-semibold text-md"}>
              Image<span className="text-red-400">*</span>
            </Label>
            <div className="space-y-2">
              <Input
                ref={fileInputRef}
                onChange={handleImageChange}
                accept=".jpg,.jpeg,.png"
                type={"file"}
                id="image"
                placeholder="Enter title..."
                className={"bg-[#0e1d1e] file:text-white file:font-bold text-zinc-500  selection:bg-accent-700 border-none "}
              />
            </div>
          </div>
        </div>

        <div className="rounded-full aspect-square w-50  mt-3 flex items-center justify-center  border-zinc-600 p-2  border-2 border-dashed   overflow-hidden">
          {imagePreview ? <img src={imagePreview} alt="image preview" className={`w-full h-full   ${!imagePreview ? "brightness-100" : "object-contain"}`} /> : <p className="text-zinc-500">Logo Image</p>}
        </div>

        <div className="mt-5 w-full">
          <Button disabled={submitLoading} type="submit" className={"bg-accent-700  cursor-pointer w-full md:w-50 hover:bg-accent-600  font-semibold text-white  "}>
            {submitLoading ? (
              <Loader className={"w-5 h-5 border-white border-2 "} />
            ) : (
              <>
                Update <Pencil className="inline ml-1" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LogoPage;
