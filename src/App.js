import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import TodoTask from "./components/Todo";
import Popup from "./components/Popup";
import Login from "./components/Login";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestuarantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <TodoTask/> */}
      {/* <Popup/> */}
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: '/restaurant/:resId',
        element:<RestuarantMenu/>
      },
    ],
  },
  {
    path: '/login',
    element:<Login/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

// root.render(<AppLayout />);
