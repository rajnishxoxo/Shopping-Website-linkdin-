import React from "react";
import { useNavigate } from "react-router-dom";

const SecondaryComponent = () => {
  const navigate = useNavigate();

  const handleImageClick = (productPage) => {
    navigate(`/product/${productPage}`);
  };
  return (
    <div>
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
            src="https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/Male-Cloth_fyyrzb.jpg"
            alt="Image 2"
          />
        </div>
        <div className=" flex-shrink-0 lg:w-[400px]">
          <img
            className=" rounded transition-transform transform hover:scale-110 cursor-pointer"
            onClick={() => {
              handleImageClick("jewellery");
            }}
            src="https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/model-jwellery_qlcjog.jpg"
            alt="Image 3"
          />
        </div>
        <div className="flex-shrink-0 lg:w-[400px]">
          <img
            className=" rounded transition-transform transform hover:scale-110 cursor-pointer"
            onClick={() => {
              handleImageClick("womenswear");
            }}
            src="https://res.cloudinary.com/dxguqzge7/image/upload/v1682838912/Cloths_kpwmp2.jpg"
            alt="Image 4"
          />
        </div>
        <div className=" flex-shrink-0 lg:w-[400px]">
          <img
            className=" rounded transition-transform transform hover:scale-110 cursor-pointer"
            onClick={() => {
              handleImageClick("electronics");
            }}
            src="https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/Electronics_lrjvlg.jpg"
            alt="Image 5"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondaryComponent;
