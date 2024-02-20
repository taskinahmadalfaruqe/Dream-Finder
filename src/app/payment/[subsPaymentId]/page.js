import Payment from '@/components/ui/Payment/Payment';
import React from 'react';
// import Payment from '../../Payment/Payment';

const PaymentDynamicPage = ({params}) => {
    // console.log(params.subsPaymentId);
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-8'>Give Your Payment Here !</h2>
            <Payment subsPaymentId={params.subsPaymentId}></Payment>
        </div>
    );
};

export default PaymentDynamicPage;