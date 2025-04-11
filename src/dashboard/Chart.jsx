import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function Chart() {
  // Example Data for Booking Statistics
  const bookingData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Bookings',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  // Example Data for Payment Trends
  const paymentData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Payments',
        data: [300, 500, 200, 400, 300, 450],
        backgroundColor: 'rgb(153, 102, 255)',
        borderColor: 'rgb(153, 102, 255)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mb-20 bg-gray-50">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Booking Statistics Graph */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-4 text-xl font-semibold">Booking Statistics</h3>
          <Line
            data={bookingData}
            options={{
              responsive: true,
              plugins: { title: { display: true, text: 'Monthly Bookings' } },
            }}
          />
        </div>

        {/* Payment Trends Graph */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-4 text-xl font-semibold">Payment Trends</h3>
          <Bar
            data={paymentData}
            options={{
              responsive: true,
              plugins: { title: { display: true, text: 'Monthly Payments' } },
            }}
          />
        </div>
      </div>
    </div>
  );
}
