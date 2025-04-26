import React, { useState } from "react";
import { Link, Outlet } from "react-router";
// React Icons
import { AiOutlineProfile } from "react-icons/ai";
import { BsBookmarkCheck } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa";
import { HiOutlineShieldCheck } from "react-icons/hi"; // For admin icon
import { IoTicketOutline } from "react-icons/io5";
import { MdDashboard, MdLocalActivity, MdSettings } from "react-icons/md";
import { RiSecurePaymentLine, RiUserSettingsLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import Logo from "../components/Shared/Logo";
import useAdmin from "../hooks/useAdmin";

export default function Dashboard() {

  const {user} = useSelector((state) => state.auth); 
  
  const [isBusExpanded, setIsBusExpanded] = useState(false); // State for expandable button

  // Conditionally render admin routes if the user is an admin
  // const isAdmin = user?.role === 'user';
  const [isAdmin] = useAdmin();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        id="hs-sidebar-header"
        className="fixed top-0 left-0 z-50 h-full w-64 -translate-x-full transform bg-gray-100 text-gray-900 transition-transform lg:translate-x-0"
      >
        {/* Sidebar Header */}
        <header className="flex items-center justify-between p-4">
          <span className="w-full border-b-2 border-gray-300 pb-2 text-xl font-bold text-gray-900">
            <Link to="/" className="flex gap-2 items-center">
              <Logo />
              <div className="text-2xl md:text-3xl font-bold">
                <span className="text-[#317371]">Tick</span>
                <span className="">To</span>
              </div>
            </Link>
          </span>

          <button
            type="button"
            className="text-gray-900 lg:hidden dark:text-gray-900"
            data-hs-overlay="#hs-sidebar-header"
          >
            ✕
          </button>
        </header>

        {/* User Info */}
        <div className="p-4">
          <div className="flex items-center gap-2">
            <img
              className="h-10 w-10 rounded-full"
              src={
                user?.photoURL ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s"
              }
              alt="User Avatar"
            />
            <div className="text-sm font-medium text-gray-900">
              {user?.displayName || "Anonymous"}
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="overflow-y-auto p-4">
          <ul className="space-y-2">
            {/* User Routes */}
            {isAdmin ? (
              <>
                <li>
                  <Link
                    to="/dashboard/admin-dashboard"
                    className="flex items-center gap-2 rounded px-3 py-2 text-gray-800 hover:bg-[#C2D1C6]"
                  >
                    <HiOutlineShieldCheck className="text-lg" />
                    Admin Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/admin/manage-user"
                    className="flex items-center gap-2 rounded px-3 py-2 text-gray-800 hover:bg-[#C2D1C6]"
                  >
                    <RiUserSettingsLine className="text-lg" />
                    Manage Users
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/admin/manage-tickets"
                    className="flex items-center gap-2 rounded px-3 py-2 text-gray-800 hover:bg-[#C2D1C6]"
                  >
                    <MdSettings className="text-lg" />
                    Manage Tickets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/admin/add-event"
                    className="flex items-center gap-2 rounded px-3 py-2 text-gray-800 hover:bg-[#C2D1C6]"
                  >
                    <IoTicketOutline className="text-lg" />
                    Add Event
                  </Link>
                </li>

                {/* Expandable Bus Section */}
                <li>
                  <button
                    onClick={() => setIsBusExpanded(!isBusExpanded)}
                    className="flex w-full items-center justify-between gap-2 rounded px-3 py-2 text-gray-800 hover:bg-[#C2D1C6]"
                  >
                    <IoTicketOutline className="text-lg" />
                    <span>Bus</span>
                    <span>{isBusExpanded ? "▲" : "▼"}</span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isBusExpanded
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="ml-6 space-y-2 py-2">
                      <li>
                        <Link
                          to="/dashboard/add-bus"
                          className="flex items-center gap-2 rounded px-3 py-2 text-gray-800 hover:bg-[#C2D1C6]"
                        >
                          <IoTicketOutline className="text-lg" />
                          Add Bus
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dashboard/create-trip"
                          className="flex items-center gap-2 rounded px-3 py-2 text-gray-800 hover:bg-[#C2D1C6]"
                        >
                          <IoTicketOutline className="text-lg" />
                          Create Trip
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dashboard/manage-trip"
                          className="flex items-center gap-2 rounded px-3 py-2 text-gray-800 hover:bg-[#C2D1C6]"
                        >
                          <IoTicketOutline className="text-lg" />
                          Manage Trip
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link
                    to="/dashboard/admin/booking-reports"
                    className="flex items-center gap-2 rounded px-3 py-2 text-gray-800 hover:bg-[#C2D1C6]"
                  >
                    <MdLocalActivity className="text-lg" />
                    Booking Reports
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/admin/payment-reports"
                    className="flex items-center gap-2 rounded px-3 py-2 text-gray-800 hover:bg-[#C2D1C6]"
                  >
                    <FaCreditCard className="text-lg" />
                    Payment Reports
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/admin/setting"
                    className="flex items-center gap-2 rounded px-3 py-2 text-gray-800 hover:bg-[#C2D1C6]"
                  >
                    <MdSettings className="text-lg" />
                    Settings
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="flex items-center gap-2 rounded px-3 py-2 text-gray-800 hover:bg-[#C2D1C6]"
                  >
                    <RiSecurePaymentLine className="text-lg" />
                    Back to home
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 rounded px-3 py-2 font-semibold text-gray-800 hover:bg-[#C2D1C6]"
                  >
                    <MdDashboard className="text-lg" />
                    User Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/bookings"
                    className="flex items-center gap-2 rounded px-3 py-2 text-gray-800 hover:bg-[#C2D1C6]"
                  >
                    <BsBookmarkCheck className="text-lg" />
                    My Bookings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/my-profile"
                    className="flex items-center gap-2 rounded px-3 py-2 text-gray-800 hover:bg-[#C2D1C6]"
                  >
                    <AiOutlineProfile className="text-lg" />
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/payments"
                    className="flex items-center gap-2 rounded px-3 py-2 text-gray-800 hover:bg-[#C2D1C6]"
                  >
                    <FaCreditCard className="text-lg" />
                    My Payment History
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/checkout"
                    className="flex items-center gap-2 rounded px-3 py-2 text-gray-800 hover:bg-[#C2D1C6]"
                  >
                    <MdSettings className="text-lg" />
                    Ticket Checkout
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/confirmation"
                    className="flex items-center gap-2 rounded px-3 py-2 text-gray-800 hover:bg-[#C2D1C6]"
                  >
                    <RiSecurePaymentLine className="text-lg" />
                    Payment Confirmation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center gap-2 rounded px-3 py-2 text-gray-800 hover:bg-[#C2D1C6]"
                  >
                    <RiSecurePaymentLine className="text-lg" />
                    Back to home
                  </Link>
                </li>
              </>
            )}

            <></>

            {/* Admin Routes (conditional) */}
            {user && <></>}
          </ul>
        </nav>
      </aside>

      {/* Page Content */}
      <main className="ml-0 min-h-screen flex-1 bg-gray-50 p-4 lg:ml-64">
        <Outlet />
      </main>
    </div>
  );
}
