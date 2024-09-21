
import {
    createBrowserRouter,


  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Contact from "../Pages/Home/Contact/Contact";

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
      ]
    },
  ]);

  