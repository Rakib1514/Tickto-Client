import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FaMoneyBillAlt, FaTicketAlt, FaRegCalendarAlt, FaHistory } from 'react-icons/fa';
// React Icons
import { FaUserCircle, FaSignOutAlt, FaCreditCard } from 'react-icons/fa';
import { MdDashboard, MdLocalActivity, MdSettings } from 'react-icons/md';
import { AiOutlineProfile } from 'react-icons/ai';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { HiOutlineShieldCheck } from 'react-icons/hi'; // For admin icon
import { IoTicketOutline } from 'react-icons/io5'; 
import { BsCardChecklist } from 'react-icons/bs';
import Chart from './Chart';

export default function Dashboard() {
  const { user, logOut } = useContext(AuthContext);

  // Conditionally render admin routes if the user is an admin
  const isAdmin = user?.role === 'admin';

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside
        id="hs-sidebar-header"
        className=" bg-gray-100   w-64 fixed top-0 left-0 h-full transition-transform transform -translate-x-full lg:translate-x-0 z-50 text-gray-900"
      >
        {/* Sidebar Header */}
        <header className="p-4 flex justify-between items-center">
          <span className=" w-full text-xl font-bold text-gray-900 border-b-2 border-gray-300 pb-2">🎟 TickTo</span>
      
          <button
            type="button"
            className="lg:hidden text-gray-900 dark:text-gray-900"
            data-hs-overlay="#hs-sidebar-header"
          >
            ✕
          </button>
        </header>

        {/* User Info */}
        <div className="p-4   ">
          <div className="flex items-center gap-2">
            <img
              className="w-10 h-10 rounded-full"
              src={user?.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s"}
              alt="User Avatar"
            />
            <div className="text-sm font-medium text-gray-900 text-gray-900">
              {user?.displayName || 'Anonymous'}
            </div>
          </div>
          {/* <button
            onClick={logOut}
            className="mt-2 flex items-center gap-1 text-sm text-blue-600 hover:underline dark:text-blue-900 font-semibold"
          >
            <FaSignOutAlt /> Sign out
          </button> */}
        </div>

        {/* Nav */}
        <nav className="p-4 overflow-y-auto">
          <ul className="space-y-2">
            {/* User Routes */}
            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-2 py-2 px-3 text-gray-800 rounded  hover:bg-[#C2D1C6] font-semibold  "
              >
                <MdDashboard className="text-lg" />
                User Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/bookings"
                className="flex items-center gap-2 py-2 px-3 text-gray-800 rounded hover:bg-[#C2D1C6] "
              >
                <MdLocalActivity className="text-lg" />
                My Bookings
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/my-profile"
                className="flex items-center gap-2 py-2 px-3 text-gray-800 rounded  hover:bg-[#C2D1C6]"
              >
                <AiOutlineProfile className="text-lg" />
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/payments"
                className="flex items-center gap-2 py-2 px-3 text-gray-800 rounded  hover:bg-[#C2D1C6]"
              >
                <FaCreditCard className="text-lg" />
                My Payment History
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/checkout"
                className="flex items-center gap-2 py-2 px-3 text-gray-800  rounded  hover:bg-[#C2D1C6]"
              >
                <MdSettings className="text-lg" />
                Ticket Checkout
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/confirmation"
                className="flex items-center gap-2 py-2 px-3 text-gray-800  rounded  hover:bg-[#C2D1C6]"
              >
                <RiSecurePaymentLine className="text-lg" />
                Payment Confirmation
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 py-2 px-3 text-gray-800 rounded  hover:bg-[#C2D1C6]"
              >
                <RiSecurePaymentLine className="text-lg" />
                Back to home
              </Link>
            </li>
            

            {/* Admin Routes (conditional) */}
            {isAdmin && (
              <>
                <li>
                  <Link
                    to="/dashboard/admin"
                    className="flex items-center gap-2 py-2 px-3 text-gray-800 text-gray-900 rounded  hover:bg-[#C2D1C6]"
                  >
                    <HiOutlineShieldCheck className="text-lg" />
                    Admin Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/admin/manage-users"
                    className="flex items-center gap-2 py-2 px-3 text-gray-800 text-gray-900 rounded  hover:bg-[#C2D1C6]"
                  >
                    <MdSettings className="text-lg" />
                    Manage Users
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/admin/manage-tickets"
                    className="flex items-center gap-2 py-2 px-3 text-gray-800 text-gray-900 rounded  hover:bg-[#C2D1C6]"
                  >
                    <MdSettings className="text-lg" />
                    Manage Tickets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/add-ticket"
                    className="flex items-center gap-2 py-2 px-3 text-gray-800 text-gray-900 rounded  hover:bg-[#C2D1C6]"
                  >
                    <IoTicketOutline className="text-lg" />
                    Add Ticket / Event
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/tickets"
                    className="flex items-center gap-2 py-2 px-3 text-gray-800 text-gray-900 rounded  hover:bg-[#C2D1C6]"
                  >
                    <BsCardChecklist className="text-lg" />
                    Manage Tickets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/bookings"
                    className="flex items-center gap-2 py-2 px-3 text-gray-800 text-gray-900 rounded  hover:bg-[#C2D1C6]"
                  >
                    <MdLocalActivity className="text-lg" />
                    Booking Reports
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/payments"
                    className="flex items-center gap-2 py-2 px-3 text-gray-800 text-gray-900 rounded  hover:bg-[#C2D1C6]"
                  >
                    <FaCreditCard className="text-lg" />
                    Payment Reports
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/settings"
                    className="flex items-center gap-2 py-2 px-3 text-gray-800 text-gray-900 rounded  hover:bg-[#C2D1C6]"
                  >
                    <MdSettings className="text-lg" />
                    Settings
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </aside>

      {/* Page Content */}
      <main className="flex-1 ml-0 lg:ml-64 p-4 bg-gray-50  min-h-screen">
        <Outlet />
              <div>
              <input type="text" placeholder="Type.." className="input input-neutral ml-7" />
              </div>
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
    <Chart />
      </main>
    </div>
  );
}
