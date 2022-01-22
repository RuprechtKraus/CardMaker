import { CardBackgroundAction, CardFilterAction, CardSizeAction } from "../Actions/CardModelActions";
import Filters from "../../Types/type-filter";
import Size from "../../Types/type-size";

const background = (state: string = "", action: CardBackgroundAction): string => {
  if (action.type === "SET_BACKGROUND" || action.type === "SET_BACKGROUND_AND_SIZE") {
    return action.background;
  }
  else {
    return state;
  }
}

const size = (state: Size = { width: 600, height: 800 }, action: CardSizeAction): Size => {
  if (action.type === "SET_SIZE" || action.type === "SET_BACKGROUND_AND_SIZE") {
    return action.size;
  }
  else {
    return state;
  }
}

const filter = (state: Filters = Filters.None, action: CardFilterAction): Filters => {
  if (action.type === "SET_FILTER") {
    return action.filter;
  }
  else {
    return state;
  }
}

export { background, size, filter };