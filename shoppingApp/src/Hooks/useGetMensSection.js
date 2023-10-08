import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMensProduct} from "../Utils/Redux/productSlice";

const useGetMensSection = () => {
  const dispatch = useDispatch();
  const getProductFunction = async () => {
    const getDetail = await fetch(
      "https://fakestoreapi.com/products/category/men's clothing"
    );
    const data = await getDetail.json();

    dispatch(addMensProduct(data));
  };
  useEffect(() => {
    getProductFunction();
  }, []);
};

export default useGetMensSection;
