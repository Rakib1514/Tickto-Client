import React from 'react';
import Dashboard from './Dashboard';
import { Outlet } from 'react-router';

export default function Dashboard_layout() {
  return (
    <div>
      <div>
        {/* <h1>Hrllo</h1> */}
        <Dashboard />
      </div>
      <div></div>
    </div>
  );
}
