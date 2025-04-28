/* eslint-disable no-unused-vars */
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaCcVisa, FaChair, FaMoneyBillWave } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const CheckoutForm = ({totalPrice, selectedSeats}) => {

  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  
  const {user} = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const resetForm = () => {
    const cardNumber = elements.getElement(CardNumberElement);
    const cardExpiry = elements.getElement(CardExpiryElement);
    const cardCvc = elements.getElement(CardCvcElement);
    if (cardNumber) cardNumber.clear();
    if (cardExpiry) cardExpiry.clear();
    if (cardCvc) cardCvc.clear();

    setError('');
    setTransactionId('');
    setClientSecret('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      Swal.fire({
        icon: 'error',
        title: 'Stripe Error',
        text: 'Payment system not loaded. Please refresh the page.',
      });
      return;
    }

    const cardNumber = elements.getElement(CardNumberElement);
    if (cardNumber === null) {
      Swal.fire({
        icon: 'error',
        title: 'Input Error',
        text: 'Card number field is missing. Please try again.',
      });
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardNumber,
      billing_details: {
        email: user?.email || 'anonymous',
        name: user?.name || 'anonymous',
        address: { postal_code: null }
      }
    });

    if (error) {
      setError(error.message);
      Swal.fire({
        icon: 'error',
        title: 'Payment Method Error',
        text: error.message || 'Failed to create payment method.',
      });
      return;
    } else {
      setError('');
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardNumber,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.name || 'anonymous',
          address: { postal_code: null }
        }
      }
    });

    if (confirmError) {
      setError(confirmError.message);
      Swal.fire({
        icon: 'error',
        title: 'Payment Confirmation Error',
        text: confirmError.message || 'Failed to confirm payment.',
      });
      return;
    } 

    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);

      const payment = {
        name: user?.displayName,
        email: user?.email,
        price: totalPrice,
        selectedSeats,
        transactionId: paymentIntent.id,
        date: new Date(),
        status: 'pending',
      };

      try {
        const res = await axios.post('/payments', payment);
       
        if (res.data?.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Payment Successful',
            html: `
              <p>Amount: $${totalPrice}</p>
              <p>Transaction ID: ${paymentIntent.id}</p>
            `,
            showConfirmButton: true,
            confirmButtonText: 'OK',
            timer: 5000,
            timerProgressBar: true,
          }).then(() => {
            resetForm();
            navigate('/dashboard/payments')
          });
        }
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Server Error',
          text: 'Failed to save payment details. Contact support.',
        });
      }
    }
  };

  const elementOptions = {
    style: {
      base: {
        fontSize: '14px', // Reduced base font size for smaller screens
        color: '#424770',
        '::placeholder': { color: '#aab7c4' },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

  useEffect(() => {
    if (totalPrice > 0) {
      axios.post('/create-payment-intent', { price: totalPrice, selectedSeats })
        .then(res => {
          setClientSecret(res.data.clientSecret);
        })
        .catch(err => {
          console.error('Error creating payment intent:', err);
          Swal.fire({
            icon: 'error',
            title: 'Payment Initialization Error',
            text: 'Failed to initialize payment. Please try again.',
          });
        });
    }
  }, [totalPrice]);
  

  return (
    <div className="w-11/12 mx-auto max-w-xs sm:max-w-sm md:max-w-md py-4 px-2 sm:px-4 lg:px-6 ">
      <div className="bg-base-100 shadow-xl rounded-xl p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
        {/* Display selected seats and total price */}
              <div className="w-full  max-w-md text-center bg-gradient-to-r from-teal-900 to-teal-400 text-white rounded-xl p-3 sm:p-4">
                <h2 className="sm:text-xl md:text-2xl lg:text-2xl font-bold mb-4 text-white flex justify-center items-center gap-2">
                <FaMoneyBillWave className="text-white" /> Payment Summary
                </h2>
                
                <p className="text-white text-sm sm:text-base mb-2 flex justify-center items-start sm:items-center gap-2 flex-wrap">
                <FaChair className="text-white mt-1 sm:mt-0" />
                <span className="font-semibold">Selected Seats:</span> 
                <span className="ml-1 text-white font-medium break-words">{selectedSeats.join(', ') || 'None'}</span>
                </p>
                
                <p className="text-white text-sm sm:text-base flex justify-center items-center gap-2">
                <FaMoneyBillWave className="text-white" />
                <span className="font-semibold">Total Price:</span> 
                <span className="ml-1 text-white font-medium">৳ {totalPrice}</span>
                </p>
              </div>
        {/* Card Preview */}
        <div className="bg-gradient-to-r from-teal-900 to-teal-400 text-white rounded-xl p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <FaCcVisa className="text-2xl sm:text-3xl md:text-4xl" />
            <p className="text-sm sm:text-base md:text-lg font-semibold">BANK</p>
          </div>
          <p className="mt-2 sm:mt-4 tracking-widest text-base sm:text-lg md:text-xl font-semibold">
            1234 5678 9012 3456
          </p>
          <div className="flex justify-between mt-2 sm:mt-3 text-[10px] sm:text-xs md:text-sm">
            <div>
              <p className="text-[10px] sm:text-xs">CARDHOLDER</p>
              <p>{user?.name}</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs">EXPIRES</p>
              <p>00/00</p>
            </div>
          </div>
        </div>

        {/* Stripe Payment Form */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div className="space-y-3 sm:space-y-4">
            {/* Card Number */}
            <div className="p-2 sm:p-3 border rounded-lg">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Card Number</label>
              <CardNumberElement options={elementOptions} />
            </div>

            {/* Expiry and CVC in a Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div className="p-2 sm:p-3 border rounded-lg">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
                <CardExpiryElement options={elementOptions} />
              </div>
              <div className="p-2 sm:p-3 border rounded-lg">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">CVC</label>
                <CardCvcElement options={elementOptions} />
              </div>
            </div>
          </div>

          <button
            className="btn btn-primary w-full uppercase text-xs sm:text-sm md:text-base"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay Now: ৳ {totalPrice} 
          </button>

          {error && <p className="text-red-500 text-[10px] sm:text-xs md:text-sm">{error}</p>}
          {transactionId && (
            <p className="text-green-600 text-[10px] sm:text-xs md:text-sm font-medium">
              ✅ Transaction ID: {transactionId}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;