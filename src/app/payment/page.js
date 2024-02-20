import PaymentDynamicPage from '@/app/payment/[subsPaymentId]/page';
import React from 'react';
// import PaymentPage from '@/components/ui/Subscribe/[subsId]/page';
const PaymentPage = () => {
    return (
        <div>
            
           
            {/* <Payment></Payment> */}
            <PaymentDynamicPage></PaymentDynamicPage>
            
        </div>
    );
};

export default PaymentPage;