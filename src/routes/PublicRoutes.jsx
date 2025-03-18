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

const PublicRoutes = () => {
  return (
    <Routes>
      {/* Main Layout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home/>} />
        <Route path="about-us" element={<AboutUs/>} />
        <Route path="join-us" element={<JoinUs/>} />
        <Route path="terms" element={<TermsAndConditions/>} />
        <Route path="events" element={<AllEvents/>} />
      </Route>
      
      {/* Auth Layout */}
      <Route path="/auth" element={<div>AUth Layout here with outlet </div>}>
        <Route path="sign-in" element={<div>Sign in page here</div>}/>
        <Route path="sign-up" element={<div>Sign up page here</div>}/>
      </Route>
      <Route path="*" element={<ErrorPage/>}></Route>
    </Routes>
  );
};

export default PublicRoutes;
