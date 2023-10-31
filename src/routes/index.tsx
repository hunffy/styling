import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root";
import Main from "../pages/main";
import Login from "../pages/login";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Main /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);
