import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoginIcon from "@mui/icons-material/Login";

const Header = () => {
  return (
    <div className="flex flex-row w-full mt-10 items-start justify-evenly shadow-lg h-20">
      <div className="w-2/5">
        <h1 className="text-3xl font-semibold">Shop It</h1>
      </div>
      <div className="w-2/5">
        <ul className="flex flex-row items-center justify-between">
          <li class="text-2xl font-medium relative">
            Home <HomeIcon />
          </li>
          <li class="text-2xl font-medium relative">
            Cart <ShoppingCartIcon />
          </li>
          <li class="text-2xl font-medium relative">
            WishList <FavoriteIcon />
          </li>
          <li class="text-2xl font-medium relative">
            Login <LoginIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
