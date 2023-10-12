import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";

const Cart = () => {
  const cart = useSelector((state) => state.cart.item);
  console.log(cart);


  return (
    <div>
      <Header />
      <div>
        <h1 className="text-center text-6xl text-green-700 mt-5">Cart</h1>
        <div>
  {cart.map((data) => {
    
    const { image, description, price } = data;
    const newDiscription = description.slice(0,20)
    return (
      <div>
        <img className="w-20" src={image} alt={description} />
        <p>{newDiscription}</p>
        <p>{price}</p>
      </div>
    );
  })}
</div>

      </div>
    </div>
  );
};

export default Cart;
