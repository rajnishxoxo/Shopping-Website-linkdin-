import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoginIcon from "@mui/icons-material/Login";

const Header = () => {
  return (
    <div className="flex flex-col w-full mt-2 justify-evenly shadow-lg h-auto items-center lg:flex-row lg:h-20">
      <div className="w-2/5">
        <h1 className="text-3xl text-center m-2 font-semibold">Shop It</h1>
      </div>
      <div className="w-2/5">
        <ul className="flex flex-col items-center  justify-between lg:flex-row">
          <li class="text-2xl mb-2 font-medium relative">
            Home <HomeIcon />
          </li>
          <li class="text-2xl mb-2 font-medium relative">
            Cart <ShoppingCartIcon />
          </li>
          <li class="text-2xl mb-2 font-medium relative">
            WishList <FavoriteIcon />
          </li>
          <li class="text-2xl mb-2 font-medium relative">
            Login <LoginIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
