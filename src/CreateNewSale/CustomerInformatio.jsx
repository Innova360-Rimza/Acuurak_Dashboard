import React from 'react';

const CustomerInformatio = () => {
  return (
    <div className="font-jakarta bg-white rounded-[10px] border border-[#e0e6ed] md:m-4 md:mx-14 shadow-[0_2px_5px_rgba(0,0,0,0.05)] overflow-hidden p-8 cursor-pointer ">
      
      <div className="flex items-center mb-8">
        
        <div className="flex items-center">
          <div className="w-8 h-8 flex items-center justify-center text-white bg-teal-700 rounded-full font-semibold text-[16px]">1</div>
          <span className="ml-2 font-medium text-teal-700">Customer Information</span>
        </div>
        
        <div className="h-0 mx-4 border-t-2 border-gray-400 w-44" />
        
        <div className="flex items-center">
          <div className="w-8 h-8 flex items-center justify-center text-[#bfc5ce] bg-[#f3f6fa] rounded-full font-semibold text-[16px]">2</div>
          <span className="ml-2 text-[#bfc5ce] font-medium">Product Selection</span>
        </div>
       
        <div className="h-0 mx-4 border-t-2 border-gray-400 w-44" />
    
        <div className="flex items-center">
          <div className="w-8 h-8 flex items-center justify-center text-[#bfc5ce] bg-[#f3f6fa] rounded-full font-semibold text-[16px]">3</div>
          <span className="ml-2 text-[#bfc5ce] font-medium">Payment Details</span>
        </div>
      </div>

      
      <div className="mb-2">
        <h2 className="text-[22px] font-semibold text-[#222b45]">Customer Information</h2>
        <p className="text-[#8f9bb3] text-[15px]">Search existing by phone or add new customer</p>
      </div>

      
      <div className="mt-6 mb-8 ">
        <label className="block text-[#222b45] text-[16px] font-medium mb-2">Search</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Search existing by phone"
            className="w-full bg-grey-700 border border-[#e0e6ed] rounded-lg py-3 px-4 text-[#8f9bb3] placeholder-[#bfc5ce] focus:outline-none focus:ring-2 focus:ring-teal-700"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#bfc5ce]">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#bfc5ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.6 10.6Z"/></svg>
          </span>
        </div>
      </div>

      {/* New Customer & Email */}
      <div className="flex flex-col gap-6 mb-6 md:flex-row">
        <div className="flex-1">
          <label className="block text-[#222b45] text-[16px] font-medium mb-2">New Customer</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Full Name"
              maxLength={35}
              className="w-full bg-[#f3f6fa] border border-[#e0e6ed] rounded-lg py-3 px-4 pr-24 text-[#222b45] placeholder-[#bfc5ce] focus:outline-none focus:ring-2 focus:ring-teal-700"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#bfc5ce] text-xs pointer-events-none">Max 35 Char</span>
          </div>
        </div>
        <div className="flex-1">
          <label className="block text-[#222b45] text-[16px] font-medium mb-2">Email Address <span className="text-[#8f9bb3]">(optional)</span></label>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-[#f3f6fa] border border-[#e0e6ed] rounded-lg py-3 px-4 text-[#222b45] placeholder-[#bfc5ce] focus:outline-none focus:ring-2 focus:ring-teal-700"
          />
        </div>
      </div>

      
      <div className="mb-2">
        <label className="block text-[#222b45] text-[16px] font-medium mb-2">Address <span className="text-[#8f9bb3]">(optional)</span></label>
        <input
          type="text"
          placeholder="Enter street address"
          className="w-full bg-[#f3f6fa] border border-[#e0e6ed] rounded-lg py-3 px-4 text-[#222b45] placeholder-[#bfc5ce] focus:outline-none focus:ring-2 focus:ring-teal-700 mb-3"
        />
        <div className="flex flex-col gap-4 mb-3 md:flex-row">
          <input
            type="text"
            placeholder="City"
            className="flex-1 bg-[#f3f6fa] border border-[#e0e6ed] rounded-lg py-3 px-4 text-[#222b45] placeholder-[#bfc5ce] focus:outline-none focus:ring-2 focus:ring-teal-700"
          />
          <input
            type="text"
            placeholder="State/Province"
            className="flex-1 bg-[#f3f6fa] border border-[#e0e6ed] rounded-lg py-3 px-4 text-[#222b45] placeholder-[#bfc5ce] focus:outline-none focus:ring-2 focus:ring-teal-700"
          />
          <input
            type="text"
            placeholder="Postal Code / Zip Code"
            className="flex-1 bg-[#f3f6fa] border border-[#e0e6ed] rounded-lg py-3 px-4 text-[#222b45] placeholder-[#bfc5ce] focus:outline-none focus:ring-2 focus:ring-teal-700"
          />
        </div>
        <input
          type="text"
          placeholder="Country"
          className="w-full bg-[#f3f6fa] border border-[#e0e6ed] rounded-lg py-3 px-4 text-[#222b45] placeholder-[#bfc5ce] focus:outline-none focus:ring-2 focus:ring-teal-700"
        />
      </div>
    </div>
  );
};

export default CustomerInformatio;
