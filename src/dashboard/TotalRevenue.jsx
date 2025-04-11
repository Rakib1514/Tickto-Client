import React from 'react';
import { FaMoneyBillAlt, FaTicketAlt, FaRegCalendarAlt, FaHistory } from 'react-icons/fa';
// React Icons

// import { FaUserCircle, FaSignOutAlt, FaCreditCard } from 'react-icons/fa';
export default function TotalRevenue() {
  return (
    <div>
      <div className="bg-gray-50 p-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {/* Total Balance Card */}
          <div className="flex items-center space-x-4 rounded-lg bg-white p-6 shadow-md">
            <FaMoneyBillAlt className="text-3xl text-green-500" />
            <div>
              <h3 className="text-lg font-semibold">Total Balance</h3>
              <p className="text-2xl font-bold">$1,200.00</p>
            </div>
          </div>

          {/* Upcoming Events Card */}
          <div className="flex items-center space-x-4 rounded-lg bg-white p-6 shadow-md">
            <FaRegCalendarAlt className="text-3xl text-blue-500" />
            <div>
              <h3 className="text-lg font-semibold">Upcoming Events</h3>
              <p className="text-sm">2 Events Booked</p>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>Concert - 12th May</li>
                <li>Theater Play - 18th May</li>
              </ul>
            </div>
          </div>

          {/* Recent Bookings Card */}
          <div className="flex items-center space-x-4 rounded-lg bg-white p-6 shadow-md">
            <FaTicketAlt className="text-3xl text-orange-500" />
            <div>
              <h3 className="text-lg font-semibold">Recent Bookings</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>Music Festival - 10th April</li>
                <li>Theater Show - 5th April</li>
              </ul>
            </div>
          </div>

          {/* Payment History Card */}
          <div className="flex items-center space-x-4 rounded-lg bg-white p-6 shadow-md">
            <FaHistory className="text-3xl text-purple-500" />
            <div>
              <h3 className="text-lg font-semibold">Payment History</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>Concert - Paid $100 - 1st April</li>
                <li>Theater Play - Paid $50 - 25th March</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
