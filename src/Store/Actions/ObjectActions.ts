import CardObject from "../../Types/type-card-object"
import Point from "../../Types/type-point"
import Size from "../../Types/type-size"

type ObjectPushAction = {
  type: "PUSH_OBJECT",
  object: CardObject
}

type ObjectRemoveAction = {
  type: "REMOVE_OBJECT",
  id: number
}

type ObjectPositionAction = {
  type: "SET_OBJECT_POSITION",
  id: number,
  position: Point
}

type ObjectSizeAction = {
  type: "SET_OBJECT_SIZE",
  id: number,
  size: Size
}

type ObjectTextAction = {
  type: "SET_TEXT_CONTENT",
  id: number,
  text: string
}

type ObjectMoveUpAction = {
  type: "MOVE_OBJECT_UP",
  id: number
}

type ObjectMoveDownAction = {
  type: "MOVE_OBJECT_DOWN",
  id: number
}

type ObjectAction = ObjectPushAction | ObjectRemoveAction | ObjectPositionAction | ObjectSizeAction | ObjectTextAction
  | ObjectMoveUpAction | ObjectMoveDownAction

export default ObjectAction;