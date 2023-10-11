import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetProductInfo from "../../Hooks/useGetProductInfo";

const SingleDisplayProduct = () => {
    const [productDetail , setProductDetail] = useState("");
  const { id } = useParams();

  const product = useGetProductInfo(id);
  console.log(product);

  return;
  <div></div>;
};

export default SingleDisplayProduct;
