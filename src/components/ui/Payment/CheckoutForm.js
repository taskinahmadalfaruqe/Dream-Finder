"use client";
import { Button } from '@nextui-org/react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { redirect, useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const CheckoutForm = ({price}) => {
  // console.log(price)
    const stripe = useStripe();
    const elements = useElements();
    
    const [clientSecret, setClientSecret] = useState('');

    useEffect( () =>{
      fetch("http://localhost:5000/createPayment", {     //192.168.0.88
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({price})
      })
      
      .then((res) => res.json())
      .then((data) => {
        console.log(data.clientSecret);
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
            // alert(error.message);
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
                title: "Your payment has been received successfully!",
                showConfirmButton: false,
                timer: 1500
              });
            console.log('payment method', paymentMethod)
            // redirect('/');
        }
    }

    return (
        <form onSubmit={handleSubmit} className='w-2/3 mx-auto my-10'>
             <CardElement
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