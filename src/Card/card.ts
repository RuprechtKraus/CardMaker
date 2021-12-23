import { defaultCard } from './default-card';
import Card from '../Types/type-card';

let card: Card = defaultCard;
let editorChangeHandler: any = null;
let nextId: number = 6;
let selectedId: number = -1;

function getCard(): Card {
  return card;
}

function setCard(newCard: Card): void {
  card = newCard;
}

function getNextId(): number {
  incrementNextObjectId();
  return nextId;
}

function setSelectedId(id: number): void {
  selectedId = id;
  if (editorChangeHandler)
    editorChangeHandler();
}

function resetSelectedId(): void { 
  selectedId = -1;
  if (editorChangeHandler)
    editorChangeHandler();
}

function getSelectedId(): number {
  return selectedId;
}

function incrementNextObjectId(): void {
  nextId++;
}

function addEditorChangeHandler(handler: Function): void {
  editorChangeHandler = handler;
}

function dispatch(modifyFn: any, payload: any): void {
  const newCard = modifyFn(card, payload);
  setCard(newCard);
  if (editorChangeHandler)
    editorChangeHandler();
}

export { getCard, setCard, getNextId, 
  setSelectedId, getSelectedId, resetSelectedId, 
  dispatch, addEditorChangeHandler }