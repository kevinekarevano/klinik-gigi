import { useSidebar } from "@/components/ui/sidebar";
import { PanelLeftOpen } from "lucide-react";

const CustomTrigger = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <div onClick={toggleSidebar} className="bg-[#30666b] inline-block p-1 mt-2 ml-3 shadow rounded-md cursor-pointer">
      <PanelLeftOpen color="white" />
    </div>
  );
};

export default CustomTrigger;
