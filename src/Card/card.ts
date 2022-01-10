import getEmptyCard from './empty-card';
import Card from '../Types/type-card';
import { clearHistory, saveCardState } from '../App/history';

let card: Card = getEmptyCard();
let editorChangeHandler: Function | null = null;
let lastId: number = card.objects.length;
let selectedId: number = -1;
let editedTextId = -1;

function getCard(): Card {
  return card;
}

function setCard(newCard: Card): void {
  card = newCard;
  if (editorChangeHandler)
    editorChangeHandler();
}

function createEmptyCard(): void {
  setCard(getEmptyCard());
  clearHistory();
}

function nextId(): number {
  incrementLastId();
  return lastId;
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

function setEditedTextId(id: number): void {
  editedTextId = id;
}

function getEditedTextId(): number {
  return editedTextId;
}

function resetEditedTextId(): void {
  editedTextId = -1;
}

function incrementLastId(): void {
  lastId++;
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

export { getCard, setCard, createEmptyCard, nextId, 
  setSelectedId, getSelectedId, resetSelectedId,
  dispatch, addEditorChangeHandler }
export { setEditedTextId, getEditedTextId, resetEditedTextId }