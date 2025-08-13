import { Link, useNavigate } from "react-router";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut } from "lucide-react";
import useAuthStore from "@/store/auth-store";
import useLogoStore from "@/store/logo-store";

const DashboardNavbar = () => {
  const logo = useLogoStore((state) => state.logo);
  const navigate = useNavigate();
  const logout = useAuthStore((s) => s.logout);
  const user = useAuthStore((s) => s.user);

  const handleLogout = async () => {
    await logout();

    navigate("/login/admin", { replace: true });
  };

  return (
    <nav className=" bg-accent-800 sticky  top-0 z-50 w-full shadow-md ">
      <div className="p-2 flex justify-between">
        <Link to={"/dashboard"}>
          <div className="flex gap-1 items-center">
            <img className="w-13 md:w-16" src={logo?.image} alt="logo ahli gigi bintaro" />
            <span className="text-2xl md:text-4xl font-thin text-zinc-200 mr-2">|</span>
            <h1 className="text-lg md:text-xl  text-zinc-200">Dashboard</h1>
          </div>
        </Link>

        <div className="flex items-center gap-2 text-white">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="w-11 h-11 hover:scale-105 transition-all duration-500 cursor-pointer ease-in-out">
                <AvatarImage className={"object-cover"} src={""} />
                <AvatarFallback className={"font-poppins font-bold text-lg text-white bg-[#1b3034]"}>AD</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-accent-900 border-accent-950 border-2">
              <DropdownMenuLabel className={"text-zinc-200"}>{user?.username}</DropdownMenuLabel>
              <DropdownMenuSeparator className={"bg-zinc-800"} />
              <DropdownMenuItem onClick={handleLogout} className={"cursor-pointer  text-red-500 font-semibold "}>
                Logout <LogOut className="text-red-500 font-semibold" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <p className="hidden md:block">
            Welcome, <span className="font-semibold">{user?.username}</span> <span className="text-lg">👋</span>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
