"use client";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

// TODO: create .env.local file and send pk there and then import.mete.env.file_name

const stripePromis = loadStripe('pk_test_51OEQAXCnHb1beKhZcqkAC2KQw9HRaVVLvO4HbwoL9idNmZJQzrZ9waXzhVLmf1ng9GDYRND9r8Hh8I1mEcsW2hNj002phSnHGo');

const Payment = () => {
    return (
        <div>
           <Elements stripe={stripePromis}>
            <CheckoutForm></CheckoutForm>
           </Elements>
        </div>
    );
};

export default Payment;