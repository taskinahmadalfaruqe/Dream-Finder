"use client";

import { AuthContext } from '@/providers/AuthProvider';
import { Button } from '@nextui-org/react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const CheckoutForm = ({price, title, limit}) => {
  // console.log(price)
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const router = useRouter();
    const {user} = useContext(AuthContext);
    console.log(user);


    useEffect( () =>{
      fetch("https://dream-finder-server.vercel.app/createPayment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({price})
      })
      
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.clientSecret);
        setClientSecret(data.clientSecret)
      });
    },[])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if(card == null){
            return;
        };

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if(error){
            console.log('payment error');
            
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: (error.message),
              });
           
        }
        else{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Welcome ! Now you're a ${limit} ${title} user.`,
                showConfirmButton: false,
                timer: 2000
              });
            console.log('payment method', paymentMethod)
            router.push('/');
        };

        // confirm payment
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details:{
              email: user?.email || 'annonymous',
              name: user?.name || 'annonymous',
            }
          }

        })

        if(confirmError){
          console.log('confirm error', confirmError.message)
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: (confirmError.message),
          });
        }
        else{
          console.log('payment intent', paymentIntent);
        }

    }

    return (
        <form onSubmit={handleSubmit} className='w-2/3 mx-auto my-10'>
             <CardElement className='border-2 border-red-500 shadow-xl rounded p-10'
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
<Button type='submit' color="success" disabled={!stripe || !clientSecret} className='my-4'>
      Pay
    </Button>
         
        </form>
    );
};




export default CheckoutForm;