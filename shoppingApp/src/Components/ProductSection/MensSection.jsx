import React, { useState } from "react";
import { useSelector } from "react-redux";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FilterAltIcon from "@mui/icons-material/FilterAlt";


const MensSection = () => {
  const productDetails = useSelector((state) => state.product.menswear);

  const [Displayproduct, setProduct] = useState(productDetails);

  const [filterProduct , setFilterProduct] = useState(productDetails)

  return <div>
  <div className="flex flex-row w-full justify-evenly items-center ">
    <h1 className="text-xl font-bold">
      FILTER
      <span>
        <FilterAltIcon />
      </span>
    </h1>
    <button className="w-20 bg-slate-600 text-white">Low price</button>
    <button className="w-20 bg-slate-600 text-white">High price</button>
    <button className="w-28 bg-slate-600 text-white">Highly rated</button>
  </div>
  {filterProduct.map((product) => {
    const { title, image, price, rating } = product;

    const shortTitle = title.slice(0, 20);

    return (
      <div
        key={product.id}
        className="flex flex-col justify-evenly lg:flex lg:grid-rows-2"
      >
        <div className="w-[200px] mx-auto m-2 border border-solid border-gray-300 shadow rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-2/4 mx-auto m-1 object-contain h-auto"
          />
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">{shortTitle}</h1>
            <p className="text-lg font-medium">${price}</p>
            <p>
              {rating.rate}
              <span className="ml-1">
                <StarBorderIcon />
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  })}
</div>;
};

export default MensSection;
