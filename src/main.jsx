import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
 
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from "./Routes/Routes"; 
import { Toaster} from 'react-hot-toast';
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from './Provider/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
<HelmetProvider>
<div className="">
 <RouterProvider router={router} />
 <Toaster /> 
 </div>
</HelmetProvider>
</AuthProvider>
  </StrictMode>,
)

