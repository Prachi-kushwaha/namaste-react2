import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";
import About from "./src/component/About";
import Error from "./src/component/Error";
import RestaurantMenu from "./src/component/RestaurentMenu";
import Grocery from "./src/component/Grocery";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import UserContext from "./src/utils/UserContext";

const About = lazy(() => import("./src/component/About"));
const Grocery = lazy(() => import("./src/component/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    //   make and api call
    const data = {
      name: "Prachi kushwaha",
    };
    setUserName(data.name);
  }, []);

  return (
    <>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

// const heading = React.createElement("h1", {}, "hello world from react")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

export default AppLayout;
