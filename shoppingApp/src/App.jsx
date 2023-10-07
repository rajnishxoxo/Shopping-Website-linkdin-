import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import Login from "./Components/Login";
import Header from "./Components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Product from "./Components/Product";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/product/:id",
      element: <Product/>,
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
