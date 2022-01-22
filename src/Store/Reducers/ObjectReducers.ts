import CardObject from "../../Types/type-card-object";
import ObjectAction from "../Actions/ObjectActions";
import { moveObjectDown, moveObjectUp, setObjectFields } from "../object-modifiers";

const objects = (state: CardObject[], action: ObjectAction): CardObject[] => {
  switch (action.type) {
    case "PUSH_OBJECT":
      return [
        ...state,
        action.object
      ];
    case "REMOVE_OBJECT":
      return state.filter((element: CardObject) => { return element.id !== action.id });
    case "MOVE_OBJECT_UP":
      return moveObjectUp(state, action.id);
    case "MOVE_OBJECT_DOWN":
      return moveObjectDown(state, action.id);
    case "SET_OBJECT_POSITION":
      return setObjectFields(state, action.id, { position: action.position });
    case "SET_OBJECT_SIZE":
      return setObjectFields(state, action.id, { size: action.size });
    case "SET_TEXT_CONTENT":
      return setObjectFields(state, action.id, { text: action.text });
    default:
      return state;
  }
}

export { objects }