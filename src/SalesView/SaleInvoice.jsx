// import React from "react";

// const SaleInvoice = () => {
//   return (
//     <div className="bg-white p-8 rounded-xl max-w-[1100px] mx-auto shadow-md text-[#0a2e3b] font-sans">
//       <h3 className="mt-6 mb-4 text-lg font-semibold">Customer Details</h3>
//       <div className="flex flex-wrap gap-5 mb-4">
//         <div className="flex-1 min-w-[250px]">
//           <label className="block mb-1 text-sm font-medium">Customer Name</label>
//           <input type="text" value="Faizan Ali" className="w-full p-2 text-sm border border-gray-300 rounded-md" readOnly />
//         </div>
//         <div className="flex-1 min-w-[250px]">
//           <label className="block mb-1 text-sm font-medium">Phone Number</label>
//           <input type="text" value="+92 300 1234567" className="w-full p-2 text-sm border border-gray-300 rounded-md" readOnly />
//         </div>
//         <div className="flex-1 min-w-[250px] relative">
//           <label className="block mb-1 text-sm font-medium">QR Code</label>
//           <input type="text" placeholder="Scan" className="w-full p-2 text-sm border border-gray-300 rounded-md" />
//           <i className="fas fa-qrcode absolute right-3 top-9 text-xl text-[#0a2e3b]" />
//         </div>
//       </div>

//       <div className="flex flex-wrap gap-5 mb-4">
//         <div className="flex-1 min-w-[250px]">
//           <label className="block mb-1 text-sm font-medium">Email</label>
//           <input type="email" value="faizan@example.com" className="w-full p-2 text-sm border border-gray-300 rounded-md" readOnly />
//         </div>
//         <div className="flex-1 min-w-[250px]">
//           <label className="block mb-1 text-sm font-medium">Address</label>
//           <input type="text" value="Gulberg, Lahore" className="w-full p-2 text-sm border border-gray-300 rounded-md" readOnly />
//         </div>
//       </div>

//       <h3 className="mt-6 mb-4 text-lg font-semibold">Items in This Sale</h3>
//       <div className="border border-[#e0e6ed] rounded-xl shadow-sm overflow-x-auto mt-2">
//         <table className="w-full text-sm border-collapse">
//           <thead className="bg-[#f3f5f7]">
//             <tr>
//               {['Product','Type','Variant','Qty','Price','Discount','Total','Supplier'].map((heading, i) => (
//                 <th key={i} className="p-3 text-left">{heading}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-b border-gray-200">
//               <td className="p-3">Cotton Shirts – Medium</td>
//               <td className="p-3">ITEM</td>
//               <td className="p-3">Auto</td>
//               <td className="p-3">10</td>
//               <td className="p-3">$750</td>
//               <td className="p-3">30%</td>
//               <td className="p-3">2</td>
//               <td className="p-3">Textile Hub</td>
//             </tr>
//             <tr className="border-b border-gray-200">
//               <td className="p-3">Denim Box</td>
//               <td className="p-3">BOX</td>
//               <td className="p-3">Auto</td>
//               <td className="p-3">10</td>
//               <td className="p-3">$750</td>
//               <td className="p-3">0%</td>
//               <td className="p-3">2</td>
//               <td className="p-3">Denim Co</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <h3 className="mt-6 mb-4 text-lg font-semibold">Sale Summary</h3>
//       <div className="border border-[#e0e6ed] rounded-xl p-6 mb-10 max-w-full text-sm">
//         <div className="flex justify-between mb-3">
//           <span>Subtotal</span><span>PKR 3,020</span>
//         </div>
//         <div className="flex justify-between mb-3">
//           <span>Allowance/Discounts</span><span>PKR 200</span>
//         </div>
//         <div className="flex justify-between mb-3">
//           <span>Tax (17%)</span><span>PKR 470</span>
//         </div>
//         <div className="flex justify-between font-bold">
//           <span>Total Paid</span><span>PKR 3,290</span>
//         </div>
//       </div>

//       <div className="flex flex-wrap gap-3">
//         {[
//           { label: 'Download Invoice', icon: 'fa-download' },
//           { label: 'Disable the Sale', icon: 'fa-trash-alt' },
//           { label: 'Initiate Return', icon: 'fa-undo-alt' },
//           { label: 'Edit Sale', icon: 'fa-pen' },
//         ].map((btn, idx) => (
//           <button
//             key={idx}
//             className="flex-1 px-4 py-3 rounded-full border border-[#19BEA0] text-[#03414C] font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#d3eef5]"
//             style={{ background: 'linear-gradient(270deg, #19BEA0 0%, #E3E2F3 50%, #19BEA0 100%)' }}
//           >
//             {btn.label} <i className={`fas ${btn.icon}`} />
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SaleInvoice;

