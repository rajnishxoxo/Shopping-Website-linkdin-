import { useEffect } from "react";


const useGetProductList = (id)=>{
    const getProductFunction = async () => {
        const getDetail = await fetch(
          "https://fakestoreapi.com/products/category/" + id
        );
        const data = await getDetail.json();
        console.log(data);
      };
      useEffect(() => {
        getProductFunction();
      }, []);
}

export default useGetProductList;