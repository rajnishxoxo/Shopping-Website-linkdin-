import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { addToCart, emptyCart, removeFromCart } from "../Utils/Redux/CartSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.item);

  if (cart === null) return;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const itemCount = {};
  cart.map((data) => {
    const { id } = data;
    if (itemCount[id]) {
      itemCount[id]++;
    } else {
      itemCount[id] = 1;
    }
  });

  const uniqueItem = Object.keys(itemCount).map((data) => {
 
    const firstOccur = cart.find((item) => {
      return item.id == data;
    });

    return {
      item: firstOccur,
      count: itemCount[data],
    };
  });

  const handleremoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleDeleteCart = () => {
    dispatch(emptyCart());
  };

  const handleNavigateToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <Header />

      {uniqueItem.length ? (
        <div>
          <h1 className="text-center text-6xl text-green-700 mt-5">Cart</h1>
          <div>
            {uniqueItem.map((data) => {
              const { count } = data;
              const { image, description, price } = data.item;
              const newDiscription = description.slice(0, 30);
              return (
                <div>
                  <div className="flex flex-col items-center mt-10">
                    <img
                      className="w-[150px] mt-3 shadow  mx-auto border border-black"
                      src={image}
                      alt={description}
                    />
                    <p className="text-xl font-bold m-2">{newDiscription}...</p>
                    <p className="text-2xl m-2">{price}$</p>
                  </div>
                  <div className="flex flex-col items-center justify-evenly">
                    <button
                      onClick={() => {
                        handleAddToCart(data.item);
                      }}
                      className="text-2xl bg-green-500 font-bold rounded  w-[40px]"
                    >
                      +
                    </button>
                    <p className="text-3xl ">Total Count :{count}</p>
                    <button
                      onClick={() => {
                        handleremoveFromCart(data.item);
                      }}
                      className="text-2xl bg-green-500 font-bold rounded  w-[40px]"
                    >
                      -
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={handleDeleteCart}
            className="text-2xl ml-[100px] bg-red-600 text-white mt-4 rounded  w-[200px]"
          >
            <span>
              EmptyCart <DeleteIcon />
            </span>
          </button>
          <h1
            onClick={handleNavigateToCheckout}
            className="bg-green-400 text-xl font-normal rounded w-[250px] h-[40px] text-center mx-auto
         m-4"
          >
            Proceed to Checkout
            <span>
              <ShoppingCartCheckoutIcon />
            </span>
          </h1>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center">
          <img
            className="w-[300px] mt-10"
            src="https://res.cloudinary.com/dxguqzge7/image/upload/v1682838909/Cart_bk4xgl.jpg"
          ></img>
          <h1 className="text-center text-blue-700 text-3xl font-normal">
            YOUR CART IS EMPTY.
          </h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
