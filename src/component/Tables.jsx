// import React from 'react';
// import { FaRegEye } from "react-icons/fa6";
// import { RiEdit2Line } from "react-icons/ri";
// import Button from './ButtonComponent/Button';


// const Tables = () => {
//   return (
//     <>
//        <div className='border border-[#e0e6ed] mx-14 shadow-[0_3px_7px_rgba(0,0,0,0.05)] mb-4 transition duration-300' >
//               <table className='w-full text-left border border-collapse'>
//                   <thead className='bg-[ #f3f5f7] '>
//                       <tr>
//                           <th className='p-[12px] text-left border-b border-[#eee] text-[rgba(4,56,65,1)]'>saleID</th>
//                           <th className='p-[12px] text-left border-b border-[#eee] text-[rgba(4,56,65,1)]'>Customer</th>
//                           <th className='p-[12px] text-left border-b border-[#eee] text-[rgba(4,56,65,1)]'>Store</th>
//                           <th className='p-[12px] text-left border-b border-[#eee] text-[rgba(4,56,65,1)]'>Date</th>
//                           <th className='p-[12px] text-left border-b border-[#eee] text-[rgba(4,56,65,1)]'>Status</th>
//                           <th className='p-[12px] text-left border-b border-[#eee] text-[rgba(4,56,65,1)]'>Total</th>
//                           <th className='p-[12px] text-left border-b border-[#eee] text-[rgba(4,56,65,1)]'>Payment</th>
//                           <th className='p-[12px] text-left border-b border-[#eee] text-[rgba(4,56,65,1)]'>Action</th>
//                       </tr>
//                   </thead>
//                   <tbody>
//                       <tr>
//                           <td className='p-[12px] text-left font-[11px]'>#10231</td>
//                           <td className='p-[12px] text-left font-[11px]'>Colleen</td>
//                           <td className='p-[12px] text-left font-[11px] '>OutletB</td>
//                           <td className='p-[12px] text-left font-[11px]'>jul19, 2025</td>
//                           <td className='p-[12px] text-left text-green-500 font-bold'>Completed</td>
//                           <td className='p-[12px] text-left font-[8px]'>PKR 7,500</td>
//                           <td className='p-[12px] text-left font-[11px]'>Cash</td>
//                           <td className='p-[12px] text-left font-[11px]'>
//                               <div>
//                                   <Button label="view" icon={ FaRegEye } />
//                               </div>
//                           </td>
//                           <td className='p-[12px] text-left font-[11px]'>
//                               <div>
//                                   <Button label="Edit"  icon={ RiEdit2Line } className="bg-teal-500 "/>
//                               </div>
//                           </td>
         
                                         
//                       </tr>
      
//                        <tr>
//                           <td className='p-[12px] text-left '>#10231</td>
//                           <td className='p-[12px] text-left '>Mitchell</td>
//                           <td className='p-[12px] text-left '>OutletB</td>
//                           <td className='p-[12px] text-left '>jul19, 2025</td>
//                           <td className='p-[12px] text-left text-orange-400 font-bold'>Pending</td>
//                           <td className='p-[12px] text-left '>PKR 7,500</td>
//                           <td className='p-[12px] text-left '>Cash</td>   
//                           <td className='p-[12px] text-left font-[11px]'>
//                               <div>
//                                   <Button label="view" icon={ FaRegEye } />
//                               </div>
//                           </td>
//                           <td className='p-[12px] text-left font-[11px]'>
//                               <div>
//                                   <Button label="Edit"  icon={ RiEdit2Line } className="bg-teal-500 "/>
//                               </div>
//                           </td>
                  
//                       </tr>
      
//                        <tr>
//                           <td className='p-[12px] text-left '>#10231</td>
//                           <td className='p-[12px] text-left '>Kyle</td>
//                           <td className='p-[12px] text-left '>OutletB</td>
//                           <td className='p-[12px] text-left '>jul19, 2025</td>
//                           <td className='p-[12px] text-left text-green-500 font-bold'>Completed</td>
//                           <td className='p-[12px] text-left '>PKR 7,500</td>
//                           <td className='p-[12px] text-left '>Cash</td>
//                           <td className='p-[12px] text-left font-[11px]'>
//                               <div>
//                                   <Button label="view" icon={ FaRegEye } />
//                               </div>
//                           </td>
//                           <td className='p-[12px] text-left font-[11px]'>
//                               <div>
//                                   <Button label="Edit"  icon={ RiEdit2Line } className="bg-teal-500 "/>
//                               </div>
//                           </td>
      
