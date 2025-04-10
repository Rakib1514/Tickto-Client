import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gatway_PK)
const Payment = () => {
	return (
		<div className='my-8 w-11/12 mx-auto rounded-lg bg-base-200'>
			<Elements stripe={stripePromise}>
				<CheckoutForm/>
			</Elements>
		</div>
	);
};

export default Payment;