import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector((state) => state.cart.item);

  const navigate = useNavigate();

  const totalProduct = cart.length;

  const total = cart.map((data) => data.price);

  const costOfCart = total.reduce((acc, cur) => {
    return (acc = acc + cur);
  }, 0);

  const shippingCharge = 5;

  const handleBackToCart = () => {
    navigate("/cart");
  };

  const handleDummyCheckout = () => {
   navigate('/orderConfirmation')
  };

  return (
    <>
      <div className="w-4/5 border shadow-2xl mx-auto mt-20 rounded">
        <h1 className="text-4xl text-center font-bold mt-5 text-green-500">
          Order Summary
        </h1>
        <div className="flex flex-row w-full mt-5 justify-between">
          <p className="text-2xl font-normal text-cyan-600">Sub Total -</p>
          <p className="text-2xl font-normal">{costOfCart}$</p>
        </div>
        <div className="flex flex-row w-full mt-5  justify-between ">
          <p className="text-2xl font-normal text-cyan-600">Shipping - </p>
          <p className="text-2xl font-normal">{shippingCharge}$</p>
        </div>
        <div className="flex flex-row w-full mt-5  justify-between ">
          <p className="text-2xl font-normal text-cyan-600">Total - </p>
          <p className="text-2xl font-normal">{shippingCharge + costOfCart}$</p>
        </div>
      </div>
      <button
        onClick={handleDummyCheckout}
        className="w-[200px] text-white h-[40px] ml-24 mt-10 text-center bg-blue-600"
      >
        Proceed to CheckOut
      </button>
      <p
        onClick={handleBackToCart}
        className="w-[200px] text-white h-[40px] mx-auto mt-10 text-center bg-green-600"
      >
        GO TO CART
      </p>
    </>
  );
};

export default Checkout;
