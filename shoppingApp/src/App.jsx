import React, { useEffect, useState } from "react";
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
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Utils/firebase";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  console.log(isLoggedIn);

  const router = createBrowserRouter([
    {
      path: "/",
      element: isLoggedIn ? <Body /> : <Login />,
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
      path: "/detail/:id",
      element: <SingleDisplayProduct />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
