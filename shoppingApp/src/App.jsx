import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import Login from "./Components/Login";
import Header from "./Components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/login",
      element: <Login/>,
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
