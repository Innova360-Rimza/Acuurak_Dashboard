import React, { useState } from 'react';
import { FaSearch, FaCalendarAlt } from "react-icons/fa";
import AssignDeriver from '../AssignDriver/AssignDeriver';

const Inputs = () => {
  const [showAssignDriver, setShowAssignDriver] = useState(false);

  return (
    <>
      <div className="px-4 mt-3 mb-6 space-y-6 md:px-14">
        {/* Search Input */}
        <div className="flex flex-col w-full">
          <label className="mb-1 text-sm font-medium text-gray-700">Search</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name or ID"
              className="w-full border border-gray-200 rounded-md py-2 pl-4 pr-10 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#0C6271]"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-400" />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col w-full gap-4 md:flex-row md:items-end md:justify-between">
          {/* Payment Method */}
          <div className="flex flex-col w-full min-w-0 md:max-w-xs">
            <label className="mb-1 text-sm font-medium text-gray-700">Payment Method</label>
            <select className="w-full border border-gray-200 rounded-md py-2 px-4 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#0C6271]">
              <option>All</option>
              <option>Cash</option>
              <option>Credit Card</option>
              <option>Bank Transfer</option>
            </select>
          </div>

          {/* Date Range */}
          <div className="flex flex-col w-full min-w-0 md:max-w-md">
            <label className="mb-1 text-sm font-medium text-gray-700">Date Range</label>
            <div className="flex flex-col w-full gap-2 sm:flex-row">
              <div className="relative w-full min-w-0">
                <input
                  type="text"
                  placeholder="Start"
                  className="w-full border border-gray-200 rounded-md py-2 pl-4 pr-8 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#0C6271]"
                />
                <FaCalendarAlt className="absolute right-2 top-2.5 text-gray-400" />
              </div>
              <div className="relative w-full min-w-0">
                <input
                  type="text"
                  placeholder="End"
                  className="w-full border border-gray-200 rounded-md py-2 pl-4 pr-8 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#0C6271]"
                />
                <FaCalendarAlt className="absolute right-2 top-2.5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Status Dropdown for mobile/tablet only - moved below date range, above clear button */}
          <div className="relative block w-full mt-2 md:hidden">
            <label className="mb-1 text-sm font-medium text-gray-700">Status</label>
            <select
              className="w-full max-w-full border border-gray-200 rounded-md py-2 px-4 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#0C6271] custom-status-dropdown"
              style={{ width: '100%', maxWidth: '100%' }}
            >
              <option>All</option>
              <option>Filter</option>
              <option>Pending</option>
              <option>Confirmed</option>
              <option>Shipped</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
          </div>

          {/* Clear Button */}
          <div className="flex justify-center mt-2 md:justify-end md:w-auto">
            <button className="md:w-[130px] px-4 py-2 text-sm text-gray-600 border border-[#0C6271] rounded-full hover:bg-gray-100 transition">
              Clear Filter
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-[#0C6271] text-sm font-semibold">Sales Table</h2>
          <div className="flex w-full gap-3 sm:w-auto sm:justify-end">
            <button className="bg-[#0C6271] text-white md:w-[200px] py-2 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#094f5b] transition md:px-8 px-6">
              <span className='text-2xl text-center'>+</span> Create New Sale
            </button>
            <button
              className="bg-white text-[#0C6271] md:w-[200px] py-2 rounded-full text-sm font-medium flex items-center justify-center gap-2 border border-[#0C6271] hover:bg-gray-100 transition md:px-8 px-6"
              onClick={() => setShowAssignDriver(true)}
            >
              Assign Driver
            </button>
          </div>
        </div>
      </div>
      {showAssignDriver && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="relative">
            <AssignDeriver onClose={() => setShowAssignDriver(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Inputs;

