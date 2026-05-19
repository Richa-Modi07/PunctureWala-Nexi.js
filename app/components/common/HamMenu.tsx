"use client";
import { useState } from "react";
import { IconType } from "react-icons"
import { FaClipboardList, FaClipboardCheck, FaFileUpload, FaInfoCircle, FaSignOutAlt, FaRegQuestionCircle } from "react-icons/fa";

import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function HamMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  type MenuList = {
    icon: IconType; label: string;
  }
  const items: MenuList[] = [
    { icon: FaInfoCircle, label: "Supplier Info" },
    { icon: FaFileUpload, label: "Document Details" },
    { icon: FaClipboardList, label: "Term Selection" },
    { icon: FaClipboardCheck, label: "Final Review" },
    { icon: FaRegQuestionCircle, label: "Support" },
    { icon: FaSignOutAlt, label: "Sign Out" },
  ];

  return (
    <div className="lg:hidden relative">
      <button
        className="cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle Menu">
        {!isOpen ? (
          <GiHamburgerMenu size={32} className="text-gray-700" />
        ) : (
          <ImCross size={28} className="text-gray-700" />
        )}
      </button>

      <div className={`absolute z-50 top-10 w-fit backdrop-blur-xl bg-black/30 flex flex-col gap-y-5 p-5 transform transition-all duration-500 ease-in-out rounded-xl overflow-hidden  ${isOpen ? "-translate-x-40 opacity-100" : "translate-x-full opacity-0 pointer-events-none"} `}>
        <h1 className="font-bold text-2xl md:text-3xl text-blue-600 ">
          PunctureWala
        </h1>
        <nav className="flex flex-col py-1 md:py-2 space-y-3">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/60 cursor-pointer bg-white/30 w-full font-semibold group"
              onClick={() => setIsOpen(false)}>
              <item.icon size={18} className='text-gray-600 group-hover:text-gray-800' />
              <span className="text-gray-600 group-hover:text-gray-800">{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default HamMenu;
