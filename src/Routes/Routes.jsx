
import {
    createBrowserRouter,


  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Contact from "../Pages/Home/Contact/Contact";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Dashboard from "../components/DashBoard/Dashboard";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children : [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
      ]
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children: [
       
      ]
    }
  ]);

  