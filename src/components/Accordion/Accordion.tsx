import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "../Carousel/Carousel";
import miniTourData from "../../MiniTourData/miniTourData";
import { TourSection } from "../../types/types";
import { RootState } from "../../store/store";
import { toggleSection } from "../../store/actions";
import { useTranslation } from 'react-i18next';

const Accordion: React.FC = () => {
  const { t } = useTranslation();
  const sections: TourSection[] = t("sections", { returnObjects: true });

  const selected = useSelector((state: RootState) => state.accordion.selected);
  const dispatch = useDispatch();

  const accordionContent: JSX.Element[] = [];

  miniTourData.sections.forEach((item: TourSection, index: number) => {
    const isSectionSelected = selected === index;
    const sectionSelecter = isSectionSelected
      ? "Collapse Section"
      : "Expand Section";

    accordionContent.push(
      // HEADER
      <div className="block justify-between" key={index}>
        <div className="flex bg-white drop-shadow-md">
          {/* EXPAND & COLLAPSE + - */}
          <button
            className="pb-4 m-0 focus:outline-none focus:ring focus:ring-blue-500"
            onClick={() => dispatch(toggleSection(index))}
            aria-expanded={isSectionSelected}
            aria-controls={`accordion-section-${index}`}
          >
            <div
              className={
                isSectionSelected
                  ? "text-gray-700 cursor-pointer text-6xl pl-3.5 pt-3"
                  : "text-blue-500 cursor-pointer text-6xl pl-2 pt-2.5"
              }
              aria-label={sectionSelecter}
            >
              {isSectionSelected ? "-" : "+"}
            </div>
          </button>

          {/* FOLD TITLE */}
          <button
            className="focus:outline-none focus:ring focus:ring-blue-500 text-left"
            onClick={() => dispatch(toggleSection(index))}
            aria-expanded={isSectionSelected}
            aria-controls={`accordion-section-${index}`}
          >
            <div
              className={
                isSectionSelected
                  ? "text-blue-600 text-3xl cursor-pointer font-medium pl-6 pt-7 pb-6 pr-4 w-full"
                  : "cursor-pointer text-3xl font-medium pl-6 mt-7 pb-6 pr-4"
              }
              aria-label={sections[index].foldTitle}
            >
              {sections[index].foldTitle}
            </div>
          </button>
        </div>

        {/* ACCORDION CONTENT */}
        <div
          className={
            isSectionSelected
              ? "transition-all duration-300 ease-out"
              : "hidden transition-all duration-300 ease-out"
          }
          id={`accordion-section-${index}`}
        >
          <Carousel
            section={item}
            toggleSection={toggleSection}
            selectedIndex={selected}
          />
        </div>

        {/* ACCORDION FOLD BORDER */}
        <div className="border-t border-gray-400"></div>
      </div>
    );
  });

  return (
    <div className="justify-center mb-20 large:ml-80 large:mr-80 desktop:mr-60 desktop:ml-60 tablet:mr-0 tablet:ml-0">
      <div>{accordionContent}</div>
    </div>
  );
};

export default Accordion;
