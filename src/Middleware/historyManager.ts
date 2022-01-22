import { AnyAction, Dispatch, MiddlewareAPI } from "redux";
import { clearHistory, saveCardState } from "../App/history";
import { AppDispatch } from "../Store/store";
import Application from "../Types/type-application";
import Card from "../Types/type-card";

const exceptions: string[] = [ 
  "SET_SELECTED_ID", 
  "RESET_SELECTED_ID", 
  "UNDO", 
  "REDO", 
  "SET_CARD",
  "NEW_CARD"
]

const clearHistoryActions: string[] = [
  "SET_CARD",
  "NEW_CARD"
]

function stateChanged(old: Card, current: Card): boolean {
  return JSON.stringify(old) !== JSON.stringify(current);
}

const historyManager = (store: MiddlewareAPI<Dispatch<AnyAction>, Application>) => (next: AppDispatch) => (action: AnyAction) => {
  const prevState = store.getState().card;
  const result = next(action);
  const currState = store.getState().card; 

  if (!exceptions.includes(action.type) && stateChanged(prevState, currState)) {
    saveCardState(prevState);
  }

  if (clearHistoryActions.includes(action.type)) {
    clearHistory();
  }

  return result;
}

export default historyManager;