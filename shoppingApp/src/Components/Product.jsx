import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetProductList from "../Hooks/useGetProductList";
import { useSelector } from "react-redux";
import DisplayProduct from "./displayProduct";

const Product = () => {
  const { id } = useParams();

  useGetProductList(id);

  const product = useSelector((state) => state.product.productList);

  return (
    <div>
      <DisplayProduct/>
    </div>
  );
};

export default Product;
