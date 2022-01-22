import Filters from "../../Types/type-filter";
import Size from "../../Types/type-size";
import ObjectAction from "./ObjectActions";


type SetBackgroundAction = {
  type: "SET_BACKGROUND",
  background: string
}

type SetBackgroundAndSizeAction = {
  type: "SET_BACKGROUND_AND_SIZE",
  background: string,
  size: Size
}

type SetSizeAction = {
  type: "SET_SIZE",
  size: Size
}

type CardFilterAction = {
  type: "SET_FILTER",
  filter: Filters
}

type CardBackgroundAction = SetBackgroundAction | SetBackgroundAndSizeAction
type CardSizeAction = SetSizeAction | SetBackgroundAndSizeAction
type CardModelAction = CardSizeAction | CardBackgroundAction | CardFilterAction | ObjectAction | CardBackgroundAction

export default CardModelAction;
export type { CardSizeAction, CardBackgroundAction, CardFilterAction, SetBackgroundAction, SetBackgroundAndSizeAction };