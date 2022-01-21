import CardObject from "../../Types/type-card-object";
import Filters from "../../Types/type-filter";
import Point from "../../Types/type-point";
import Size from "../../Types/type-size";

type BackgroundAction = {
  type: "SET_BACKGROUND",
  background: string
}

type SizeAction = {
  type: "SET_SIZE",
  size: Size
}

type FilterAction = {
  type: "SET_FILTER",
  filter: Filters
}

type PushAction = {
  type: "PUSH_OBJECT",
  object: CardObject
}

type RemoveAction = {
  type: "REMOVE_OBJECT",
  id: number
}

type PositionAction = {
  type: "SET_OBJECT_POSITION",
  id: number,
  position: Point
}

type ObjectAction = PushAction | RemoveAction | PositionAction
type CardModelAction = SizeAction | BackgroundAction | FilterAction | ObjectAction

export type { CardModelAction, SizeAction, BackgroundAction, FilterAction, ObjectAction, PushAction, RemoveAction, PositionAction };