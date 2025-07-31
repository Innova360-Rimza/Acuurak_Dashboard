import React from 'react'

const OderDetail = () => {
  return (
    <>
    <div className="w-full max-w-5xl p-2 mx-auto bg-white shadow-lg sm:p-4 md:p-8 rounded-2xl font-jakarta">
      {/* Order Details */}
      <h2 className="text-base sm:text-lg font-semibold text-[#0a2e3b] mb-2">Order Details</h2>
      <div className="p-3 mb-6 bg-white border shadow-md sm:p-6 sm:mb-8 rounded-xl">
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
          <div className="space-y-2 text-[#0a2e3b] text-xs sm:text-sm font-bold">
            <div>Order Processing ID</div>
            <div>Sale ID</div>
            <div>Customer Name</div>
            <div>Status</div>
          </div>
          <div className="space-y-2 text-right text-[#0a2e3b] text-xs sm:text-sm font-normal">
            <div className="font-normal">#OP-05423</div>
            <div className="font-normal">#S-8812</div>
            <div className="font-normal">John Smith</div>
            <div className="font-normal">SENT_FOR_VALIDATION</div>
          </div>
        </div>
      </div>

      {/* Payment Details */}
      <h2 className="text-base sm:text-lg font-semibold text-[#0a2e3b] mb-2">Payment Details</h2>
      <div className="flex flex-col gap-3 mb-6 sm:gap-4 sm:mb-8 sm:flex-row">
        <div className="flex-1 min-w-0">
          <label className="block text-xs sm:text-sm font-medium mb-1 text-[#0a2e3b]">Payment Amount</label>
          <input
            type="text"
            placeholder="Enter amount in USD"
            className="w-full text-[#0a2e3b] border rounded-md px-3 py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-[#19BEA0] placeholder:opacity-100 bg-gray-50"
            style={{colorScheme: 'light', '--tw-placeholder-color': 'rgba(0,0,0,0.94)'}}
          />
        </div>
        <div className="flex-1 min-w-0">
          <label className="block text-xs sm:text-sm font-medium mb-1 text-[#0a2e3b]">Payment Type</label>
          <input
            type="text"
            value="BANK TRANSFER"
            readOnly
            className="w-full border rounded-md px-3 py-2 text-xs sm:text-sm bg-gray-50 text-[#0a2e3b] outline-none focus:ring-2 focus:ring-[#19BEA0] placeholder:opacity-100"
            style={{colorScheme: 'light'}}
          />
        </div>
      </div>

      {/* Order Summary */}
      <h2 className="text-base sm:text-lg font-semibold text-[#0a2e3b] mb-2">Order Summary</h2>
      <div className="mb-6 overflow-x-auto bg-white border shadow-md sm:mb-8 rounded-xl">
        <table className="w-full text-xs sm:text-sm min-w-[340px]">
          <thead>
            <tr className="text-[#0a2e3b] border-b">
              <th className="px-3 py-2 font-medium text-left sm:px-6 sm:py-3">Item A</th>
              <th className="px-3 py-2 font-medium text-left sm:px-6 sm:py-3">Quantity</th>
              <th className="px-3 py-2 font-medium text-left sm:px-6 sm:py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 sm:px-6 py-2 sm:py-3 text-[#0a2e3b]">Tea Shirt</td>
              <td className="px-3 sm:px-6 py-2 sm:py-3 text-[#0a2e3b]">2</td>
              <td className="px-3 sm:px-6 py-2 sm:py-3 text-[#0a2e3b]">$20</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Total Amount */}
      <div className="flex flex-col items-center justify-between px-4 py-4 bg-white border shadow-md sm:px-8 sm:py-5 rounded-xl sm:flex-row">
        <span className="text-[#0a2e3b] font-medium text-sm sm:text-base">Total Amount:</span>
        <span className="text-[#0a2e3b] text-sm sm:text-base font-normal">Auto-calculated from item total</span>
      </div>
    </div>
    </>
  )
}

export default OderDetail;
