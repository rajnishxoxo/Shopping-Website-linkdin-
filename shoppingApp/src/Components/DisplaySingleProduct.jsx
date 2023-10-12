import React from "react";
import StarIcon from "@mui/icons-material/Star";
import DiscountIcon from "@mui/icons-material/Discount";
import Header from "./Header";

const DisplaySingleProduct = ({
  category,
  price,
  image,
  description,
  title,
  rating,
  handleAddToCart,
  handleNavigationToCart,
}) => {
  return (
    <div>
      <div>
        <Header />
        <div className="flex flex-col mt-2">
          <p className="bg-blue-600 h-auto text-white rounded w-24">
            {category}
          </p>
          <img
            className="w-[200px] mt-3 shadow  mx-auto border border-black"
            src={image}
          />

          <h1 className="text-2xl font-bold m-3 text-center">{title}</h1>
          <p className="text-lg font-bold m-3 text-center">{description}</p>
          <p className="text-center text-lg m-2 font-bold">
            {rating?.rate}
            <span>
              <StarIcon />
            </span>
          </p>
          <p className="bg-blue-600 h-auto text-white rounded w-40 text-center mx-auto m-2">
            <span>
              <DiscountIcon />
            </span>
            Upto 9% off
          </p>
          <p className=" text-center mt-2 text-xl font-bold">PRICE :{price}$</p>
        </div>
        <div className="flex flex-row w-3/4 mx-auto   items-center">
          <button
            onClick={handleAddToCart}
            className="text-xl font-normal m-2  text-white bg-blue-600 rounded"
          >
            ADD TO CART
          </button>
          <button
            onClick={() => {
              handleNavigationToCart();
            }}
            className="text-xl font-normal m-2  text-white bg-blue-600 rounded"
          >
            PROCEED TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplaySingleProduct;
