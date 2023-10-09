import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addWomensProduct } from "../Utils/Redux/productSlice";

const useGetWomenSection = () => {
  const dispatch = useDispatch();

  const getProductFunction = async () => {
    const getDetail = await fetch(
      "https://fakestoreapi.com/products/category/women's%20clothing"
    );
    const data = await getDetail.json();
    dispatch(addWomensProduct(data));
  };

  useEffect(() => {
    getProductFunction();
  }, []);
};

export default useGetWomenSection;
