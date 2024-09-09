import React from "react";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Bottom from "./components/Bottom";
import Quiz from "./components/Quiz";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
