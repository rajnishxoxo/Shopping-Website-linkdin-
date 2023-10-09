import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addElectronics } from "../Utils/Redux/productSlice";

const useGetElectronicsSection = () => {
  const dispatch = useDispatch();

  const getProductFunction = async () => {
    const getDetail = await fetch(
      "https://fakestoreapi.com/products/category/electronics"
    );
    const data = await getDetail.json();

    dispatch(addElectronics(data));
  };
  useEffect(() => {
    getProductFunction();
  });
};

export default useGetElectronicsSection;
