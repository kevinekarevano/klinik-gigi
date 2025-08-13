import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar";
import useAuthStore from "@/store/auth-store";
import { BookHeart, FilePlus, GalleryHorizontal, Heart, Home, Image, ImagePlus, LogOut, Newspaper } from "lucide-react";
import { NavLink, useNavigate } from "react-router";

const sidebarMenus = [
  {
    label: "Home",
    icon: <Home size={20} />,
    to: "/dashboard",
  },
  {
    label: "Service Management",
    subMenu: [
      {
        label: "Services",
        icon: <BookHeart size={17} />,
        to: "/dashboard/services",
      },
      {
        label: "Create Service",
        icon: <FilePlus size={17} />,
        to: "/dashboard/create-service",
      },
    ],
  },
  {
    label: "Article Management",
    subMenu: [
      {
        label: "Articles",
        icon: <Newspaper size={17} />,
        to: "/dashboard/articles",
      },
      {
        label: "Create Article",
        icon: <FilePlus size={17} />,
        to: "/dashboard/create-article",
      },
    ],
  },
  {
    label: "Gallery Management",
    subMenu: [
      {
        label: "Galleries",
        icon: <Image size={17} />,
        to: "/dashboard/galleries",
      },
      {
        label: "Create Gallery",
        icon: <ImagePlus size={17} />,
        to: "/dashboard/create-gallery",
      },
    ],
  },
  {
    label: "Banner Management",
    subMenu: [
      {
        label: "Banners",
        icon: <GalleryHorizontal size={17} />,
        to: "/dashboard/banners",
      },
      {
        label: "Create Banner",
        icon: <ImagePlus size={17} />,
        to: "/dashboard/create-banner",
      },
    ],
  },
  {
    label: "Logo Management",
    subMenu: [
      {
        label: "Logo",
        icon: <Heart size={17} />,
        to: "/dashboard/logo",
      },
    ],
  },
];

export function AppSidebar() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login/admin");
  };

  return (
    <Sidebar className="text-zinc-300 border-none ">
      <SidebarContent className="bg-[#27484B] p-5">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarMenus.map((menu) =>
                menu.subMenu ? (
                  <SidebarMenuItem key={menu.label}>
                    <SidebarMenuSubButton className="!text-zinc-300 hover:bg-transparent">
                      <span>{menu.label}</span>
                    </SidebarMenuSubButton>
                    <SidebarMenuSub>
                      {menu.subMenu.map((sub) => (
                        <SidebarMenuSubItem key={sub.label}>
                          <NavLink
                            to={sub.to}
                            end
                            className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 text-sm ${isActive ? "bg-accent-950 text-white font-semibold" : "hover:bg-accent-800 !text-zinc-200"}`}
                          >
                            {sub.icon}
                            <span>{sub.label}</span>
                          </NavLink>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                ) : (
                  <SidebarMenuItem key={menu.label}>
                    <NavLink
                      to={menu.to}
                      end
                      className={({ isActive }) => `flex items-center gap-2 px-2 py-2 rounded-md transition-all duration-300 text-sm ${isActive ? "bg-accent-950 text-white font-semibold" : "hover:bg-accent-800 !text-zinc-200"}`}
                    >
                      {menu.icon}
                      <span>{menu.label}</span>
                    </NavLink>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-[#27484B] p-5">
        <Button onClick={handleLogout} className={"cursor-pointer bg-red-800 hover:bg-red-700"}>
          Logout
          <LogOut size={17} />
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
