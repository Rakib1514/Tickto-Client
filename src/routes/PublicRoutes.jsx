import React from "react";
import { Navigate, Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about-us/AboutUs";
import JoinUs from "../pages/join-us/JoinUs";
import TermsAndConditions from "../pages/terms-and-conditions/TermsAndConditions";
import ErrorPage from "../pages/error-page/ErrorPage";
import AllEvents from "../pages/all-events/AllEvents";
import Auth from "../pages/Auth/Auth";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import CategoryWiseEvents from "../pages/all-events/CategoryWiseEvents";
import EventDetails from "../pages/event-details/EventDetails";
import UpdateProfile from "../pages/update-profile/UpdateProfile";
import Dashboard from "../dashboard/Dashboard";
import Dashboard_layout from "../dashboard/Dashboard_layout";
import My_profile from "../dashboard/user/My_profile";
import Add_event from "../dashboard/admin/Add_event";
import Admin_dashboard from "../dashboard/admin/Admin_dashboard";

const PublicRoutes = () => {
  return (
    <Routes>
      {/* Main Layout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="/events" element={<AllEvents />} />
        <Route path="/events/:category" element={<CategoryWiseEvents />} />
        <Route path="/event/:id" element={<EventDetails />} />

        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/join-us" element={<JoinUs />} />
      </Route>
      {/* Dashboard layout */}
        <Route path="/dashboard" element={<Dashboard_layout />} >

    {/* user  */}

    <Route index  element={< Navigate to="/dashboard/admin-dashboard" replace />} />
    <Route path="/dashboard/admin-dashboard" element={<Admin_dashboard />} />
    <Route path="/dashboard/admin/add-event" element={<Add_event />} />
    <Route path="/dashboard/my-profile" element={<My_profile />} />
  

      </Route>
      
      <Route path="*" element={<ErrorPage />}></Route>

      <Route path="/updateprofile" element={<UpdateProfile />}></Route>

      {/* Auth Layout Routes */}
      <Route path="/auth" element={<Auth />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
