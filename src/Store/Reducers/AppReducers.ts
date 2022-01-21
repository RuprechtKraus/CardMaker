import Application from "../../Types/type-application";
import Card from "../../Types/type-card";
import { initialApp, initialCard } from "./../initialState";
import AppAction, { EditedTextIdAction, IdAction } from "../Actions/AppActions";
import { BackgroundAction, CardModelAction, FilterAction, ObjectAction, SizeAction } from "../Actions/CardModelActions";
import { background, filter, objects, size } from "./CardReducers";

const selectedId = (state: number | null = null, action: IdAction): number | null => {
  if (action.type === "SET_SELECTED_ID") {
    return action.id;
  }
  else {
    return state;
  }
}

const editedTextId = (state: number | null = null, action: EditedTextIdAction): number | null => {
  if (action.type === "SET_EDITED_TEXT_ID") {
    return action.id;
  }
  else {
    return state;
  }
}

const card = (state: Card = initialCard, action: CardModelAction): Card => {
  return {
    background: background(state.background, action as BackgroundAction),
    size: size(state.size, action as SizeAction),
    objects: objects(state.objects, action as ObjectAction),
    filter: filter(state.filter, action as FilterAction)
  }
}

const app = (state: Application = initialApp, action: AppAction): Application => {
  return {
    seletedId: selectedId(state.seletedId, action as IdAction),
    editedTextId: editedTextId(state.editedTextId, action as EditedTextIdAction),
    card: card(state.card, action as CardModelAction)
  }
}

export { app, selectedId, editedTextId };