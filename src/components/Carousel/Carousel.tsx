import React from "react";
import CarouselSlider, { CarouselSliderProps } from "./CarouselSlider";
import { TourSection } from "../../types/types";

export interface CarouselProps extends Omit<CarouselSliderProps, "slides"> {
  section: TourSection;
}

const Carousel: React.FC<CarouselProps> = ({
  section,
  ...carouselSliderProps
}) => {
  const slides = section.steps;

  return (
    // CAROUSEL CONTAINER
    <div role="region" aria-labelledby="carousel" aria-live="polite">
      <h2 id="carousel" className="sr-only">
        Carousel
      </h2>
      <div className="bg-gradient-to-b from-white to-gray-200/30 mobile:flex-row tablet:flex-row">
        <CarouselSlider slides={slides} {...carouselSliderProps} />
      </div>
    </div>
  );
};

export default Carousel;


