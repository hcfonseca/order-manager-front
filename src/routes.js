import { Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CustomerList from './pages/CustomerList';
import NotFound from './pages/NotFound';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import React from "react";

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'customers', element: <CustomerList /> },
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