//                       </tr>
      
//                        <tr>
//                           <td className='p-[12px] text-left '>#10231</td>
//                           <td className='p-[12px] text-left '>Debra</td>
//                           <td className='p-[12px] text-left '>OutletB</td>
//                           <td className='p-[12px] text-left '>jul19, 2025</td>
//                           <td className='p-[12px] text-left font-bold text-orange-400'>Pending</td>
//                           <td className='p-[12px] text-left '>PKR 7,500</td>
//                           <td className='p-[12px] text-left '>Cash</td>
//                           <td className='p-[12px] text-left font-[11px]'>
//                               <div>
//                                   <Button label="view" icon={ FaRegEye } />
//                               </div>
//                           </td>
//                           <td className='p-[12px] text-left font-[11px]'>
//                               <div>
//                                   <Button label="Edit"  icon={ RiEdit2Line } className="bg-teal-500 "/>
//                               </div>
//                           </td>
                     
//                       </tr>
      
//                        <tr>
//                           <td className='p-[12px] text-left '>#10231</td>
//                           <td className='p-[12px] text-left '>Kristin</td>
//                           <td className='p-[12px] text-left '>OutletB</td>
//                           <td className='p-[12px] text-left '>jul19, 2025</td>
//                           <td className='p-[12px] text-left text-green-500 font-bold'>Completed</td>
//                           <td className='p-[12px] text-left '>PKR 7,500</td>
//                           <td className='p-[12px] text-left '>Cash</td>
//                           <td className='p-[12px] text-left font-[11px]'>
//                               <div>
//                                   <Button label="view" icon={ FaRegEye } />
//                               </div>
//                           </td>
//                           <td className='p-[12px] text-left font-[11px]'>
//                               <div>
//                                   <Button label="Edit"  icon={ RiEdit2Line } className="bg-teal-500 "/>
//                               </div>
//                           </td>
                         
//                       </tr>
      
//                        <tr>
//                           <td className='p-[12px] text-left '>#10231</td>
//                           <td className='p-[12px] text-left '>Greg</td>
//                           <td className='p-[12px] text-left '>OutletB</td>
//                           <td className='p-[12px] text-left '>jul19, 2025</td>
//                           <td className='p-[12px] text-left text-green-500 font-bold'>Completed</td>
//                           <td className='p-[12px] text-left '>PKR 7,500</td>
//                           <td className='p-[12px] text-left '>Cash</td>
//                           <td className='p-[12px] text-left font-[11px]'>
//                               <div>
//                                   <Button label="view" icon={ FaRegEye } />
//                               </div>
//                           </td>
//                           <td className='p-[12px] text-left font-[11px]'>
//                               <div>
//                                   <Button label="Edit"  icon={ RiEdit2Line } className="bg-teal-500 "/>
//                               </div>
//                           </td>
      
//                       </tr>
      
//                        <tr>
//                           <td className='p-[12px] text-left '>#10231</td>
//                           <td className='p-[12px] text-left '>Philip</td>
//                           <td className='p-[12px] text-left '>OutletB</td>
//                           <td className='p-[12px] text-left '>jul19, 2025</td>
//                           <td  className='p-[12px] text-left text-red-500 font-bold '>Cancelled</td>
//                           <td className='p-[12px] text-left '>PKR 7,500</td>
//                           <td className='p-[12px] text-left '>Cash</td>
//                           <td className='p-[12px] text-left font-[11px]'>
//                               <div>
//                                   <Button label="view" icon={ FaRegEye } />
//                               </div>
//                           </td>
//                           <td className='p-[12px] text-left font-[11px]'>
//                               <div>
//                                   <Button label="Edit"  icon={ RiEdit2Line } className="bg-teal-500 "/>
//                               </div>
//                           </td>
                      
//                       </tr>
      
