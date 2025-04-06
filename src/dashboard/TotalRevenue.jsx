import React from 'react'
import { FaMoneyBillAlt, FaTicketAlt, FaRegCalendarAlt, FaHistory } from 'react-icons/fa';
// React Icons

// import { FaUserCircle, FaSignOutAlt, FaCreditCard } from 'react-icons/fa'; 
export default function TotalRevenue() {
  return (
    <div>
                 <div className=" p-6 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Total Balance Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaMoneyBillAlt className="text-3xl text-green-500" />
          <div>
            <h3 className="text-lg font-semibold">Total Balance</h3>
            <p className="text-2xl font-bold">$1,200.00</p>
          </div>
        </div>

        {/* Upcoming Events Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaRegCalendarAlt className="text-3xl text-blue-500" />
          <div>
            <h3 className="text-lg font-semibold">Upcoming Events</h3>
            <p className="text-sm">2 Events Booked</p>
            <ul className="text-sm text-gray-600 space-y-1 mt-2">
              <li>Concert - 12th May</li>
              <li>Theater Play - 18th May</li>
            </ul>
          </div>
        </div>

        {/* Recent Bookings Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaTicketAlt className="text-3xl text-orange-500" />
          <div>
            <h3 className="text-lg font-semibold">Recent Bookings</h3>
            <ul className="text-sm text-gray-600 space-y-1 mt-2">
              <li>Music Festival - 10th April</li>
              <li>Theater Show - 5th April</li>
            </ul>
          </div>
        </div>

        {/* Payment History Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaHistory className="text-3xl text-purple-500" />
          <div>
            <h3 className="text-lg font-semibold">Payment History</h3>
            <ul className="text-sm text-gray-600 space-y-1 mt-2">
              <li>Concert - Paid $100 - 1st April</li>
              <li>Theater Play - Paid $50 - 25th March</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
