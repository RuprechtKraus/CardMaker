import { applyMiddleware, createStore,Store } from "redux";
import historyManager from "../Middleware/historyManager";
import Application from "../Types/type-application";
import Card from "../Types/type-card";
import { initialApp } from "./initial-state";
import { app } from "./Reducers/AppReducers";

const store: Store<Application> = createStore(app, initialApp, applyMiddleware(historyManager));
type AppDispatch = typeof store.dispatch;

let editedTextId: number | null = null;

function getStore() {
  return store;
}

function getCard(): Card {
  return store.getState().card
}

function getSelectedId(): number | null {
  return store.getState().selectedId;
}

function setEditedTextId(id: number | null): void {
  editedTextId = id;
}

function getEditedTextId(): number | null {
  return editedTextId;
}

export { getStore, getCard, getSelectedId, getEditedTextId, setEditedTextId }
export type { AppDispatch }