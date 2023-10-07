import React from "react";
import { useNavigate } from "react-router-dom";

const SecondaryComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {};
  return (
    <div>
      <h1 className="text-center text-6xl mt-4 text-green-600 font-normal">
        Categories
      </h1>
      <div class="grid grid-cols-3 gap-4">
        <div className=" rounded flex-shrink-0">
          <img className=" rounded"
            src="https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/Shoe_e2yc1d.jpg"
            alt="Image 1"
          />
        </div>
        <div className="flex-shrink-0">
          <img className=" rounded"
            src="https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/Male-Cloth_fyyrzb.jpg"
            alt="Image 2"
          />
        </div>
        <div className=" flex-shrink-0">
          <img className=" rounded"
            src="https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/model-jwellery_qlcjog.jpg"
            alt="Image 3"
          />
        </div>
        <div className="flex-shrink-0">
          <img className=" rounded"
            src="https://res.cloudinary.com/dxguqzge7/image/upload/v1682838912/Cloths_kpwmp2.jpg"
            alt="Image 4"
          />
        </div>
        <div className=" flex-shrink-0">
          <img className=" rounded"
            src="https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/Electronics_lrjvlg.jpg"
            alt="Image 5"
          />
        </div>
        <div className=" flex-shrink-0">
          <img className=" rounded"
            src="https://res.cloudinary.com/dxguqzge7/image/upload/v1682838761/Book_lc6ikb.jpg"
            alt="Image 6"
          />
        </div>
        <div className=" flex-shrink-0">
          <img className=" rounded"
            src="https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/Cloth-banner_ylavk9.jpg"
            alt="Image 7"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondaryComponent;
