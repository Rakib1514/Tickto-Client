import React from 'react';
// import { Navigate, Route, Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';
import AboutUs from '../pages/about-us/AboutUs';
import JoinUs from '../pages/join-us/JoinUs';
import TermsAndConditions from '../pages/terms-and-conditions/TermsAndConditions';
import ErrorPage from '../pages/error-page/ErrorPage';
import AllEvents from '../pages/all-events/AllEvents';
import Auth from '../pages/Auth/Auth';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import CategoryWiseEvents from '../pages/all-events/CategoryWiseEvents';
import EventDetails from '../pages/event-details/EventDetails';
import UpdateProfile from '../pages/update-profile/UpdateProfile';
import Dashboard from '../dashboard/Dashboard';
import Dashboard_layout from '../dashboard/Dashboard_layout';
import My_profile from '../dashboard/user/My_profile';
import Add_event from '../dashboard/admin/Add_event';
import Admin_dashboard from '../dashboard/admin/Admin_dashboard';
import Setting from '../dashboard/admin/Setting';
import Payment_reports from '../dashboard/admin/Payment_reports';
import Manage_user from '../dashboard/admin/Manage_user';
import Manage_tickets from '../dashboard/admin/Manage_tickets';
import Booking_reports from '../dashboard/admin/Booking_reports';
import Payment from '../pages/payment/Payment';
import PaymentHistory from '../pages/payment/PaymentHistory';
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([

  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'events', element: <AllEvents /> },
      { path: 'events/:category', element: <CategoryWiseEvents /> },
      { path: 'event/:id', element: <EventDetails /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: 'join-us', element: <JoinUs /> },
      { path: 'terms', element: <TermsAndConditions /> },
      { path: 'payment', element: <Payment /> },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard_layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Admin_dashboard /> },
      { path: 'admin-dashboard', element: <Admin_dashboard /> },
      { path: 'admin/add-event', element: <Add_event /> },
      { path: 'admin/booking-reports', element: <Booking_reports /> },
      { path: 'admin/manage-tickets', element: <Manage_tickets /> },
      { path: 'admin/manage-user', element: <Manage_user /> },
      { path: 'admin/payment-reports', element: <PaymentHistory /> },
      { path: 'admin/setting', element: <Setting /> },
      { path: 'my-profile', element: <My_profile /> },
    ],
  },
  {
    path: '/auth',
    element: <Auth />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
  {
    path: '/updateprofile',
    element: <UpdateProfile />,
  },
    // <Routes>
    //   {/* Main Layout */}
    //   <Route path="/" element={<MainLayout />}>
    //     <Route index element={<Home />} />

    //     <Route path="/events" element={<AllEvents />} />
    //     <Route path="/events/:category" element={<CategoryWiseEvents />} />
    //     <Route path="/event/:id" element={<EventDetails />} />

    //     <Route path="/terms" element={<TermsAndConditions />} />
    //     <Route path="/about-us" element={<AboutUs />} />
    //     <Route path="/join-us" element={<JoinUs />} />
    //     <Route path="/payment" element={<Payment />} />
    //   </Route>

      {/*-------------------------------- Dashboard layout ------------------------------------- */}
      // <Route path="/dashboard" element={<Dashboard_layout />}>
      //   <Route index element={<Navigate to="/dashboard/admin-dashboard" replace />} />
      //   <Route path="/dashboard/admin-dashboard" element={<Admin_dashboard />} />
      //   <Route path="/dashboard/admin/add-event" element={<Add_event />} />
      //   <Route path="/dashboard/admin/booking-reports" element={<Booking_reports />} />
      //   <Route path="/dashboard/admin/manage-tickets" element={<Manage_tickets />} />
      //   <Route path="/dashboard/admin/manage-user" element={<Manage_user />} />
      //   <Route path="/dashboard/admin/payment-reports" element={<PaymentHistory />} />
      //   <Route path="/dashboard/admin/setting" element={<Setting />} />

      //   <Route path="/dashboard/my-profile" element={<My_profile />} />
      // </Route>

      /*-------------------------------- Dashboard layout ------------------------------------- */


])


