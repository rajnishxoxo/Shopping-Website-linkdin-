import React from "react";
import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import MensSection from "./Components/ProductSection/MensSection";
import WomenSection from "./Components/ProductSection/WomenSection";
import JewellerySection from "./Components/ProductSection/JewellerySection";
import ElectronicsSection from "./Components/ProductSection/ElectronicsSection";
import SingleDisplayProduct from "./Components/ProductSection/SingleDisplayProduct";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

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
    {
      path:"/detail/:id",
      element:<SingleDisplayProduct/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"/checkout",
      element:<Checkout/>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
