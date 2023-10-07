import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetProductList from "../Hooks/useGetProductList";

const Product = () => {
  const { id } = useParams();

  console.log(id);

  useGetProductList(id);

  return <div>Product</div>;
};

export default Product;
