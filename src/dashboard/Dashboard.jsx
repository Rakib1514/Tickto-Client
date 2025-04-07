import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FaMoneyBillAlt, FaTicketAlt, FaRegCalendarAlt, FaHistory } from 'react-icons/fa';
// React Icons
import { FaUserCircle, FaSignOutAlt, FaCreditCard } from 'react-icons/fa';
import { MdDashboard, MdLocalActivity, MdSettings } from 'react-icons/md';
import { AiOutlineProfile } from 'react-icons/ai';
import { RiSecurePaymentLine, RiUserSettingsLine } from 'react-icons/ri';
import { HiOutlineShieldCheck } from 'react-icons/hi'; // For admin icon
import { IoTicketOutline } from 'react-icons/io5'; 
import { BsBookmarkCheck, BsCardChecklist } from 'react-icons/bs';
import Chart from './Chart';
import TotalRevenue from './TotalRevenue';

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  // Conditionally render admin routes if the user is an admin
  const isAdmin = user?.role === 'user';

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
            <div className="text-sm font-medium text-gray-900">
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
            <>
                <li>
                  <Link
                    to="/dashboard/admin-dashboard"
                    className="flex items-center gap-2 py-2 px-3 text-gray-800 rounded  hover:bg-[#C2D1C6]"
                  >
                    <HiOutlineShieldCheck className="text-lg" />
                    Admin Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/admin/manage-user"
                    className="flex items-center gap-2 py-2 px-3 text-gray-800 rounded  hover:bg-[#C2D1C6]"
                  >
                    <RiUserSettingsLine className="text-lg" />
                    Manage Users
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/admin/manage-tickets"
                    className="flex items-center gap-2 py-2 px-3 text-gray-800 rounded  hover:bg-[#C2D1C6]"
                  >
                    <MdSettings className="text-lg" />
                    Manage Tickets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/admin/add-event"
                    className="flex items-center gap-2 py-2 px-3 text-gray-800 rounded  hover:bg-[#C2D1C6]"
                  >
                    <IoTicketOutline className="text-lg" />
                    Add  Event
                  </Link>
                </li>
             
                <li>
                  <Link
                    to="/dashboard/admin/booking-reports"
                    className="flex items-center gap-2 py-2 px-3 text-gray-800 rounded  hover:bg-[#C2D1C6]"
                  >
                    <MdLocalActivity className="text-lg" />
                    Booking Reports
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/admin/payment-reports"
                    className="flex items-center gap-2 py-2 px-3 text-gray-800 rounded  hover:bg-[#C2D1C6]"
                  >
                    <FaCreditCard className="text-lg" />
                    Payment Reports
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/admin/setting"
                    className="flex items-center gap-2 py-2 px-3 text-gray-800 rounded  hover:bg-[#C2D1C6]"
                  >
                    <MdSettings className="text-lg" />
                    Settings
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
              </>


           
            

            {/* Admin Routes (conditional) */}
            {user && (
             <>
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
                <BsBookmarkCheck className="text-lg" />
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
             </>
            )}
          </ul>
        </nav>
      </aside>

      {/* Page Content */}
      <main className="flex-1 ml-0 lg:ml-64 p-4 bg-gray-50  min-h-screen">
        <Outlet />
           
      </main>
    </div>
  );
}
