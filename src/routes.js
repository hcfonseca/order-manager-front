import {Navigate} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CustomerList from './pages/CustomerList';
import ProductList from './pages/ProductList';
import OrderList from './pages/OrderList';
import NotFound from './pages/NotFound';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import CustomerCreate from './pages/CustomerCreate';
import ProductCreate from './pages/ProductCreate';
import OrderCreate from './pages/OrderCreate';
import React from "react";

const routes = [
  {
    path: 'app',
    element: <DashboardLayout/>,
    children: [
      {path: 'dashboard', element: <Dashboard/>},
      {
        path: 'customers',
        children: [
          {path: '/', element: <CustomerList/>},
          {path: 'create', element: <CustomerCreate/>}
        ]
      },
      {
        path: 'products',
        children: [
          {path: '/', element: <ProductList/>},
          {path: 'create', element: <ProductCreate/>}
        ]
      },
      {
        path: 'orders',
        children: [
          {path: '/', element: <OrderList/>},
          {path: 'create', element: <OrderCreate/>}
        ]
      },
    ]
  },
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {path: '404', element: <NotFound/>},
      {path: '/', element: <Navigate to="/app/dashboard"/>},
      {path: '*', element: <Navigate to="/404"/>}
    ]
  }
];

export default routes;
