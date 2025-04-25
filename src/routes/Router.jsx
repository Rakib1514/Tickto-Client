import { createBrowserRouter, Navigate } from "react-router";
import App from "../../App";
import MainLayout from "../layouts/MainLayout";
import AboutUs from "../pages/about-us/AboutUs";
import AllEvents from "../pages/all-events/AllEvents";
import CategoryWiseEvents from "../pages/all-events/CategoryWiseEvents";
import ErrorPage from "../pages/error-page/ErrorPage";
import EventDetails from "../pages/event-details/EventDetails";
import Home from "../pages/home/Home";
import JoinUs from "../pages/join-us/JoinUs";
import Payment from "../pages/payment/Payment";
// import ReserveEvent from "../pages/reserve-event/Example";
import TermsAndConditions from "../pages/terms-and-conditions/TermsAndConditions";
import UpdateProfile from "../pages/update-profile/UpdateProfile";

import DashboardLayout from "../dashboard/Dashboard_layout";
import AddEvent from "../dashboard/admin/Add_event";
import AdminDashboard from "../dashboard/admin/Admin_dashboard";
import BookingReports from "../dashboard/admin/Booking_reports";
import ManageTickets from "../dashboard/admin/Manage_tickets";
import ManageUser from "../dashboard/admin/Manage_user";
import PaymentReports from "../dashboard/admin/Payment_reports";
import Setting from "../dashboard/admin/Setting";
import MyProfile from "../dashboard/user/My_profile";
import AllPaymentReport from "../pages/payment/AllPaymentReports";
import PaymentHistory from "../pages/payment/PaymentHistory";

import AddBus from "../dashboard/organizer/AddBus";
import CreateTrip from "../dashboard/organizer/CreateTrip";
import Auth from "../pages/Auth/Auth";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import QueryWiseTransport from "../pages/Transports/QueryWiseTransport";
import Transport from "../pages/Transports/Transport";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      // ─── Public (Main) ─────────────────────────────────────────────
      {
        path: "/",
        Component: MainLayout,
        children: [
          { index: true, Component: Home },
          { path: "events", Component: AllEvents },
          { path: "events/:category", Component: CategoryWiseEvents },
          { path: "event/:id", Component: EventDetails },
          // { path: "event/reserve/:id", Component: ReserveEvent },
          { path: "payment", Component: Payment },
          { path: "about-us", Component: AboutUs },
          { path: "join-us", Component: JoinUs },
          { path: "terms", Component: TermsAndConditions },
          {path: 'travel', Component: Transport},
          {path: 'travel/:vehicle', Component: QueryWiseTransport}
        ],
      },

      // ─── Dashboard ──────────────────────────────────────────────────
      {
        path: "dashboard",
        Component: DashboardLayout,
        children: [
          {
            index: true,
            Component: () => <Navigate to="admin-dashboard" replace />,
          },
          { path: "admin-dashboard", Component: AdminDashboard },
          { path: "admin/add-event", Component: AddEvent },
          { path: "admin/booking-reports", Component: BookingReports },
          { path: "admin/manage-tickets", Component: ManageTickets },
          { path: "admin/manage-user", Component: ManageUser },
          { path: "admin/payment-reports", Component: PaymentReports },
          { path: "admin/payment-reports/all", Component: AllPaymentReport },
          { path: "admin/setting", Component: Setting },
          { path: "my-profile", Component: MyProfile },
          { path: "payments", Component: PaymentHistory },
          { path: "add-bus", Component: AddBus },
          { path: "create-trip", Component: CreateTrip },
        ],
      },

      // ─── Misc ────────────────────────────────────────────────────────
      { path: "updateprofile", Component: UpdateProfile },

      // ─── Auth ────────────────────────────────────────────────────────
      {
        path: "auth",
        Component: Auth,
        children: [
          { path: "login", Component: Login },
          { path: "register", Component: Register },
        ],
      },

      // ─── Catch‑All ───────────────────────────────────────────────────
      { path: "*", Component: ErrorPage },
    ],
  },
]);

export default router;
