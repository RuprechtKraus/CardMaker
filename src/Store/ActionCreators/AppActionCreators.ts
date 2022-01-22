import { popUndo, popRedo } from "../../App/history";
import Card from "../../Types/type-card";
import { CardAction, IdAction, RedoAction, UndoAction } from "../Actions/AppActions";

function setSelectedId(id: number): IdAction {
  return {
    type: "SET_SELECTED_ID",
    id: id
  }
}

function resetSelectedId(): IdAction {
  return {
    type: "RESET_SELECTED_ID"
  }
}

function setCard(card: Card): CardAction {
  return {
    type: "SET_CARD",
    card: card
  }
}

export function undo(): UndoAction {
  return {
    type: "UNDO",
    card: popUndo()
  }
}

export function redo(): RedoAction {
  return {
    type: "REDO",
    card: popRedo()
  }
}

function newCard(): CardAction {
  return {
    type: "NEW_CARD"
  }
}

export { setSelectedId, resetSelectedId, setCard, newCard };