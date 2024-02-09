"use client";
import { Button } from '@nextui-org/react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

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
            alert(error.message);
        }
        else{
            alert('successfull payment');
            console.log('payment method', paymentMethod)
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
         <Button type='submit' color="success" disabled={!stripe} className='my-4'>
        Pay
      </Button>
        </form>
    );
};

export default CheckoutForm;