import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";

const TopBar = () => {
  return (
    <div className="hidden md:block bg-gray-100 border-b-2 py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-gray-600">
            <MessageCircle className="w-4 h-4 text-accent-700" />
            <span className="text-sm">081510718728</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <MessageCircle className="w-4 h-4 text-accent-700" />
            <span className="text-sm">085816137431</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Follow Us :</span>
          <div className="flex space-x-2">
            <Instagram className="w-4 h-4 text-gray-600 hover:text-accent-700 cursor-pointer" />
            <Mail className="w-4 h-4 text-gray-600 hover:text-accent-700 cursor-pointer" />
            <MessageCircle className="w-4 h-4 text-gray-600 hover:text-accent-700 cursor-pointer" />
            <MapPin className="w-4 h-4 text-gray-600 hover:text-accent-700 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
