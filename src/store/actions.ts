export const SELECT_SLIDE = "SELECT_SLIDE";
export const TOGGLE_SECTION = "TOGGLE_SECTION";

export interface SelectSlideAction {
  type: typeof SELECT_SLIDE;
  payload: number;
}

export interface ToggleSectionAction {
  type: typeof TOGGLE_SECTION;
  payload: number;
}

export const selectSlide = (slideIndex: number): SelectSlideAction => {
  return {
    type: SELECT_SLIDE,
    payload: slideIndex,
  };
};

export const toggleSection = (sectionIndex: number): ToggleSectionAction => {
  return {
    type: TOGGLE_SECTION,
    payload: sectionIndex,
  };
};
