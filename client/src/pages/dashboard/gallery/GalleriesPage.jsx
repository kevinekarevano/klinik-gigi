import { Button } from "@/components/ui/button";
import { ImagePlus, Trash } from "lucide-react";
import { Link } from "react-router";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "@/components/ui/loader";
import dayjs from "dayjs";
import toast from "react-hot-toast";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const GalleriesPage = () => {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGalleries = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/gallery/get-all`);
      setGalleries(data.data);
    } catch (error) {
      console.error("Gagal mengambil data Gallery:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    await toast.promise(
      axios.delete(`${import.meta.env.VITE_API_URL}/api/gallery/delete/${id}`, {
        withCredentials: true,
      }),
      {
        loading: "Deleting gallery...",
        success: (res) => {
          if (res.data.success) {
            setGalleries((prev) => prev.filter((gallery) => gallery._id !== id));
            return "Gallery deleted successfully.";
          }
          throw new Error(res.data.message || "Failed to delete gallery.");
        },
        error: (err) => err?.response?.data?.message || err.message || "An error occurred.",
      }
    );
  };

  useEffect(() => {
    fetchGalleries();
  }, []);

  return (
    <div>
      <h1 className="font-bold text-white text-2xl">Galleries</h1>

      <div className="mt-5">
        <div className="md:flex justify-between items-center">
          <Link to={"/dashboard/create-gallery"}>
            <Button className={"bg-accent-700 cursor-pointer mt-2 md:mt-0 hover:bg-accent-600 text-white  "}>
              Create New Gallery <ImagePlus />
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-[#052B2D] mt-5 rounded-md p-5">
        <Table>
          <TableCaption>Table of galleries</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">#</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-zinc-400 py-6">
                  <Loader />
                </TableCell>
              </TableRow>
            ) : galleries.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-zinc-400 py-4">
                  Gallery not found.
                </TableCell>
              </TableRow>
            ) : (
              galleries.map((item, index) => {
                return (
                  <TableRow key={index} className={"text-zinc-300"}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <div className="w-24 h-16 rounded-md overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                    </TableCell>
                    <TableCell>{dayjs(item.createdAt).format("D MMMM YYYY HH:mm")}</TableCell>
                    <TableCell>
                      <div className="flex items-center  gap-3">
                        <AlertDialog>
                          <AlertDialogTrigger className="flex gap-1 underline text-red-400 cursor-pointer items-center">
                            <Trash className="w-4" />
                            Delete
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure you want to delete this gallery?</AlertDialogTitle>
                              <AlertDialogDescription>Once deleted, this gallery cannot be recovered.</AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className={"bg-accent-100 cursor-pointer hover:bg-accent-100 hover:text-accent-800 text-accent-900 font-semibold border-none"}>Cancel</AlertDialogCancel>
                              <AlertDialogAction className={"bg-red-500 cursor-pointer hover:bg-red-500 hover:text-white text-white font-semibold border-none"} onClick={() => handleDelete(item._id)}>
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default GalleriesPage;
