import React from "react";
import { useNavigate } from "react-router-dom";
import {
  electronicsImageURL,
  jewelleryImageURL,
  menImageURL,
  womensClothingImageURL,
} from "../Utils/constant";
import { useSelector } from "react-redux";
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Footer from "./Footer";

const SecondaryComponent = () => {
  const navigate = useNavigate();

  const handleImageClick = (productPage) => {
    navigate(`/product/${productPage}`);
  };

  const user = useSelector((state) => state.user.userInfo);

  const { name, mail } = user;

  console.log(user);
  return (
    <>
    <div>
      <h1 className=" text-center text-2xl mt-4 text-purple-700 font-bold">
        Welcome {name} <SelfImprovementIcon/>
      </h1>
      <h1 className="text-center text-6xl mt-4 text-green-600 font-normal">
        Categories
      </h1>
      <div class="grid grid-cols-2 gap-4 mt-5 lg:ml-40 lg:mb-10 ">
        <div className="flex-shrink-0 lg:w-[400px]">
          <img
            className=" rounded transition-transform transform hover:scale-110 cursor-pointer"
            onClick={() => {
              handleImageClick("menswear");
            }}
            src={menImageURL}
            alt="Image 2"
          />
        </div>
        <div className=" flex-shrink-0 lg:w-[400px]">
          <img
            className=" rounded transition-transform transform hover:scale-110 cursor-pointer"
            onClick={() => {
              handleImageClick("jewellery");
            }}
            src={jewelleryImageURL}
            alt="Image 3"
          />
        </div>
        <div className="flex-shrink-0 lg:w-[400px]">
          <img
            className=" rounded transition-transform transform hover:scale-110 cursor-pointer"
            onClick={() => {
              handleImageClick("womenswear");
            }}
            src={womensClothingImageURL}
            alt="Image 4"
          />
        </div>
        <div className=" flex-shrink-0 lg:w-[400px]">
          <img
            className=" rounded transition-transform transform hover:scale-110 cursor-pointer"
            onClick={() => {
              handleImageClick("electronics");
            }}
            src={electronicsImageURL}
            alt="Image 5"
          />
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default SecondaryComponent;
