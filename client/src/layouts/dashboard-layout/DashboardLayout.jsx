import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { Outlet } from "react-router";
import AppSidebar from "./AppSidebar";
import DashboardNavbar from "@/components/navbar/navbar-dashboard";
import CustomTrigger from "./customTrigger";

const DashboardLayout = () => {
  return (
    <SidebarProvider className={"bg-[#214144]"}>
      <AppSidebar />
      <main className="w-full overflow-auto">
        <DashboardNavbar />
        <CustomTrigger />
        <div className="p-5 ">
          <title>Ahli Gigi Bintaro - Dashboard</title>
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
