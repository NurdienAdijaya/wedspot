import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./image.css";

const ImageCarousel = () => {
  return (
    <div className="">
      <Carousel infiniteLoop autoPlay> 
        <div className="image">
          <img src="https://source.unsplash.com/550x400/?bride" alt="" />
        </div>
        <div className="image">
          <img src="https://source.unsplash.com/550x400/?bride" alt="" />
        </div>
        <div className="image">
          <img src="https://source.unsplash.com/550x400/?bride" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
