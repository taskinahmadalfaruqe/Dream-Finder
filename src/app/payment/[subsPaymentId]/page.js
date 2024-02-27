import NextNavbar from '@/components/shared/NextNav';
import Payment from '@/components/ui/Payment/Payment';
import React from 'react';

const PaymentDynamicPage = ({params}) => {
    return (
       <div>
        <NextNavbar />
         <div className='bg-lightWhiteColor  h-lvh '>
         
            <Payment subsPaymentId={params?.subsPaymentId}></Payment>
        </div>
       </div>
    );
};

export default PaymentDynamicPage;