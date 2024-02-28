import NextNavbar from '@/components/shared/NextNav';
import Payment from '@/components/ui/Payment/Payment';
import React from 'react';

const PaymentDynamicPage = ({params}) => {
    return (
       <div>
        <NextNavbar />
         <div className='dark:bg-[#000000]  bg-lightWhiteColor  h-lvh '>
            <Payment subsPaymentId={params?.subsPaymentId}></Payment>
        </div>
       </div>
    );
};
// bg-lightWhiteColor 

export default PaymentDynamicPage;