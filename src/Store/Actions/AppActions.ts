import Card from "../../Types/type-card";
import { CardModelAction } from "./CardModelActions";

type IdAction = {
  type: "SET_SELECTED_ID",
  id: number
}

type EditedTextIdAction = {
  type: "SET_EDITED_TEXT_ID",
  id: number
}

type CardAction = {
  type: "SET_CARD",
  card: Card
}

type AppAction = IdAction | EditedTextIdAction | CardAction | CardModelAction;

export default AppAction; 
export type { IdAction, EditedTextIdAction, CardAction }