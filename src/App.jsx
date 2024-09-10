import React, { createContext, useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Bottom from "./components/Bottom";
import Quiz from "./components/Quiz";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";

export const ScoreProvider = createContext(null);

const App = () => {
  const [score, setScore] = useState(0);
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
    <ScoreProvider.Provider value={{ score, setScore }}>
      <div className="text-black" style={{ position: "relative" }}>
        <Header />
        <RouterProvider router={appRouter} />
        <Bottom />
      </div>
    </ScoreProvider.Provider>
  );
};

export default App;
