import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signup from './signup';
import Signin from './signin';
import ResetPassword from './resetPassword';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/sign-up",
    element: <Signup></Signup>
  },
  {
    path:"/sign-in",
    element: <Signin></Signin>
  },
  {
    path:"/reset-password",
    element: <ResetPassword></ResetPassword>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RouterProvider router={router}/>
);

reportWebVitals();
