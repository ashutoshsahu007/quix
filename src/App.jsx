import React from "react";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Bottom from "./components/Bottom";
import Quiz from "./components/Quiz";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return (
    <div className="text-black" style={{ position: "relative" }}>
      <Header />
      <RouterProvider router={appRouter} />
      <Bottom />
    </div>
  );
};

export default App;
