import React from "react";
import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import MensSection from "./Components/ProductSection/MensSection";
import WomenSection from "./Components/ProductSection/WomenSection";
import JewellerySection from "./Components/ProductSection/JewellerySection";
import ElectronicsSection from "./Components/ProductSection/ElectronicsSection";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    ,
    {
      path: "/product/menswear",
      element: <MensSection />,
    },
    {
      path: "/product/womenswear",
      element: <WomenSection />,
    },
    {
      path: "/product/jewellery",
      element: <JewellerySection />,
    },
    {
      path: "/product/electronics",
      element: <ElectronicsSection />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
