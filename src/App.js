import { React, lazy, Suspense } from "react";
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
import Profile from "./components/Profile";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import RestuarantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";

const RestuarantMenu = lazy(() => import("./components/RestaurantMenu"));

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
        path: "about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense fallback={<h1> Please wait Page is getting Load</h1>}>
            <RestuarantMenu />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

// root.render(<AppLayout />);
