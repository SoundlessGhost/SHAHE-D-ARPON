import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './components/Provider/AuthProvider';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import MoreCarts from './components/MoreCarts/MoreCarts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "blogs",
        element: <PrivateRouter><Blogs></Blogs></PrivateRouter>
      },
      {
        path: "services",
        element: <Services></Services>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "more_cart",
        element: <MoreCarts></MoreCarts>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
