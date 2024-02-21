"use client";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// TODO: create .env.local file and send pk there and then import.mete.env.file_name

const stripePromis = loadStripe('pk_test_51OEQAXCnHb1beKhZcqkAC2KQw9HRaVVLvO4HbwoL9idNmZJQzrZ9waXzhVLmf1ng9GDYRND9r8Hh8I1mEcsW2hNj002phSnHGo');

const Payment = ({subsPaymentId}) => {
    // const {user} = useContext(AuthContext);
    // console.log(user);

    const allItem = subsInfo.find((item) => item.id == subsPaymentId);
    // console.log(allItem.price);

    return (
        <div>
           <Elements stripe={stripePromis}>
            <CheckoutForm price={allItem.price} title={allItem.title} limit={allItem.limit} ></CheckoutForm>
           </Elements>
        </div>
    );
};

const subsInfo = [
    {
        id: 1,
        title: "Basic",
        limit: "Monthly",
        price: 5.55,
        disc1: "Add Free",
        disc2: "Direct Contact With HR",
        disc3: "Full Support For A Month",
        disc4: "See Premium Post",
  
    },
    {
        id: 2,
        title: "Basic",
        limit: "Yearly",
        price: 55.25,
        disc1: "Add Free",
        disc2: "Direct Contact With HR",
        disc3: "Full Support For A Year",
        disc4: "See Premium Post",
  
    },
    {
        id: 3,
        title: "Premium",
        limit: "Monthly",
        price: 10.99,
        disc1: "Add Free",
        disc2: "Direct Contact With HR",
        disc3: "Full Support For A Month",
        disc4: "Get Interview Directly ",
  
    },
    {
        id: 4,
        title: "Premium",
        limit: "Yearly",
        price: 99.99,
        disc1: "Add Free",
        disc2: "Direct Contact With HR",
        disc3: "Full Support For A Year",
        disc4: "Get Interview Directly",
    },
  ]

export default Payment;