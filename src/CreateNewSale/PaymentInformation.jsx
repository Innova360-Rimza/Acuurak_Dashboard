import React from 'react';

const PaymentInformation = () => {
  return (
    <>
      <div className="font-jakarta bg-white rounded-[16px] border border-[#e0e6ed] p-2 sm:p-4 md:p-8 shadow-[0_2px_5px_rgba(0,0,0,0.05)] max-w-4xl w-full mx-auto mt-6 overflow-x-hidden">
        
        <div className="flex items-center w-full mb-8 flex-nowrap">
         
          <div className="flex items-center min-w-[40px] md:min-w-[220px] flex-shrink-0">
            <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-white bg-teal-700 rounded-full font-semibold text-[12px] md:text-[16px]">1</div>
            <span className="hidden md:inline ml-1 md:ml-2 font-medium text-teal-700 whitespace-nowrap text-[12px] md:text-[16px]">Customer Information</span>
          </div>
         
          <div className="h-0 mx-1 md:mx-4 border-t-2 border-gray-400 flex-1 min-w-[18px] md:min-w-[40px]" />
          
            <div className="flex items-center min-w-[40px] md:min-w-[220px] flex-shrink-0">
            <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-white bg-teal-700 rounded-full font-semibold text-[12px] md:text-[16px]">2</div>
            <span className="hidden md:inline ml-1 md:ml-2 font-medium text-teal-700 whitespace-nowrap text-[12px] md:text-[16px]">Product Selection</span>
          </div>
          {/* Border after Step 2 */}
          <div className="h-0 mx-1 md:mx-4 border-t-2 border-gray-400 flex-1 min-w-[18px] md:min-w-[40px]" />
          {/* Step 3 */}
          <div className="flex items-center min-w-[40px] md:min-w-[220px] flex-shrink-0">
            <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-white bg-teal-700 rounded-full font-semibold text-[12px] md:text-[16px]">3</div>
            <span className="hidden md:inline ml-1 md:ml-2 font-medium text-teal-700 whitespace-nowrap text-[12px] md:text-[16px]">Payment Details</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-[22px] font-semibold text-[#222b45] mb-2">Payment Information</h2>

        {/* Payment Method */}
        <div className="mb-6">
          <label className="block text-[#222b45] text-[16px] font-medium mb-2">Payment Method</label>
          <div className="relative">
            <select className="w-full bg-[#f3f6fa] border border-[#e0e6ed] rounded-lg py-3 px-4 pr-10 text-[#222b45] focus:outline-none focus:ring-2 focus:ring-teal-700 appearance-none text-[17px] font-medium leading-tight" style={{textOverflow:'ellipsis', overflow:'hidden', whiteSpace:'nowrap'}}>
              <option>Cash</option>
              <option>Card</option>
              <option>Bank Transfer</option>
            </select>
            <span className="absolute -translate-y-1/2 pointer-events-none right-4 top-1/2">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#bfc5ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6"/></svg>
            </span>
          </div>
        </div>

        
        <div className="flex flex-col w-full gap-4 mb-6 md:flex-row">
          <div className="flex-1 min-w-[160px]">
            <label className="block text-[#222b45] text-[16px] font-medium mb-2">Payment Source</label>
            <div className="relative">
              <select className="w-full bg-[#f3f6fa] border border-[#e0e6ed] rounded-lg py-3 px-4 pr-10 text-[#222b45] focus:outline-none focus:ring-2 focus:ring-teal-700 appearance-none">
                <option>Manual</option>
                <option>POS</option>
                <option>Online</option>
              </select>
              <span className="absolute -translate-y-1/2 pointer-events-none right-4 top-1/2">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#bfc5ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6"/></svg>
              </span>
            </div>
          </div>
          <div className="flex-1 min-w-[160px]">
            <label className="block text-[#222b45] text-[16px] font-medium mb-2">Allowance/Discounts</label>
            <input
              type="text"
              placeholder="0"
              className="w-full bg-[#f3f6fa] border border-[#e0e6ed] rounded-lg py-3 px-4 text-[#222b45] placeholder-[#bfc5ce] focus:outline-none focus:ring-2 focus:ring-teal-700"
            />
          </div>
          <div className="flex-1 min-w-[160px]">
            <label className="block text-[#222b45] text-[16px] font-medium mb-2">Tax</label>
            <input
              type="text"
              placeholder="0.4%"
              className="w-full bg-[#f3f6fa] border border-[#e0e6ed] rounded-lg py-3 px-4 text-[#222b45] placeholder-[#bfc5ce] focus:outline-none focus:ring-2 focus:ring-teal-700"
              readOnly
            />
          </div>
        </div>

        {/* Total Amount */}
        <div className="flex flex-col md:flex-row items-center bg-white border border-[#e0e6ed] rounded-lg px-4 py-3 mb-8 shadow-[0_2px_5px_rgba(0,0,0,0.05)]">
          <span className="text-[#222b45] font-semibold text-[16px] md:w-1/2 w-full mb-2 md:mb-0">Total Amount:</span>
          <span className="text-[#8f9bb3] text-[16px] md:w-1/2 w-full text-right">Auto-calculated from item total</span>
        </div>
      </div>

     
      <div className="flex flex-col w-full max-w-4xl gap-3 mx-auto mt-2 mb-8 md:flex-row md:items-center md:justify-between">
        <button className="text-teal-700 font-medium w-full md:w-auto px-6 py-2 rounded-full border border-transparent hover:underline transition min-w-[140px]">Cancel</button>
        <button className="font-medium w-full md:w-auto px-10 py-2 rounded-full border border-[#bfc5ce] bg-white text-[#222b45] hover:bg-[#f3f6fa] transition min-w-[180px]">Clear Form</button>
        <button className="font-medium w-full md:w-auto px-10 py-2 rounded-full bg-teal-700 text-white hover:bg-teal-800 transition min-w-[180px]">Submit Sale</button>
      </div>
    </>
  );
}
export default PaymentInformation;
