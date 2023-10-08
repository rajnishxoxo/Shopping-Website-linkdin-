import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../Utils/Redux/productSlice";

const useGetProductList = (id) => {
  const dispatch = useDispatch();
  const getProductFunction = async () => {
    const getDetail = await fetch(
      "https://fakestoreapi.com/products/category/" + id
    );
    const data = await getDetail.json();

    dispatch(addProduct(data));
  };
  useEffect(() => {
    getProductFunction();
  }, []);
};

export default useGetProductList;
