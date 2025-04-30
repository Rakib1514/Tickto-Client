import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useLocation } from 'react-router';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gatway_PK)
const Payment = () => {
	const location = useLocation();
	const { selectedSeats = [], totalPrice = 0 } = location.state || {};

	return (
		<div className='my-28 w-11/12 mx-auto rounded-lg bg-base-200'>
			{/* stripe checkout form  */}
			<Elements stripe={stripePromise}>
				<CheckoutForm totalPrice={totalPrice} selectedSeats={selectedSeats}/>
			</Elements>
		</div>
	);
};

export default Payment;