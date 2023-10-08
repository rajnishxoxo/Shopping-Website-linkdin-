import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetProductList from "../Hooks/useGetProductList";
import { useSelector } from "react-redux";

const Product = () => {
  const { id } = useParams();
  console.log(id);
  useGetProductList(id);

  const product = useSelector((state) => state.product.productList);

  console.log(product);

  return <div></div>;
};

export default Product;
