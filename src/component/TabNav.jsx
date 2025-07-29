import React, { useState } from 'react';
import { IoFilter } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import {
  MdShoppingCartCheckout,
  MdOutlineLocalShipping,
  MdCheckCircleOutline,
  MdOutlineCancel,
} from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const TabNav = () => {
  const [activeTab, setActiveTab] = useState("filter");
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { key: "filter", label: "Filter", icon: <IoFilter /> },
    { key: "pending", label: "Pending (02)", icon: <AiOutlineClockCircle /> },
    { key: "confirmed", label: "Confirmed", icon: <GiConfirmed /> },
    { key: "picked", label: "Picked", icon: <MdShoppingCartCheckout /> },
    { key: "packed", label: "Packed", icon: <FaBoxOpen /> },
    { key: "shipped", label: "Shipped", icon: <MdOutlineLocalShipping /> },
    { key: "completed", label: "Completed", icon: <MdCheckCircleOutline /> },
    { key: "cancelled", label: "Cancelled", icon: <MdOutlineCancel /> },
  ];

  return (
    <div className="mx-4 mt-6 md:mx-14">
      {/* Mobile Toggle Button */}
      <div className="flex justify-end px-2 mb-2 md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-[#0C6271]">
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Tabs */}
      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row md:items-end md:justify-between w-full px-4 md:px-10 border-b border-gray-200 gap-y-3`}
      >
        {tabs.map((tab) => (
          <div
            key={tab.key}
            onClick={() => {
              setActiveTab(tab.key);
              setMenuOpen(false); // auto-close on mobile
            }}
            className="flex flex-col items-center px-2 pb-1 cursor-pointer"
          >
            <div
              className={`flex items-center gap-1 text-sm font-medium ${
                activeTab === tab.key ? "text-[#0C6271]" : "text-gray-500"
              }`}
            >
              {React.cloneElement(tab.icon, {
                className: `text-base ${
                  activeTab === tab.key ? "text-[#0C6271]" : "text-gray-500"
                }`,
              })}
              <span>{tab.label}</span>
            </div>
            <div
              className={`h-[3px] w-full rounded-sm mt-[6px] ${
                activeTab === tab.key ? "bg-[#0C6271]" : "bg-transparent"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabNav;


