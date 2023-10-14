import React, { useRef, useEffect, useState } from "react";
import {
  bookImageURL,
  clothImageURL,
  electronicsImageURL,
  jewelleryImageURL,
  menImageURL,
  shoeImageURL,
  womensClothingImageURL,
} from "../Utils/constant";

const MainComponent = () => {
  const scrollContainerRef = useRef(null);
  const imageWidth = 400;
  const scrollSpeed = 1;
  const scrollDirection = useRef("right");
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const maxScrollLeft =
      scrollContainer.scrollWidth - scrollContainer.clientWidth;

    if (scrollContainer) {
      const scrollContainerLeft = () => {
        const currentScrollLeft = scrollContainer.scrollLeft;
        let newScrollLeft;

        if (scrollDirection.current === "right") {
          newScrollLeft = currentScrollLeft + scrollSpeed;
          if (newScrollLeft >= maxScrollLeft) {
            newScrollLeft = maxScrollLeft;
            scrollDirection.current = "left";
          }
        } else {
          newScrollLeft = currentScrollLeft - scrollSpeed;
          if (newScrollLeft <= 0) {
            newScrollLeft = 0;
            scrollDirection.current = "right";
          }
        }

        scrollContainer.scrollLeft = newScrollLeft;
      };

      const intervalId = setInterval(scrollContainerLeft, 20);
      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="relative w-full overflow-x-scroll" ref={scrollContainerRef}>
      <div className="flex">
        <div className="w-[400px] flex-shrink-0">
          <img src={shoeImageURL} alt="Image 1" />
        </div>
        <div className="w-[400px] flex-shrink-0">
          <img src={menImageURL} alt="Image 2" />
        </div>
        <div className="w-[400px] flex-shrink-0">
          <img src={jewelleryImageURL} alt="Image 3" />
        </div>
        <div className="w-[400px] flex-shrink-0">
          <img src={womensClothingImageURL} alt="Image 4" />
        </div>
        <div className="w-[400px] flex-shrink-0">
          <img src={electronicsImageURL} alt="Image 5" />
        </div>
        <div className="w-[400px] flex-shrink-0">
          <img src={bookImageURL} alt="Image 6" />
        </div>
        <div className="w-[400px] flex-shrink-0">
          <img src={clothImageURL} alt="Image 7" />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
