import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Loader from "@/components/ui/loader";
import axios from "axios";
import { ImagePlus } from "lucide-react";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";

const CreateBannerPage = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("image", imageFile);

    await toast.promise(
      axios.post(`${import.meta.env.VITE_API_URL}/api/banner/create`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      }),
      {
        loading: "Creating banner...",
        success: (res) => {
          if (res.data.success) {
            setImageFile(null);
            setImagePreview(null);
            if (fileInputRef.current) fileInputRef.current.value = ""; // reset file input
            return "Banner created successfully!";
          }
          throw new Error(res.data.message || "Failed to create banner.");
        },
        error: (err) => err?.response?.data?.message || err.message || "An error occurred.",
      }
    );

    setLoading(false);
  };

  return (
    <div>
      <h1 className="font-bold text-white text-2xl">Create New Banner</h1>

      <form onSubmit={handleSubmit} className="bg-[#052B2D] mt-5 h rounded-md p-5">
        <div className="md:flex space-y-3 md:space-y-0 gap-3 w-full">
          <div className="md:w-1/2 space-y-0.5">
            <Label htmlFor="image" className={"text-zinc-200 font-semibold text-md"}>
              Image<span className="text-red-400">*</span>
            </Label>
            <div className="space-y-2">
              <Input ref={fileInputRef} onChange={handleImageChange} accept=".jpg,.jpeg,.png" required type={"file"} id="image" className={"bg-[#0e1d1e] file:text-white file:font-bold text-zinc-500  selection:bg-accent-700 border-none "} />
            </div>
          </div>
        </div>

        <div className="aspect-video md:w-1/4 mt-3 flex items-center justify-center  border-zinc-600 border-2 border-dashed p-2  rounded  overflow-hidden">
          {imagePreview ? (
            <img src={imagePreview} alt="image preview" className={`w-full h-full  ${!imagePreview ? "brightness-100" : "object-cover"}`} />
          ) : (
            <p className="text-zinc-500">
              Banner Image <br />
              <span className="font-bold">1440 x 650 px !</span>
            </p>
          )}
        </div>

        <div className="mt-5 flex gap-2 flex-wrap">
          <Button disabled={loading} type="submit" className={"bg-accent-700 cursor-pointer w-50 hover:bg-accent-600  font-semibold text-white  "}>
            {loading ? (
              <Loader className={"w-5 h-5 border-white border-2 "} />
            ) : (
              <>
                Create <ImagePlus className="inline ml-1" />
              </>
            )}
          </Button>

          <Link to={loading ? "" : "/dashboard/banners"}>
            <Button disabled={loading} className={"bg-red-700 cursor-pointer  font-semibold hover:bg-red-600 text-white  "}>
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateBannerPage;
