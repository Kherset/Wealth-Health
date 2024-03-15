import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/pages/error-page/ErrorPage";
import EmployeesList from "./components/pages/employees-list/EmployeesList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/employees-list",
    element: <EmployeesList />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
