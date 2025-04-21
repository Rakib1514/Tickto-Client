import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';

const AllPaymentReport = () => {
  const { data: payments = { data: [] }, isLoading } = useQuery({
    queryKey: ['payments'],
    queryFn: async () => {
      const res = await axios.get('/payments');
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <FaSpinner className="animate-spin text-4xl text-primary" />
      </div>
    );
  }

  return (
    <div className="my-16 px-4 md:px-10">
      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Total Payments: {payments?.data?.length}
      </h1>

      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full text-sm md:text-base">
          {/* head */}
          <thead className="bg-base-200 text-base font-medium">
            <tr>
              <th>Sl</th>
              <th>Email</th>
              <th>Price</th>
              <th>Transaction ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments?.data?.map((payment, index) => (
              <tr key={payment.transactionId}>
                <td>{index + 1}</td>
                <td>{payment.email}</td>
                <td>${payment.price}</td>
                <td className="break-all">{payment.transactionId}</td>
                <td>
                  <span
                    className={`badge ${
                      payment.status === 'paid'
                        ? 'badge-success'
                        : 'badge-warning'
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPaymentReport;
