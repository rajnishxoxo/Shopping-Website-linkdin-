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
    </div>
  );
};

export default SecondaryComponent;
