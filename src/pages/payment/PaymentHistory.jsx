import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const PaymentHistory = () => {
	const { user } = useContext(AuthContext);

	const { data: payments = [] } = useQuery({
		queryKey: ['payments', user?.email],
		queryFn: async()=>{
			const res = await axios.get(`/payments/${user?.email}`);
			return res.data;
		}
	})
	return (
		<div>
			<h1 className='text-xl'>Total Payments: {payments.length}</h1>
			<div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Sl</th>
        <th>Email</th>
        <th>Price</th>
        <th>Transaction Id</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
	  	payments.map((payment, index) => 
		<tr key={payment.id}>
		  <td>{index + 1}</td>
		  <td>{payment.email}</td>
		  <td>{payment.price}</td>
		  <td>{payment.transactionId}</td>
		  <td>{payment.status}</td>
		</tr>)
	  }
  
     
    </tbody>
  </table>
</div>
		</div>
	);
};

export default PaymentHistory;