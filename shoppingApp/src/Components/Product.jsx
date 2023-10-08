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
      {product.map((product) => {
        const { title, image, price, rating, id } = product;
        return(
          <DisplayProduct
          title={title}
          image={image}
          price={price}
          rating={rating}
        />
        )
      })}
    </div>
  );
};

export default Product;
