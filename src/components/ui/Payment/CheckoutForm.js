"use client";

import { AuthContext } from "@/providers/AuthProvider";
import { Button, Card } from "@nextui-org/react";
import {
  CardElement,
  useElements,
  useStripe,
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
const option = {
  style: {
    base: {
      iconColor: "#5e503f",
      fontSize: "16px",
      color: "#424770",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};

const CheckoutForm = ({ price, title, limit }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://dream-finder-server.vercel.app/createPayment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardNumberElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    } else {
      
      console.log("payment method", paymentMethod);
      router.push("/");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.name || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error", confirmError.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: confirmError.message,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Welcome ! Now you're a ${limit} ${title} user.`,
        showConfirmButton: false,
        timer: 2000,
      });
      console.log("payment intent", paymentIntent);

      const paymentInfo = {
        user: user?.email,
        amount: paymentIntent?.amount,
        paymentId: paymentIntent?.id,
        paymentClientSecret: paymentIntent?.client_secret,
        paymentStatus: paymentIntent?.status,
      }

      await fetch(`http://localhost:5000/users/paymentInfo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentInfo),
      })
      .then(res => res.json())
      .then(data => console.log(data))

      
      
      let membership = '';
      if(paymentIntent.amount === 5.55*100){
        membership = "basicMonth"
      }
     else if(paymentIntent.amount === 55.25*100){
        membership = "basicYear"
      }
     else if(paymentIntent.amount === 10.99*100){
        membership = "premiumMonth"
      }
      else {
        membership = "premiumYear"
      };
      
      await fetch(`http://localhost:5000/users/update/${user?.email}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packege: membership }),
      })
      .then(res => res.json())
      .then(data => console.log(data))

    }
  };

  return (
    <div className=" flex  items-center">
      <div className="w-full">
       
        <Card className="max-w-lg rounded-sm px-5 md:px-10 py-5 shadow-xl  border-2">
          <form onSubmit={handleSubmit} className="">
           
            <div className="py-3  border-b-2">
              <CardNumberElement options={option} />
            </div>
            <div className="py-3  border-b-2">
              <CardCvcElement options={option} />
            </div>
            <div className="py-3  border-b-2">
              <CardExpiryElement options={option} />
            </div>
            <Button
              type="submit"
              isDisabled={!stripe || !clientSecret}
              color="success"
              variant={!stripe || !clientSecret ? "faded" : "solid"}
              className="my-4 rounded-sm text-white font-bold"
            >
              PAY ${price}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};



export default CheckoutForm;
