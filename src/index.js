import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";
import EmployeesList from "./components/pages/employees-list/EmployeesList";
import ErrorPage from "./components/pages/error-page/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/Wealth-Health",
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
