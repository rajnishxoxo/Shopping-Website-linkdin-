import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Link } from "react-router-dom";


const JewellerySection = () => {
  const productDetails = useSelector((state) => state.product.jewellery);

  const [Displayproduct, setProduct] = useState(productDetails);
  const [filterProduct, setFilterProduct] = useState(productDetails);
  const [selectedFilter, setSelectedFilter] = useState("Low to High");

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);

    switch (selectedValue) {
      case "Low to High": {
        setFilterProduct([...Displayproduct].sort((a, b) => a.price - b.price));
        break;
      }
      case "High to Low": {
        setFilterProduct([...Displayproduct].sort((a, b) => b.price - a.price));
        break;
      }
      case "Highly rated": {
        setFilterProduct(
          [...Displayproduct].sort((a, b) => b.rating.rate - a.rating.rate)
        );
        break;
      }
    }
  };

  useEffect(() => {
    const defaultProductArrangement = [...Displayproduct].sort(
      (a, b) => a.price - b.price
    );
    setFilterProduct(defaultProductArrangement);
  }, []);

  return (
    <div>
      <div className="flex flex-row w-full justify-evenly items-center ">
        <h1 className="text-xl font-bold">
          FILTER
          <span>
            <FilterAltIcon />
          </span>
        </h1>
        <select
          value={selectedFilter}
          onChange={handleFilterChange}
          className="w-28 bg-slate-600 text-white"
        >
          <option value="Low to High">Low price</option>
          <option value="High to Low">High price</option>
          <option value="Highly rated">Highly rated</option>
        </select>
      </div>

      {filterProduct.map((product) => {
        const { title, image, price, rating,id } = product;
        const shortTitle = title.slice(0, 20);

        return (
          <div
            key={product.id}
            className="flex flex-col justify-evenly lg:flex lg:grid-rows-2"
          >
            <Link to={`/detail/${id}`} key={id}>
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
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default JewellerySection;
