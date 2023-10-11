import { useEffect, useState } from "react";

const useGetProductInfo = (id) => {
  const [productDetail, setProductDetail] = useState("");
  const getSingleProductDetail = async () => {
    const getDetails = await fetch("https://fakestoreapi.com/products/" + id);
    const data = await getDetails.json();
    setProductDetail(data);
  };
  useEffect(() => {
    getSingleProductDetail();
  }, []);

  return productDetail;
};

export default useGetProductInfo;
