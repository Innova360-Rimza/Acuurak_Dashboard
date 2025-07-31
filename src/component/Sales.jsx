import React from 'react';
import Tables from './Tables';
import Inputs from './Inputs';
import TabNav from './TabNav';
import SaleInvoice from '../SalesView/SaleInvoice';
import CustomerInformatio from '../CreateNewSale/CustomerInformatio';
import PaymentInformation from '../CreateNewSale/PaymentInformation';
import AssignDeriver from '../AssignDriver/AssignDeriver';







const Sales = () => {
  return (
    <>
    
<div className="border border-[#e0e6ed] md:m-4 md:mx-14 rounded-[10px] shadow-[0_2px_5px_rgba(0,0,0,0.05)] overflow-hidden font-jakarta">

<TabNav/>
<Inputs/>
<Tables/>     
</div>

{/* <SaleInvoice/> */}
{/* <CustomerInformatio/>
<PaymentInformation/> */}
{/* <AssignDeriver/> */}
</>
   
  )
}

export default Sales;
