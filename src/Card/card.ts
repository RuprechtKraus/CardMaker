import { defaultCard } from './default-card';
import Card from '../Types/type-card';
import { pushToUndo } from '../App/history';

let card: Card = defaultCard;
let editorChangeHandler: Function | null = null;
let nextId: number = 6;
let selectedId: number = -1;

function getCard(): Card {
  return card;
}

function setCard(newCard: Card): void {
  card = newCard;
  if (editorChangeHandler)
    editorChangeHandler();
}

function getNextId(): number {
  incrementNextObjectId();
  return nextId;
}

function getSelectedId(): number {
  return selectedId;
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

function incrementNextObjectId(): void {
  nextId++;
}

function addEditorChangeHandler(handler: Function): void {
  editorChangeHandler = handler;
}

function dispatch(modifyFn: any, payload: any): void {
  pushToUndo(Array.from(card.objects));
  const newCard = modifyFn(card, payload)
  setCard(newCard);
}

export { getCard, setCard, getNextId, 
  setSelectedId, getSelectedId, resetSelectedId,
  dispatch, addEditorChangeHandler }