import Card from "../../Types/type-card";
import { CardAction, EditedTextIdAction, IdAction } from "../Actions/AppActions";

function setSelectedId(id: number): IdAction {
  return {
    type: "SET_SELECTED_ID",
    id: id
  }
}

function setEditedTextId(id: number): EditedTextIdAction {
  return {
    type: "SET_EDITED_TEXT_ID",
    id: id
  }
}

function setCard(card: Card): CardAction {
  return {
    type: "SET_CARD",
    card: card
  }
}

export { setSelectedId, setEditedTextId, setCard };