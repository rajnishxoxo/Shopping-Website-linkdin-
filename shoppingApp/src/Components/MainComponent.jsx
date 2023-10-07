import React, { useRef, useEffect, useState } from "react";

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
          <img
            src="https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/Shoe_e2yc1d.jpg"
            alt="Image 1"
          />
        </div>
        <div className="w-[400px] flex-shrink-0">
          <img
            src="https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/Male-Cloth_fyyrzb.jpg"
            alt="Image 2"
          />
        </div>
        <div className="w-[400px] flex-shrink-0">
          <img
            src="https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/model-jwellery_qlcjog.jpg"
            alt="Image 3"
          />
        </div>
        <div className="w-[400px] flex-shrink-0">
          <img
            src="https://res.cloudinary.com/dxguqzge7/image/upload/v1682838912/Cloths_kpwmp2.jpg"
            alt="Image 4"
          />
        </div>
        <div className="w-[400px] flex-shrink-0">
          <img
            src="https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/Electronics_lrjvlg.jpg"
            alt="Image 5"
          />
        </div>
        <div className="w-[400px] flex-shrink-0">
          <img
            src="https://res.cloudinary.com/dxguqzge7/image/upload/v1682838761/Book_lc6ikb.jpg"
            alt="Image 6"
          />
        </div>
        <div className="w-[400px] flex-shrink-0">
          <img
            src="https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/Cloth-banner_ylavk9.jpg"
            alt="Image 7"
          />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
