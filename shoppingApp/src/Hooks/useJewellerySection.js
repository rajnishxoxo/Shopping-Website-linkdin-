import { useDispatch } from "react-redux";
import { addJewellery } from "../Utils/Redux/productSlice";
import { useEffect } from "react";

const usejewellerySection = () => {
  const dispatch = useDispatch();

  const getProductFunction = async () => {
    const getDetail = await fetch(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    const data = await getDetail.json();
    dispatch(addJewellery(data));
  };
  useEffect(() => {
    getProductFunction();
  }, []);
};


export default usejewellerySection;
