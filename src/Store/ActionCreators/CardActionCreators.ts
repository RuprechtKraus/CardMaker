import CardObject from "../../Types/type-card-object";
import Filters from "../../Types/type-filter";
import Point from "../../Types/type-point";
import Size from "../../Types/type-size";
import { BackgroundAction, FilterAction, PositionAction, PushAction, SizeAction } from "../Actions/CardModelActions";

function setBackground(data: string): BackgroundAction {
  return {
    type: "SET_BACKGROUND",
    background: data
  }
}

function setSize(size: Size): SizeAction {
  return {
    type: "SET_SIZE",
    size: size
  }
}

function setFilter(filter: Filters): FilterAction {
  return {
    type: "SET_FILTER",
    filter: filter
  }
}

function pushObject(object: CardObject): PushAction {
  return {
    type: "PUSH_OBJECT",
    object: object
  }
}

function setObjectPosition(id: number, pos: Point): PositionAction {
  return {
    type: "SET_OBJECT_POSITION",
    id: id,
    position: pos
  }
}

export { setBackground, setSize, setFilter, pushObject, setObjectPosition };