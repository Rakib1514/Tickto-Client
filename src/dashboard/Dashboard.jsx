import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
// React Icons
import { AiOutlineProfile } from "react-icons/ai";
import { BsBookmarkCheck } from "react-icons/bs";
import { FaAngleDown, FaAngleUp, FaCreditCard } from "react-icons/fa";
import {
  HiOutlineMenu,
  HiOutlineShieldCheck,
  HiOutlineX,
} from "react-icons/hi"; // For admin icon
import { IoTicketOutline } from "react-icons/io5";
import { MdDashboard, MdLocalActivity, MdSettings } from "react-icons/md";
import { RiSecurePaymentLine, RiUserSettingsLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import Logo from "../components/Shared/Logo";
import useAdmin from "../hooks/useAdmin";

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [isBusExpanded, setIsBusExpanded] = useState(false); // State for expandable button

  // Conditionally render admin routes if the user is an admin
  // const isAdmin = user?.role === 'user';
  const [isAdmin] = useAdmin();
  const location = useLocation();
  const [isBusOpen, setIsBusOpen] = useState(false);

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
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
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
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s"
              }
              alt="User"
            />
            <div className="text-sm font-medium text-gray-900">
              {user?.name || "Anonymous"}
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="p-4 space-y-2 overflow-y-auto">
          {isAdmin ? (
            <>
              <SidebarLink
                to="/dashboard/admin-dashboard"
                icon={<HiOutlineShieldCheck />}
                label="Admin Dashboard"
              />

              <SidebarLink
                to="/dashboard/admin/manage-user"
                icon={<RiUserSettingsLine />}
                label="Manage Users"
              />
              {/* <SidebarLink to="/dashboard/admin/qr_scanner" icon={< />} label="" /> */}
              <SidebarLink
                to="/dashboard/admin/manage-tickets"
                icon={<MdSettings />}
                label="Manage Tickets"
              />
              {/* Bus Dropdown */}
              <div>
                <button
                  onClick={() => setIsBusOpen(!isBusOpen)}
                  className="flex items-center justify-between w-full gap-2"
                >
                  <span className="flex items-center gap-2 lg:ml-3">🎫 Bus</span>
                  {isBusOpen ? <FaAngleUp /> : <FaAngleDown />}
                </button>
                {isBusOpen && (
                  <div className="pl-6 space-y-1 mt-1">
                    <Link
                      to="/dashboard/admin/add-bus"
                      className="flex items-center gap-2"
                    >
                      🎫 Add Bus
                    </Link>
                    <Link
                      to="/dashboard/admin/create-trip"
                      className="flex items-center gap-2"
                    >
                      🎫 Create Trip
                    </Link>
                    <Link
                      to="/dashboard/admin/manage-trip"
                      className="flex items-center gap-2"
                    >
                      🎫 Manage Trip
                    </Link>
                  </div>
                )}
              </div>
              <SidebarLink
                to="/dashboard/admin/add-event"
                icon={<RiUserSettingsLine />}
                label="QR Scanner"
              />
              <SidebarLink
                to="/dashboard/admin/booking-reports"
                icon={<MdLocalActivity />}
                label="Booking Reports"
              />
              <SidebarLink
                to="/dashboard/admin/payment-reports"
                icon={<FaCreditCard />}
                label="Payment Reports"
              />
              <SidebarLink
                to="/dashboard/admin/setting"
                icon={<MdSettings />}
                label="Settings"
              />
              <SidebarLink
                to="/"
                icon={<RiSecurePaymentLine />}
                label="Back to Home"
              />
            </>
          ) : (
            <>
              <SidebarLink
                to="/dashboard"
                icon={<MdDashboard />}
                label="User Dashboard"
              />
              <SidebarLink
                to="/dashboard/user/bookings"
                icon={<BsBookmarkCheck />}
                label="My Bookings"
              />
              <SidebarLink
                to="/dashboard/my-profile"
                icon={<AiOutlineProfile />}
                label="My Profile"
              />
            
              <SidebarLink
                to="/dashboard/payments"
                icon={<FaCreditCard />}
                label="My Payment History"
              />
              <SidebarLink
                to="/dashboard/checkout"
                icon={<MdSettings />}
                label="Ticket Checkout"
              />
              <SidebarLink
                to="/dashboard/confirmation"
                icon={<RiSecurePaymentLine />}
                label="Payment Confirmation"
              />
              <SidebarLink
                to="/"
                icon={<RiSecurePaymentLine />}
                label="Back to Home"
              />
            </>
          )}
          {/* Nav */}
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
