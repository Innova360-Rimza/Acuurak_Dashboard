import React from 'react'
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const AssignDeriver = ({ onClose }) => {
  return (
    <>
    <div className="bg-white w-[800px] h-[400px] rounded-2xl shadow-md p-6 mx-auto mt-[60px] font-jakarta flex flex-col justify-between">
      <div className="mx-5 mb-2">
        <div className="flex items-center justify-between">
          <h3 className="text-[28px] text-[#043841] font-semibold mb-5">Assign Driver</h3>
          <div className="cursor-pointer text-[32px] text-[#043841]" onClick={onClose}><IoMdClose /></div>
        </div>
        <label className="block text-[20px] font-medium text-[#043841] mb-2">New Customer</label>
        <input
          type="text"
          placeholder="John Herry"
          className="w-full py-3 px-5 mb-6 border border-gray-200 rounded-xl bg-[#f7fafd] placeholder-[#043841] text-[18px] focus:outline-none focus:ring-2 focus:ring-[#043841]"
        />
        <label className="block text-[20px] font-medium text-[#043841] mb-2">Select Driver</label>
        <div className="relative">
          <select
            className="w-full py-3 px-5 border border-gray-200 rounded-xl bg-[#f7fafd] text-[18px] text-[#043841] focus:outline-none focus:ring-2 focus:ring-[#043841] appearance-none pr-10"
            defaultValue="Ali - Motorbike"
          >
            <option>Ali - Motorbike</option>
            <option>Ahmed - Car</option>
            <option>Bilal - Rickshaw</option>
          </select>
          <IoIosArrowDown className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl text-[#043841]" />
        </div>
      </div>
      <div className="flex items-center gap-4 mx-5 mt-2">
        <button
          className="w-1/2 py-3 rounded-full border border-[#0a5c63] text-grey-500 text-[20px] font-medium bg-white hover:bg-[#f7fafd] transition-all duration-150">
          Cancel
        </button>
        <button
          className="w-1/2 py-3 rounded-full bg-[#0a5c63] text-white text-[20px] font-medium border border-[#0a5c63] hover:opacity-90 transition-all duration-150"
        >
          Assign Driver
        </button>
      </div>
    </div>
      
    </>
  )
}

export default AssignDeriver
