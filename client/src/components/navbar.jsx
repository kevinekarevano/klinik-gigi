import { useState } from "react";
import { MessageCircle, Instagram, Mail, MapPin, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50  ">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={"/"} className="flex items-center">
            <div className="flex items-center">
              <img className="w-18 md:w-20" src="https://res.cloudinary.com/du6yvy7yw/image/upload/v1752577550/Copilot_20250715_175507_sk8uuu.png" alt="logo ahli gigi bintaro" />
              <div>
                <div className="text-md md:text-lg font-semibold text-gray-800">Ahli Gigi Bintaro</div>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex  items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => `transition-all duration-500 font-medium ${isActive ? "text-accent-700" : "text-gray-700 hover:text-accent-600"}`}>
              HOME
            </NavLink>

            <NavLink to="/about-us" className={({ isActive }) => `transition-all duration-500 font-medium ${isActive ? "text-accent-700" : "text-gray-700 hover:text-accent-600"}`}>
              ABOUT US
            </NavLink>

            <NavLink to="/services" className={({ isActive }) => `transition-all duration-500 font-medium ${isActive ? "text-accent-700" : "text-gray-700 hover:text-accent-600"}`}>
              SERVICES
            </NavLink>
            <NavLink to="location" className={({ isActive }) => `transition-all duration-500 font-medium ${isActive ? "text-accent-700" : "text-gray-700 hover:text-accent-600"}`}>
              LOCATION
            </NavLink>
            <NavLink to="gallery" className={({ isActive }) => `transition-all duration-500 font-medium ${isActive ? "text-accent-700" : "text-gray-700 hover:text-accent-600"}`}>
              GALLERY
            </NavLink>
            <NavLink to="/article" className={({ isActive }) => `transition-all duration-500 font-medium ${isActive ? "text-accent-700" : "text-gray-700 hover:text-accent-600"}`}>
              ARTICLE
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="p-2 text-gray-700 cursor-pointer transition-all duration-500 hover:text-accent-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Contact Info */}
              <div className="border-b pb-3 mb-3">
                <div className="flex items-center space-x-2 text-gray-600 py-2">
                  <MessageCircle className="w-4 h-4 text-accent-700" />
                  <span className="text-sm">081510718728</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 py-2">
                  <MessageCircle className="w-4 h-4 text-accent-700" />
                  <span className="text-sm">085816137431</span>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <NavLink to="/" className={({ isActive }) => `block px-3 py-2 font-medium ${isActive ? "text-accent-700" : "text-gray-700 hover:text-accent-700"}`}>
                HOME
              </NavLink>
              <NavLink to="/about-us" className={({ isActive }) => `block px-3 py-2 font-medium ${isActive ? "text-accent-700" : "text-gray-700 hover:text-accent-700"}`}>
                ABOUT US
              </NavLink>
              <NavLink to="/services" className={({ isActive }) => `block px-3 py-2 font-medium ${isActive ? "text-accent-700" : "text-gray-700 hover:text-accent-700"}`}>
                SERVICES
              </NavLink>
              <NavLink to="/location" className={({ isActive }) => `block px-3 py-2 font-medium ${isActive ? "text-accent-700" : "text-gray-700 hover:text-accent-700"}`}>
                LOCATION
              </NavLink>
              <NavLink to="/gallery" className={({ isActive }) => `block px-3 py-2 font-medium ${isActive ? "text-accent-700" : "text-gray-700 hover:text-accent-700"}`}>
                GALLERY
              </NavLink>
              <NavLink to="/article" className={({ isActive }) => `block px-3 py-2 font-medium ${isActive ? "text-accent-700" : "text-gray-700 hover:text-accent-700"}`}>
                ARTICLE
              </NavLink>

              <div className="flex items-center justify-between px-3 py-2 border-t mt-3 pt-3">
                <span className="text-sm text-gray-600">Follow Us:</span>
                <div className="flex space-x-3">
                  <Instagram className="w-5 h-5 text-gray-600 hover:text-accent-700 cursor-pointer" />
                  <Mail className="w-5 h-5 text-gray-600 hover:text-accent-700 cursor-pointer" />
                  <MessageCircle className="w-5 h-5 text-gray-600 hover:text-accent-700 cursor-pointer" />
                  <MapPin className="w-5 h-5 text-gray-600 hover:text-accent-700 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
