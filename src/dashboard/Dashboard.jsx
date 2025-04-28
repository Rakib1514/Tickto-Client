import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { HiOutlineMenu, HiOutlineX, HiOutlineShieldCheck } from 'react-icons/hi';
import { FaCreditCard } from 'react-icons/fa';
import { MdDashboard, MdSettings, MdLocalActivity } from 'react-icons/md';
import { RiSecurePaymentLine, RiUserSettingsLine } from 'react-icons/ri';
import { AiOutlineProfile } from 'react-icons/ai';
import { IoTicketOutline } from 'react-icons/io5';
import { BsBookmarkCheck } from 'react-icons/bs';
import Logo from '../components/Shared/Logo';
import useAdmin from '../hooks/useAdmin';

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAdmin] = useAdmin();
  const location = useLocation();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Auto-close sidebar on route change (mobile only)
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen">
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <div className="text-xl font-bold">
              <span className="text-[#317371]">Tick</span>To
            </div>
          </Link>
          <button className="lg:hidden text-xl" onClick={toggleSidebar}>
            <HiOutlineX />
          </button>
        </div>

        {/* User Info */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <img
              className="w-10 h-10 rounded-full"
              src={
                user?.photoURL ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s'
              }
              alt="User"
            />
            <span className="font-medium text-gray-800">
              {user?.displayName || 'Anonymous'}
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="p-4 space-y-2 overflow-y-auto">
          {isAdmin ? (
            <>
              <SidebarLink to="/dashboard/admin-dashboard" icon={<HiOutlineShieldCheck />} label="Admin Dashboard" />
              <SidebarLink to="/dashboard/admin/manage-user" icon={<RiUserSettingsLine />} label="Manage Users" />
              <SidebarLink to="/dashboard/admin/qr-scanner" icon={<RiUserSettingsLine />} label="QR Scanner" />
              <SidebarLink to="/dashboard/admin/manage-tickets" icon={<MdSettings />} label="Manage Tickets" />
              <SidebarLink to="/dashboard/admin/add-event" icon={<IoTicketOutline />} label="Add Event" />
              <SidebarLink to="/dashboard/admin/booking-reports" icon={<MdLocalActivity />} label="Booking Reports" />
              <SidebarLink to="/dashboard/admin/payment-reports" icon={<FaCreditCard />} label="Payment Reports" />
              <SidebarLink to="/dashboard/admin/setting" icon={<MdSettings />} label="Settings" />
              <SidebarLink to="/" icon={<RiSecurePaymentLine />} label="Back to Home" />
            </>
          ) : (
            <>
              <SidebarLink to="/dashboard" icon={<MdDashboard />} label="User Dashboard" />
              <SidebarLink to="/dashboard/bookings" icon={<BsBookmarkCheck />} label="My Bookings" />
              <SidebarLink to="/dashboard/my-profile" icon={<AiOutlineProfile />} label="My Profile" />
              <SidebarLink to="/dashboard/payments" icon={<FaCreditCard />} label="My Payment History" />
              <SidebarLink to="/dashboard/checkout" icon={<MdSettings />} label="Ticket Checkout" />
              <SidebarLink to="/dashboard/confirmation" icon={<RiSecurePaymentLine />} label="Payment Confirmation" />
              <SidebarLink to="/" icon={<RiSecurePaymentLine />} label="Back to Home" />
            </>
          )}
        {/* Nav */}
        </nav>
        <nav className="overflow-y-auto p-4">
          <ul className="space-y-2">
            {/* User Routes */}
            {
            isAdmin ? (
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
            )
            }

            <></>

            {/* Admin Routes (conditional) */}
            {user && <></>}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-h-screen bg-gray-50">
        {/* Topbar for mobile */}
        <header className="flex items-center justify-between bg-white px-4 py-3 shadow-md lg:hidden">
          <button onClick={toggleSidebar} className="text-xl text-gray-700">
            <HiOutlineMenu />
          </button>
          <span className="text-lg font-semibold">Dashboard</span>
        </header>

        <main className="flex flex-1 flex-col p-4 sm:ml-0 lg:ml-64 mt-16 lg:mt-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function SidebarLink({ to, icon, label }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 rounded px-3 py-2 text-gray-800 hover:bg-[#C2D1C6] transition"
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}
