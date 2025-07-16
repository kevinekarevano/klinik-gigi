import React, { useState } from "react";
import { X } from "lucide-react";

export default function WaFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      name: "Admin 1",
      number: "6281510718728",
    },
    {
      name: "Admin 2",
      number: "6285816137431",
    },
  ];

  const handleWhatsAppClick = (number) => {
    const message = encodeURIComponent("Halo, saya ingin berkonsultasi.");
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-20 right-4 z-50 pr-0">
      {/* Menu Options */}
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"} mb-4 space-y-3`}>
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center justify-end">
            <button
              onClick={() => handleWhatsAppClick(contact.number)}
              className="bg-accent-600 hover:bg-accent-700 cursor-pointer text-white px-4 py-3 rounded-full flex items-center space-x-3 shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <span className="font-medium text-sm whitespace-nowrap">{contact.name}</span>
              <div className="bg-white bg-opacity-20 rounded-full">
                <img src="whatsapp.png" alt="wa logo" className="w-7" />
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Main Toggle Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center p-1 justify-center shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-110 ${isOpen ? "bg-red-500 hover:bg-red-600 rotate-180" : "bg-accent-700 "}`}
        >
          {isOpen ? <X size={24} className="text-white" /> : <img src="whatsapp.png" alt="wa logo" />}
        </button>
      </div>
    </div>
  );
}
