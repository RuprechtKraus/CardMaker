import Figures from "../../Components/CardElements/ArtObject/figures"
import Point from "../../Types/type-point"
import Size from "../../Types/type-size"

type CreateArtObjectAction = {
  type: "CREATE_ART_OBJECT",
  figure: Figures,
  position: Point
}

type CreateImageObjectAaction = {
  type: "CREATE_IMAGE_OBJECT",
  data: string,
  position: Point,
  size: Size
}

type CreateTextObjectAction = {
  type: "CREATE_TEXT_OBJECT",
  fontFamily: string, 
  fontSize: number, 
  color: string, 
  bold: boolean, 
  italic: boolean, 
  underline: boolean, 
  position: Point
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

type ObjectAction = ObjectRemoveAction | ObjectPositionAction | ObjectSizeAction | ObjectTextAction
  | ObjectMoveUpAction | ObjectMoveDownAction | CreateArtObjectAction | CreateImageObjectAaction | CreateTextObjectAction

export default ObjectAction;