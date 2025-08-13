import FroalaEditor from "@/components/rich-editor/FroalaEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Loader from "@/components/ui/loader";
import axios from "axios";
import { Pencil } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router";

const UpdateServicePage = () => {
  const { id } = useParams();
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [content, setContent] = useState("");
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

  const fetchServiceById = async (id) => {
    setLoading(true);
    setError(false);
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/service/${id}`, {
        withCredentials: true,
      });
      if (data.success) {
        setTitle(data.data.title);
        setContent(data.data.content);
        setImagePreview(data.data.image);
      } else {
        setError(true);
        // Tidak perlu toast.error di sini
      }
    } catch (error) {
      setError(true);
      console.error("Error fetching service:", error);
      toast.error("Failed to fetch service.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServiceById(id);
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
        <h1 className="text-accent-700 font-semibold text-2xl">Service Not Found 🥲</h1>
        <p className="text-gray-400">
          The service you are looking for does not exist or could not be retrieved.{" "}
          <Link to={"/dashboard/services"} className="underline  font-medium text-accent-600 italic">
            Back to Services Page
          </Link>
        </p>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setSubmitLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);

      if (imageFile) {
        formData.append("image", imageFile);
      }

      await toast.promise(
        axios.patch(`${import.meta.env.VITE_API_URL}/api/service/update/${id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }),
        {
          loading: "Updating service...",
          success: (res) => {
            if (res.data.success) {
              setImageFile(null);
              // Optional: redirect or update UI
              return "Service updated successfully!";
            }
            throw new Error(res.data.message || "Failed to update Service.");
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
      <h1 className="font-bold text-white text-2xl">Edit Service</h1>

      <form onSubmit={handleSubmit} className="bg-[#052B2D] mt-5 h rounded-md p-5">
        <div className="md:flex space-y-3 md:space-y-0 gap-3 w-full">
          <div className="md:w-1/2 space-y-0.5">
            <Label htmlFor="title" className={"text-zinc-200 font-semibold text-md"}>
              Name<span className="text-red-400">*</span>
            </Label>
            <Input onChange={(e) => setTitle(e.target.value)} value={title} required id="title" placeholder="Enter title..." className={"bg-[#0e1d1e] text-zinc-200 selection:bg-accent-700 border-none "} />
          </div>

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

        <div className="aspect-video md:w-1/4 mt-3 flex items-center justify-center  border-zinc-600 border-2 border-dashed p-2  rounded  overflow-hidden">
          {imagePreview ? <img src={imagePreview} alt="image preview" className={`w-full h-full  ${!imagePreview ? "brightness-100" : "object-cover"}`} /> : <p className="text-zinc-500">Servie Image</p>}
        </div>

        <div className="mt-10">
          <Label htmlFor="content" className={"text-zinc-200 font-semibold text-md"}>
            Description<span className="text-red-400">*</span>
          </Label>
          <div className="rounded-md bg-white">
            <FroalaEditor onContentChange={setContent} initialContent={content} />
          </div>
        </div>

        <div className="mt-5 flex gap-2 flex-wrap">
          <Button disabled={submitLoading} type="submit" className={"bg-accent-700 cursor-pointer w-50 hover:bg-accent-600  font-semibold text-white  "}>
            {submitLoading ? (
              <Loader className={"w-5 h-5 border-white border-2 "} />
            ) : (
              <>
                Update <Pencil className="inline ml-1" />
              </>
            )}
          </Button>

          <Link to={submitLoading ? "" : "/dashboard/services"}>
            <Button disabled={submitLoading} className={"bg-red-700 cursor-pointer  font-semibold hover:bg-red-600 text-white  "}>
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UpdateServicePage;
