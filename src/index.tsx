import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './css/index.css';
import Signup from './routes/signup.tsx';
import Signin from './routes/signin.tsx';
import ResetPassword from './routes/resetPassword.tsx';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Main />
  },
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
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);

function Main(){
  return <div className="main">
    <a href="/sign-in">Регистрация</a>
  </div>
}
