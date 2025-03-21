import React from "react";
import { Outlet, Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
// import ErrorPage from "../pages/error-page/ErrorPage";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about-us/AboutUs";
import JoinUs from "../pages/join-us/JoinUs";
import TermsAndConditions from "../pages/terms-and-conditions/TermsAndConditions";
import ErrorPage from "../pages/error-page/ErrorPage";
import AllEvents from "../pages/all-events/AllEvents";
import Auth from "../pages/Auth/Auth";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

const PublicRoutes = () => {
  return (
    <Routes>
      {/* Main Layout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/events" element={<AllEvents />} />
      </Route>
      <Route path="*" element={<ErrorPage />}></Route>
      <Route path="/auth" element={<Auth />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
