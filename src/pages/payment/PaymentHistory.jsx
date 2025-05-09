import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import PdfTicket from '../../components/PdfTicket';
import Swal from 'sweetalert2';

const PaymentHistory = () => {
  const {user} = useSelector((state) => state.auth);


  const { data: payments = [], isLoading } = useQuery({
    queryKey: ['payments', user?.email],
    queryFn: async () => {
      const res = await axios.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  const handleRefund = async (paymentId) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'You want to refund this ticket?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#317371',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, refund it!',
    });
  
    if (confirm.isConfirmed) {
      try {
        const res = await axios.patch(`/payments/${paymentId}/refund`);
        if (res.data.success) {
          Swal.fire('Refunded!', 'Your ticket has been refunded.', 'success');
          refetch(); // Refetch payment data
        }
      } catch (err) {
        Swal.fire('Error', err.response?.data || 'Something went wrong', 'error');
      }
    }
  };
  

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <FaSpinner className="text-4xl text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="my-16 px-4 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#317371] mb-6">
        My Payment History
      </h2>

      {payments.length === 0 ? (
        <div className="text-center text-lg text-gray-500 font-medium">
          No payment history found.
        </div>
      ) : (
        <div className="overflow-x-auto w-full shadow-lg rounded-xl bg-white">
          <table className="table w-full table-zebra">
            {/* head */}
            <thead className="bg-[#A2B9A7] text-white text-base">
              <tr>
                <th>Sl</th>
                <th>Email</th>
                <th>Price</th>
                <th>Transaction ID</th>
                <th>Selected Seat</th>
                <th>Refund</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment.transactionId} className="hover">
                  <td>{index + 1}</td>
                  <td>{payment.email}</td>
                  <td className="text-[#F67E04] font-semibold">
                    {payment.price} Tk.
                  </td>
                  <td className="break-all text-sm">{payment.transactionId}</td>
                  <td className="break-all text-sm">{/* Check if selectedSeats exists and is an array */}
                    {Array.isArray(payment.selectedSeats) && payment.selectedSeats.length > 0
                      ? payment.selectedSeats.join(', ') 
                      : 'None'}</td>
                      <td>
                        {payment.status === "paid" &&
                        new Date(payment.tripInfo.departureTime) - new Date() > 60 * 60 * 1000 ? (
                          <button
                            onClick={() => handleRefund(payment._id)}
                            className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
                          >
                            Refund
                          </button>
                        ) : payment.status === "refunded" ? (
                          <span className="text-red-500 font-semibold">Refunded</span>
                        ) : (
                          <span className="text-gray-400 text-sm">Not eligible</span>
                        )}
                      </td>

                  <td>
                    
                    {/* <FaDownload/> */}
                     {/* Pass payment object to PdfTicket component */}
                     <PdfTicket payment={payment} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
