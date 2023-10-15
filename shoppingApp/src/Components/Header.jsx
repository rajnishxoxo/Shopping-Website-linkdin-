import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { userLoginStatus } from "../Utils/Redux/userSlice";
import { emptyCart } from "../Utils/Redux/cartSlice";

const Header = () => {
  const cart = useSelector((state) => state.cart.item);

  const user = useSelector((state) => state.user.userLoginStatus);
  const userDetail = useSelector((state) => state.user.userInfo);
  const { name, mail } = userDetail;

  const dispatch = useDispatch();

  const [userPresent, setUserPresent] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserPresent(true);
      } else {
        setUserPresent(false);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(userLoginStatus(false));
        dispatch(emptyCart());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleShowLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col w-full mt-2 justify-evenly shadow-lg h-auto items-center lg:flex-row lg:h-20">
      <div className="w-2/5">
        <h1 className="text-3xl text-center m-2 font-semibold">Shop It</h1>
      </div>
      <div className="w-2/5">
        <ul className="flex flex-col items-center  justify-between lg:flex-row">
          <Link to={"/"}>
            <li class="text-2xl mb-2 font-medium relative">
              Home <HomeIcon />
            </li>
          </Link>
          <Link to={"/cart"}>
            <li class="text-2xl mb-2 font-medium relative">
              Cart <ShoppingCartIcon /> {cart.length}
            </li>
          </Link>
          <li class="text-2xl mb-2 font-medium relative">
            WishList <FavoriteIcon />
          </li>
          {userPresent ? (
            <button
              onClick={handleLogout}
              className="text-2xl mb-2 font-medium relative"
            >
              Logout <LoginIcon /> 
             
            </button>
          ) : (
            <button
              onClick={handleShowLoginPage}
              className="text-2xl mb-2 font-medium relative"
            >
              Login <LoginIcon />
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
