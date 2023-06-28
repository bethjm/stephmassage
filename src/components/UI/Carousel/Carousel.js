import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./Carousel.css";
export const CarouselItem = ({ children }) => {
  return <div className="carousel_item">{children}</div>;
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipeRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div {...handlers} className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        />

        <FontAwesomeIcon
          icon={faArrowRight}
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;
