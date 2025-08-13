import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Loader from "@/components/ui/loader";
import useAuthStore from "@/store/auth-store";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const checkAuth = useAuthStore((s) => s.checkAuth);

  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (data.success) {
        toast(data.message || "Login successful!", {
          icon: "🎉",
        });
        await checkAuth();
        navigate("/dashboard");
      } else {
        toast(data.message || "Login failed. Please try again.", {
          icon: "🥲",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast(error?.response?.data?.message || "An error occurred during login.", {
        icon: "🥲",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-teal-100 to-slate-100 flex px-4 justify-center text-center items-center">
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-5">
        <div>
          <img src="https://res.cloudinary.com/du6yvy7yw/image/upload/v1752743605/logo_ahliGigiBintaro_qj4db6.webp" alt="logo ahli gigi bintaro" className="w-1/3 mx-auto" />
          <h1 className="text-accent-900 text-xl font-semibold">
            Welcome to, Ahli Gigi Bintaro <span>👋</span>
          </h1>
        </div>
        <div className="mt-7">
          <Label htmlFor={"username"} className={"text-accent-900 font-semibold mb-1"}>
            Username
          </Label>

          <Input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            id="username"
            placeholder="Enter your username here..."
            className={" border-accent-900 focus:border-accent-900 selection:bg-accent-900 border-2 w-full placeholder:text-sm  shadow-none"}
          />
        </div>
        <div>
          <Label htmlFor={"password"} className={"text-accent-900 font-semibold mb-1"}>
            Password
          </Label>

          <Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="password"
            type={"password"}
            placeholder="Enter your password here..."
            className={" border-accent-900 placeholder:text-sm focus:border-accent-900 selection:bg-accent-900 border-2 w-full  shadow-none"}
          />
        </div>
        <Button disabled={loading} type="submit" className={"w-full bg-accent-900 font-semibold text-lg py-5 cursor-pointer hover:bg-accent-800"}>
          {loading ? <Loader className="w-7 h-7 text-white border-2 border-white " /> : "Login"}
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
