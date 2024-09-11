import React, { createContext, useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Bottom from "./components/Bottom";
import Quiz from "./components/Quiz";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Start from "./components/Start";
import Results from "./components/Results";
import LeaderBoard from "./components/LeaderBoard";

export const ScoreProvider = createContext(0);

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
      path: "/start",
      element: <Start />,
    },
    {
      path: "/results",
      element: <Results />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/leaderboard",
      element: <LeaderBoard />,
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
