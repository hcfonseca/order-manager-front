import DashboardLayout from './components/DashboardLayout';
import Dashboard from './pages/Dashboard';
import React from "react";

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
    ]
  }
];

export default routes;
