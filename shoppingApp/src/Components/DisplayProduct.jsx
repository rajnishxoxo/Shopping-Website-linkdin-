import React from "react";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const DisplayProduct = ({ title, image, price, rating }) => {
  const shortTitle = title.slice(0, 20);

  console.log(rating);

  return (
    <div className="flex  flex-col justify-evenly lg:flex lg:grid-rows-2">
      <div className="w-[200px] mx-auto m-2 border border-solid border-gray-300   shadow rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-2/4 mx-auto m-1 object-contain  h-auto"
        />
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-2">{shortTitle}</h1>
          <p className="text-lg font-medium">${price}</p>
          <p>{rating.rate}<span className="ml-1"><StarBorderIcon/></span></p>
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
