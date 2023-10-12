import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetProductInfo from "../../Hooks/useGetProductInfo";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Utils/Redux/CartSlice";
import DisplaySingleProduct from "../DisplaySingleProduct";

const SingleDisplayProduct = () => {
  const { id } = useParams();

  const product = useGetProductInfo(id);

  const { description, image, price, title, rating, category } = product;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleNavigationToCart = () => {
    navigate("/cart");
  };

  if (product === null) return;

  return (
    <DisplaySingleProduct
      title={title}
      category={category}
      image={image}
      description={description}
      price={price}
      handleAddToCart={handleAddToCart}
      handleNavigationToCart={handleNavigationToCart}
    />
  );
};

export default SingleDisplayProduct;
