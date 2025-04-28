import React from "react";
import { Outlet } from "react-router";
import AuthObserver from "../Utils/AuthObserver";

const App = () => {
  return (
    <>
      <AuthObserver />
      <Outlet />
    </>
  );
};

export default App;
