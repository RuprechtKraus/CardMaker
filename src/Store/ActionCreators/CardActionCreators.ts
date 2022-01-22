import Filters from "../../Types/type-filter";
import Size from "../../Types/type-size";
import { CardBackgroundAction, CardFilterAction, CardSizeAction, SetBackgroundAndSizeAction } from "../Actions/CardModelActions";


function setBackground(data: string): CardBackgroundAction {
  return {
    type: "SET_BACKGROUND",
    background: data
  }
}

function setBackgroundAndSize(data: string, size: Size): SetBackgroundAndSizeAction {
  return {
    type: "SET_BACKGROUND_AND_SIZE",
    background: data,
    size: size
  }
}

function setSize(size: Size): CardSizeAction {
  return {
    type: "SET_SIZE",
    size: size
  }
}

function setFilter(filter: Filters): CardFilterAction {
  return {
    type: "SET_FILTER",
    filter: filter
  }
}

export { setBackground, setBackgroundAndSize, setSize, setFilter };