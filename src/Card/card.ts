import { defaultCard, emptyCard } from './default-card';
import Card from '../Types/type-card';
import { saveCardState } from '../App/history';

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

function createEmptyCard(): void {
  setCard(emptyCard);
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

/**
 * Applies modification function to card and saves it's last state
 * @param modifyFn Function that modifies card
 * @param payload Params for modification function
 */
function dispatch(modifyFn: any, payload: any): void {
  saveCardState();
  const newCard = modifyFn(card, payload)
  setCard(newCard);
}

export { getCard, setCard, createEmptyCard, getNextId, 
  setSelectedId, getSelectedId, resetSelectedId,
  dispatch, addEditorChangeHandler }