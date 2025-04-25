import { createBrowserRouter, Navigate } from "react-router";
import { lazy, Suspense } from "react";

const LazyLoad = (Component) => (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);

const App = lazy(() => import("../../App"));
const MainLayout = lazy(() => import("../layouts/MainLayout"));
const AboutUs = lazy(() => import("../pages/about-us/AboutUs"));
const AllEvents = lazy(() => import("../pages/all-events/AllEvents"));
const CategoryWiseEvents = lazy(() => import("../pages/all-events/CategoryWiseEvents"));
const ErrorPage = lazy(() => import("../pages/error-page/ErrorPage"));
const EventDetails = lazy(() => import("../pages/event-details/EventDetails"));
const Home = lazy(() => import("../pages/home/Home"));
const JoinUs = lazy(() => import("../pages/join-us/JoinUs"));
const Payment = lazy(() => import("../pages/payment/Payment"));
const ReserveEvent = lazy(() => import("../pages/reserve-event/Example"));
const TermsAndConditions = lazy(() => import("../pages/terms-and-conditions/TermsAndConditions"));
const UpdateProfile = lazy(() => import("../pages/update-profile/UpdateProfile"));

const DashboardLayout = lazy(() => import("../dashboard/Dashboard_layout"));
const AddEvent = lazy(() => import("../dashboard/admin/Add_event"));
const AdminDashboard = lazy(() => import("../dashboard/admin/Admin_dashboard"));
const BookingReports = lazy(() => import("../dashboard/admin/Booking_reports"));
const ManageTickets = lazy(() => import("../dashboard/admin/Manage_tickets"));
const ManageUser = lazy(() => import("../dashboard/admin/Manage_user"));
const PaymentReports = lazy(() => import("../dashboard/admin/Payment_reports"));
const Setting = lazy(() => import("../dashboard/admin/Setting"));
const MyProfile = lazy(() => import("../dashboard/user/My_profile"));
const AllPaymentReport = lazy(() => import("../pages/payment/AllPaymentReports"));
const PaymentHistory = lazy(() => import("../pages/payment/PaymentHistory"));
const AddBus = lazy(() => import("../dashboard/organizer/AddBus"));
const CreateTrip = lazy(() => import("../dashboard/organizer/CreateTrip"));
const Auth = lazy(() => import("../pages/Auth/Auth"));
const Login = lazy(() => import("../pages/Auth/Login"));
const Register = lazy(() => import("../pages/Auth/Register"));
const QueryWiseTransport = lazy(() => import("../pages/Transports/QueryWiseTransport"));
const Transport = lazy(() => import("../pages/Transports/Transport"));
const ManageTrip = lazy(() => import("../dashboard/organizer/ManageTrip"));

const router = createBrowserRouter([
  {
    Component: LazyLoad(App),
    children: [
      // ─── Public (Main) ─────────────────────────────────────────────
      {
        path: "/",
        Component: LazyLoad(MainLayout),
        children: [
          { index: true, Component: LazyLoad(Home) },
          { path: "events", Component: LazyLoad(AllEvents) },
          { path: "events/:category", Component: LazyLoad(CategoryWiseEvents) },
          { path: "event/:id", Component: LazyLoad(EventDetails) },
          { path: "event/reserve/:id", Component: LazyLoad(ReserveEvent) },
          { path: "payment", Component: LazyLoad(Payment) },
          { path: "about-us", Component: LazyLoad(AboutUs) },
          { path: "join-us", Component: LazyLoad(JoinUs) },
          { path: "terms", Component: LazyLoad(TermsAndConditions) },
          { path: "travel", Component: LazyLoad(Transport) },
          { path: "travel/:vehicle", Component: LazyLoad(QueryWiseTransport) },
        ],
      },

      // ─── Dashboard ──────────────────────────────────────────────────
      {
        path: "dashboard",
        Component: LazyLoad(DashboardLayout),
        children: [
          {
            index: true,
            Component: () => <Navigate to="admin-dashboard" replace />,
          },
          { path: "admin-dashboard", Component: LazyLoad(AdminDashboard) },
          { path: "admin/add-event", Component: LazyLoad(AddEvent) },
          { path: "admin/booking-reports", Component: LazyLoad(BookingReports) },
          { path: "admin/manage-tickets", Component: LazyLoad(ManageTickets) },
          { path: "admin/manage-user", Component: LazyLoad(ManageUser) },
          { path: "admin/payment-reports", Component: LazyLoad(PaymentReports) },
          { path: "admin/payment-reports/all", Component: LazyLoad(AllPaymentReport) },
          { path: "admin/setting", Component: LazyLoad(Setting) },
          { path: "my-profile", Component: LazyLoad(MyProfile) },
          { path: "payments", Component: LazyLoad(PaymentHistory) },
          { path: "add-bus", Component: LazyLoad(AddBus) },
          { path: "create-trip", Component: LazyLoad(CreateTrip) },
          { path: "manage-trip", Component: LazyLoad(ManageTrip) },
        ],
      },

      // ─── Misc ────────────────────────────────────────────────────────
      { path: "updateprofile", Component: LazyLoad(UpdateProfile) },

      // ─── Auth ────────────────────────────────────────────────────────
      {
        path: "auth",
        Component: LazyLoad(Auth),
        children: [
          { path: "login", Component: LazyLoad(Login) },
          { path: "register", Component: LazyLoad(Register) },
        ],
      },

      // ─── Catch‑All ───────────────────────────────────────────────────
      { path: "*", Component: LazyLoad(ErrorPage) },
    ],
  },
]);

export default router;
