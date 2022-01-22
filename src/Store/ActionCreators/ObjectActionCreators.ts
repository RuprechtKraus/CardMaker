import CardObject from "../../Types/type-card-object"
import Point from "../../Types/type-point"
import Size from "../../Types/type-size"
import ObjectAction from "../Actions/ObjectActions"

export function pushObject(object: CardObject): ObjectAction {
  return {
    type: "PUSH_OBJECT",
    object: object
  }
}

export function removeObject(id: number): ObjectAction {
  return {
    type: "REMOVE_OBJECT",
    id: id
  }
}

export function moveObjectUp(id: number): ObjectAction {
  return {
    type: "MOVE_OBJECT_UP",
    id: id
  }
}

export function moveObjectDown(id: number): ObjectAction {
  return {
    type: "MOVE_OBJECT_DOWN",
    id: id
  }
}

export function setObjectPosition(id: number, pos: Point): ObjectAction {
  return {
    type: "SET_OBJECT_POSITION",
    id: id,
    position: pos
  }
}

export function setObjectSize(id: number, size: Size): ObjectAction {
  return {
    type: "SET_OBJECT_SIZE",
    id: id,
    size: size
  }
}

export function setTextContent(id: number, content: string): ObjectAction {
  return {
    type: "SET_TEXT_CONTENT",
    id: id,
    text: content
  }
}