// edit 

import React from "react";
import { FaDownload, FaTrashAlt, FaUndoAlt, FaPen, FaQrcode } from "react-icons/fa";

const SaleInvoice = () => {
  return (
    <div className="bg-white p-8 rounded-xl max-w-[1100px] mx-auto shadow-md text-[#0a2e3b] font-sans">
      <h3 className="mt-6 mb-4 text-lg font-semibold">Customer Details</h3>
      <div className="flex flex-wrap gap-5 mb-4">
        <div className="flex-1 min-w-[250px]">
          <label className="block mb-1 text-sm font-medium">Customer Name</label>
          <input type="text" value="Faizan Ali" className="w-full p-2 text-sm border border-gray-300 rounded-md" readOnly />
        </div>
        <div className="flex-1 min-w-[250px]">
          <label className="block mb-1 text-sm font-medium">Phone Number</label>
          <input type="text" value="+92 300 1234567" className="w-full p-2 text-sm border border-gray-300 rounded-md" readOnly />
        </div>
        <div className="flex-1 min-w-[250px] relative">
          <label className="block mb-1 text-sm font-medium">QR Code</label>
          <input type="text" placeholder="Scan" className="w-full p-2 text-sm border border-gray-300 rounded-md" />
          <FaQrcode className="absolute right-3 top-9 text-xl text-[#0a2e3b]" />
        </div>
      </div>

      <div className="flex flex-wrap gap-5 mb-4">
        <div className="flex-1 min-w-[250px]">
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input type="email" value="faizan@example.com" className="w-full p-2 text-sm border border-gray-300 rounded-md" readOnly />
        </div>
        <div className="flex-1 min-w-[250px]">
          <label className="block mb-1 text-sm font-medium">Address</label>
          <input type="text" value="Gulberg, Lahore" className="w-full p-2 text-sm border border-gray-300 rounded-md" readOnly />
        </div>
      </div>

      <h3 className="mt-6 mb-4 text-lg font-semibold">Items in This Sale</h3>
      <div className="border border-[#e0e6ed] rounded-xl shadow-sm overflow-x-auto mt-2">
        <div className="min-w-[800px]">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-[#f3f5f7]">
              <tr>
                {['Product','Type','Variant','Qty','Price','Discount','Total','Supplier'].map((heading, i) => (
                  <th key={i} className="p-3 text-left whitespace-nowrap">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-3">Cotton Shirts – Medium</td>
                <td className="p-3">ITEM</td>
                <td className="p-3">Auto</td>
                <td className="p-3">10</td>
                <td className="p-3">$750</td>
                <td className="p-3">30%</td>
                <td className="p-3">2</td>
                <td className="p-3">Textile Hub</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3">Denim Box</td>
                <td className="p-3">BOX</td>
                <td className="p-3">Auto</td>
                <td className="p-3">10</td>
                <td className="p-3">$750</td>
                <td className="p-3">0%</td>
                <td className="p-3">2</td>
                <td className="p-3">Denim Co</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="mt-6 mb-4 text-lg font-semibold">Sale Summary</h3>
      <div className="border border-[#e0e6ed] rounded-xl p-6 mb-10 max-w-full text-sm">
        <div className="flex justify-between mb-3">
          <span>Subtotal</span><span>PKR 3,020</span>
        </div>
        <div className="flex justify-between mb-3">
          <span>Allowance/Discounts</span><span>PKR 200</span>
        </div>
        <div className="flex justify-between mb-3">
          <span>Tax (17%)</span><span>PKR 470</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total Paid</span><span>PKR 3,290</span>
        </div>
      </div>

      <div className="flex flex-col flex-wrap gap-3 sm:flex-row">
        {[
          { label: 'Download Invoice', icon: <FaDownload /> },
          { label: 'Disable the Sale', icon: <FaTrashAlt /> },
          { label: 'Initiate Return', icon: <FaUndoAlt /> },
          { label: 'Edit Sale', icon: <FaPen /> },
        ].map((btn, idx) => (
          <button
            key={idx}
            className="flex-1 px-4 py-3 rounded-full border border-[#19BEA0] font-medium text-sm flex items-center justify-center gap-2 bg-gray-100 text-[#03414C] hover:opacity-90 hover:bg-gray-200"
          >
            {btn.icon} {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SaleInvoice;
