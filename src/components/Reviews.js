import React from "react";

import Carousel, { CarouselItem } from "./UI/Carousel/Carousel";

function Reviews() {
  return (
    <div className="reviews">
      <div className="reviews_container">
        <Carousel>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 1</CarouselItem>
        </Carousel>
      </div>
    </div>
  );
}

export default Reviews;
