import CardModelAction, { CardBackgroundAction, CardFilterAction, CardSizeAction } from "../Actions/CardModelActions";
import { background, filter, size } from "./CardReducers";
import { initialApp, initialCard } from "../initial-state";
import { objects } from "./ObjectReducers";
import AppAction, { IdAction } from "../Actions/AppActions";
import Application from "../../Types/type-application";
import Card from "../../Types/type-card";
import ObjectAction from "../Actions/ObjectActions";

const selectedId = (state: number | null = null, action: IdAction): number | null => {
  switch (action.type) {
    case "SET_SELECTED_ID":
      return action.id;
    case "RESET_SELECTED_ID":
      return null;
    default:
      return state
  }
}

const card = (state: Card = initialCard, action: CardModelAction): Card => {
  return {
    background: background(state.background, action as CardBackgroundAction),
    size: size(state.size, action as CardSizeAction),
    objects: objects(state.objects, action as ObjectAction),
    filter: filter(state.filter, action as CardFilterAction)
  }
}

const app = (state: Application = initialApp, action: AppAction): Application => {
  switch (action.type) {
    case "NEW_CARD":
      return {
        selectedId: null,
        card: initialCard
      }
    case "SET_CARD":
      return {
        selectedId: null,
        card: action.card
      }
    case "UNDO":
    case "REDO":
      return {
        selectedId: state.selectedId,
        card: action.card
      }
    default:
      return {
        selectedId: selectedId(state.selectedId, action as IdAction),
        card: card(state.card, action as CardModelAction)
      }
    }
}

export { app, selectedId };