import CardObject from "../../Types/type-card-object";
import Filters from "../../Types/type-filter";
import Size from "../../Types/type-size";
import { setObjectFields } from "../../utils/utils";
import { BackgroundAction, FilterAction, ObjectAction, SizeAction } from "../Actions/CardModelActions";

const background = (state: string = "", action: BackgroundAction): string => {
  if (action.type === "SET_BACKGROUND") {
    return action.background;
  }
  else {
    return state;
  }
}

const size = (state: Size = { width: 600, height: 800 }, action: SizeAction): Size => {
  if (action.type === "SET_SIZE") {
    return action.size;
  }
  else {
    return state;
  }
}

const filter = (state: Filters = Filters.None, action: FilterAction): Filters => {
  if (action.type === "SET_FILTER") {
    return action.filter;
  }
  else {
    return state;
  }
}

const objects = (state: CardObject[], action: ObjectAction): CardObject[] => {
  switch (action.type) {
    case "PUSH_OBJECT":
      return [
        ...state,
        action.object
      ];
    case "REMOVE_OBJECT":
      return state;
    case "SET_OBJECT_POSITION":
      return setObjectFields(state, action.id, { position: action.position });
    default:
      return state;
  }
}

export { background, size, filter, objects };