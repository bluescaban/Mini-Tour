import React, { useState, useEffect } from "react"; // Importing useEffect
import { useDispatch } from "react-redux";
import { toggleSection } from "../../store/actions";
import Coachmark from "../Coachmark/Coachmark";
import { TourStep, TourSection } from "../../types/types";
import { useTranslation } from "react-i18next";

export interface CarouselSliderProps {
  slides: TourStep[];
  toggleSection: (index: number) => void;
  selectedIndex: number | false;
  onEndOfSection?: () => void;
}

const CarouselSlider: React.FC<CarouselSliderProps> = ({
  slides,
  selectedIndex,
}) => {
  const { t } = useTranslation();

  const sections: TourSection[] = t("sections", { returnObjects: true });

  // Separate indices for sections and steps
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof selectedIndex === "number") {
      setCurrentSectionIndex(selectedIndex);
    }
  }, [selectedIndex]);

  const goToPrevious = () => {
    const isFirstSlide = currentStepIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentStepIndex - 1;
    setCurrentStepIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentStepIndex === slides.length - 1;
    if (isLastSlide) {
      if (
        typeof selectedIndex === "number" &&
        selectedIndex < sections.length - 1
      ) {
        // When it's the last slide of the current section,
        // and there's another section, move to that section.
        setCurrentStepIndex(0); // reset to first step of the next section
        setCurrentSectionIndex(currentSectionIndex + 1); // move to the next section
        dispatch(toggleSection(selectedIndex + 1));
      } else {
        // If it's the last slide of the last section, loop back to the first slide.
        setCurrentStepIndex(0);
        setCurrentSectionIndex(0); // Also reset the section
      }
    } else {
      // If it's not the last slide, move to the next slide.
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const goToSlide = (stepIndex: number) => {
    setCurrentStepIndex(stepIndex);
  };

  return (
    // CAROUSEL CONTENT
    <div
      className="flex mobile:flex-wrap tablet:flex-wrap desktop:flex-nowrap desktop:order-1"
      role="region"
      aria-label="Carousel"
    >
      {/* TEXT AREA */}
      <div
        className="w-1/5 mobile:order-2 mobile:w-full tablet:order-2 tablet:w-full desktop:w-1/5 desktop:mr-2"
        aria-live="polite"
      >
        {/* HEADER */}
        <div
          className="ml-4 mt-4 font-light text-xl"
          id="carousel-heading"
          aria-labelledby="carousel-heading"
        >
          {sections[currentSectionIndex]?.steps[currentStepIndex]?.header}
        </div>
        {/* DESCRIPTION */}
        <div
          className="ml-4 mt-4 font-light text-sm"
          id="carousel-slide-description"
          aria-labelledby="carousel-slide-description"
        >
          {sections[currentSectionIndex]?.steps[currentStepIndex]?.description}
        </div>
        {/* OPTIONAL LINK */}
        {sections[currentSectionIndex].steps[currentStepIndex]
          .optionalLinkTitle &&
          sections[currentSectionIndex].steps[currentStepIndex]
            .optionalLinkAddress && (
            <div className="ml-4 mt-4 font-semibold underline text-blue-500 text-sm">
              <a
                target="_blank"
                rel="noreferrer"
                href={
                  sections[currentSectionIndex]?.steps[currentStepIndex]
                    ?.optionalLinkAddress
                }
                id="optional-link"
              >
                {
                  sections[currentSectionIndex]?.steps[currentStepIndex]
                    ?.optionalLinkTitle
                }
              </a>
            </div>
          )}
        {/* STEP COUNT */}
        <div
          className="ml-4 mt-4 mb-4"
          id="carousel-step-count"
          aria-labelledby="carousel-step-count"
        >
          {t("Step")} {currentStepIndex + 1} {t("Of")} {slides.length}
        </div>
      </div>
      {/* IMAGE AREA */}
      <div className="w-full ml-4 mobile:order-1 mobile:ml-0 tablet:order-1 tablet:ml-0 desktop:order-2 desktop:ml-4">
        {/* COACHMARK OVERLAY */}
        <Coachmark
          coordinates={slides[currentStepIndex].coordinates}
          onClick={goToNext}
        />
        {/* SLIDE IMAGE */}
        <img
          className="w-full shadow-xl large:w-full large:mx-auto"
          alt="slideimage"
          src={slides[currentStepIndex].img}
        />
        {/* SLIDER NAV */}
        <div className="flex justify-between mb-2 mr-4 ml-4 large:mx-auto">
          {/* LEFT ARROW */}
          <button
            className="text-6xl text-gray-600 font-light cursor-pointer large:mx-auto focus:outline-none focus:ring focus:ring-blue-500"
            onClick={goToPrevious}
            aria-label="Previous Slide"
          >
            ‹
          </button>
          {/* DOT INDICATOR */}
          <div className="flex justify-center mt-5 text-md">
            {slides.map((slide, slideIndex) => (
              <button
                key={slideIndex}
                className="cursor-pointer text-gray-600 m-0.5 focus:outline-none focus:ring focus:ring-blue-500"
                onClick={() => goToSlide(slideIndex)}
                aria-label={`Go to Slide ${slideIndex + 1}`}
                aria-pressed={currentStepIndex === slideIndex}
              >
                {currentStepIndex === slideIndex ? "●" : "○"}
              </button>
            ))}
          </div>
          {/* RIGHT ARROW */}
          <button
            className="text-6xl text-gray-600 font-light cursor-pointer large:mx-auto focus:outline-none focus:ring focus:ring-blue-500"
            onClick={goToNext}
            aria-label="Next Slide"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlider;
