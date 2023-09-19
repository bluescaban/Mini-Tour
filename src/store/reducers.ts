import { combineReducers } from "redux";
import { SELECT_SLIDE, TOGGLE_SECTION } from "./actions";

interface CarouselState {
  currentIndex: number;
}

interface AccordionState {
  selected: number | false;
}

const initialCarouselState: CarouselState = {
  currentIndex: 0,
};

const initialAccordionState: AccordionState = {
  selected: 0,
};

const carouselReducer = (state = initialCarouselState, action: any) => {
  switch (action.type) {
    case SELECT_SLIDE:
      return {
        ...state,
        currentIndex: action.payload,
      };
    default:
      return state;
  }
};

const accordionReducer = (state = initialAccordionState, action: any) => {
  switch (action.type) {
    case TOGGLE_SECTION:
      return {
        ...state,
        selected: state.selected === action.payload ? false : action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  carousel: carouselReducer,
  accordion: accordionReducer,
});

export default rootReducer;