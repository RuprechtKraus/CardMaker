import Card from "../../Types/type-card";
import CardModelAction from "./CardModelActions";

type SetIdAction = {
  type: "SET_SELECTED_ID",
  id: number
}

type ResetIdAction = {
  type: "RESET_SELECTED_ID"
}

type IdAction = SetIdAction | ResetIdAction

type SetCardAction = {
  type: "SET_CARD",
  card: Card
}

type UndoAction = {
  type: "UNDO",
  card: Card
}

type RedoAction = {
  type: "REDO",
  card: Card
}

type NewCardAction = {
  type: "NEW_CARD"
}

type CardAction = SetCardAction | NewCardAction
type AppAction = IdAction | CardAction | CardModelAction | UndoAction | RedoAction

export default AppAction; 
export type { IdAction, CardAction, UndoAction, RedoAction }