//                        <tr>
//                           <td className='p-[12px] text-left '>#10231</td>
//                           <td className='p-[12px] text-left '>Marjorie</td>
//                           <td className='p-[12px] text-left '>OutletB</td>
//                           <td className='p-[12px] text-left '>jul19, 2025</td>
//                           <td className='p-[12px] text-left text-green-500 font-bold'>Completed</td>
//                           <td className='p-[12px] text-left '>PKR 7,500</td>
//                           <td className='p-[12px] text-left '>Cash</td>
//                            <td className='p-[12px] text-left font-[11px]'>
//                               <div>
//                                   <Button label="view" icon={ FaRegEye } />
//                               </div>
//                           </td>
//                           <td className='p-[12px] text-left font-[11px]'>
//                               <div>
//                                   <Button label="Edit"  icon={ RiEdit2Line } className="bg-teal-500 "/>
//                               </div>
//                           </td>
//                       </tr>
      
//                       <tr>
//                           <td className='p-[12px] text-left '>#10231</td>
//                           <td className='p-[12px] text-left '>Esther</td>
//                           <td className='p-[12px] text-left '>OutletB</td>
//                           <td className='p-[12px] text-left '>jul19, 2025</td>
//                           <td className='p-[12px] text-left text-green-500 font-bold '>Completed</td>
//                           <td className='p-[12px] text-left '>PKR 7,500</td>
//                           <td className='p-[12px] text-left '>Cash</td>
//                           <td className='p-[12px] text-left font-[11px]'>
//                               <div>
//                                   <Button label="view" icon={ FaRegEye } />
//                               </div>
//                           </td>
//                           <td className='p-[12px] text-left font-[11px]'>
//                               <div>
//                                   <Button label="Edit"  icon={ RiEdit2Line } className="bg-teal-500 "/>
//                               </div>
//                           </td>
      
//                       </tr>
//                   </tbody>
//               </table>
//               </div>

//     </>
//   )
// };

// export default Tables

// edit 

import React from 'react';
import { FaRegEye } from "react-icons/fa6";
import { RiEdit2Line } from "react-icons/ri";
import Button from './ButtonComponent/Button';

const Tables = () => {
  return (
    <div className="mx-4 md:mx-14 my-6 border border-[#e0e6ed] shadow-[0_3px_7px_rgba(0,0,0,0.05)] overflow-x-auto rounded-sm">
      <table className="min-w-[800px] w-full text-left border-collapse">
        <thead className="bg-[#f3f5f7]">
          <tr>
            {['Sale ID', 'Customer', 'Store', 'Date', 'Status', 'Total', 'Payment', 'View', 'Edit'].map((heading, i) => (
              <th
                key={i}
                className="p-3 border-b text-[rgba(4,56,65,1)] text-sm whitespace-nowrap"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            { id: "#10231", name: "Colleen", status: "Completed", color: "text-green-500" },
            { id: "#10232", name: "Mitchell", status: "Pending", color: "text-orange-400" },
            { id: "#10233", name: "Kyle", status: "Completed", color: "text-green-500" },
            { id: "#10234", name: "Debra", status: "Pending", color: "text-orange-400" },
            { id: "#10235", name: "Kristin", status: "Completed", color: "text-green-500" },
            { id: "#10236", name: "Greg", status: "Completed", color: "text-green-500" },
            { id: "#10237", name: "Philip", status: "Cancelled", color: "text-red-500" },
            { id: "#10238", name: "Marjorie", status: "Completed", color: "text-green-500" },
            { id: "#10239", name: "Esther", status: "Completed", color: "text-green-500" }
          ].map((row, i) => (
            <tr key={i} className="transition hover:bg-gray-50">
              <td className="p-3 text-sm font-medium">{row.id}</td>
              <td className="p-3 text-sm">{row.name}</td>
              <td className="p-3 text-sm">OutletB</td>
              <td className="p-3 text-sm">Jul 19, 2025</td>
              <td className={`p-3 text-sm font-bold ${row.color}`}>{row.status}</td>
              <td className="p-3 text-sm">PKR 7,500</td>
              <td className="p-3 text-sm">Cash</td>
              <td className="p-3 text-sm">
                <Button label="View" icon={FaRegEye} />
              </td>
              <td className="p-3 text-sm">
                <Button label="Edit" icon={RiEdit2Line} className="bg-teal-500" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
