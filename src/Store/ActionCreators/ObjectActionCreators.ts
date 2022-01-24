import Figures from "../../Components/CardElements/ArtObject/figures"
import Point from "../../Types/type-point"
import Size from "../../Types/type-size"
import ObjectAction from "../Actions/ObjectActions"

export function createArtObject(figure: Figures, position: Point): ObjectAction {
  return {
    type: "CREATE_ART_OBJECT",
    figure: figure,
    position: position
  }
}

export function createImageObject(data: string, position: Point, size: Size): ObjectAction {
  return {
    type: "CREATE_IMAGE_OBJECT",
    data: data,
    position: position,
    size: size
  }
}

export function createTextObject(
  fontFamily: string, fontSize: number, color: string, 
  bold: boolean, italic: boolean, underline: boolean, position: Point
): ObjectAction {
  return {
    type: "CREATE_TEXT_OBJECT",
    fontFamily: fontFamily, 
    fontSize: fontSize, 
    color: color, 
    bold: bold, 
    italic: italic, 
    underline: underline, 
    position: position
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