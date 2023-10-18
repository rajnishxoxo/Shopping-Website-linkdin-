import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../Utils/Redux/cartSlice";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.item);

  setTimeout(() => {
    dispatch(emptyCart());
    navigate('/')
  }, 4000);
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Your Order Has Been Confirmed
          </h1>
          <p className="text-gray-600">
            Thank you for your order. We'll process it as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
