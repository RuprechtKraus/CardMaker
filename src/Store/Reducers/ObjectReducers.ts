import Figures from "../../Components/CardElements/ArtObject/figures";
import { generateId } from "../../functions/utils";
import Types from "../../Types/object-types";
import ArtObject from "../../Types/type-art-object";
import Point from "../../Types/type-point";
import CardObject from "../../Types/type-card-object";
import ObjectAction from "../Actions/ObjectActions";
import { moveObjectDown, moveObjectUp, setObjectFields } from "../object-modifiers";
import { defaultStickerHeight, defaultStickerWidth, defaultText, imageShrinkCoefficient } from "../../Constants/object-constants";
import Image from "../../Types/type-image";
import Size from "../../Types/type-size";
import Text from "../../Types/type-text";

function artObjectCreator(stickerType: Figures, position: Point): ArtObject {
  const id: number = generateId();
  const sticker: ArtObject = {
    id: id,
    type: Types.ArtObject,
    figure: stickerType,
    position: position,
    size: {
      width: defaultStickerWidth,
      height: defaultStickerHeight
    }
  }
  return sticker;
}

function imageObjectCreator(data: string, position: Point, size: Size): Image {
  const id: number = generateId();
  const image: Image = {
    id: id,
    type: Types.Image,
    data: data,
    position: position,
    size: {
      width: size.width / imageShrinkCoefficient,
      height: size.height / imageShrinkCoefficient
    }
  }
  return image;
}

function textObjectCreator(
  fontFamily: string, fontSize: number, color: string, 
  bold: boolean, italic: boolean, underline: boolean, position: Point
): Text {
  const id: number = generateId();
  const text: Text = {
    id: id,
    type: Types.Text,
    text: defaultText,
    color: color,
    fontFamily: fontFamily,
    fontSize: fontSize,
    bold: bold,
    italic: italic,
    underline: underline,
    position: position,
    size: {
      height: 0,
      width: 0
    }
  }
  return text;
}

const objects = (state: CardObject[], action: ObjectAction): CardObject[] => {
  switch (action.type) {
    case "CREATE_ART_OBJECT":
      const artObject = artObjectCreator(action.figure, action.position);
      return [
        ...state,
        artObject
      ]
    case "CREATE_IMAGE_OBJECT":
      const imageObject = imageObjectCreator(action.data, action.position, action.size);
      return [
        ...state,
        imageObject
      ];
    case "CREATE_TEXT_OBJECT":
      const textObject = textObjectCreator(action.fontFamily, action.fontSize, action.color, 
        action.bold, action.italic, action.underline, action.position);
      return [
        ...state,
        textObject
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