import { defaultCard } from './default-card';
import Card from '../Types/type-card';

let card = defaultCard
let editorChangeHandler: any = null
let nextObjectId = 6
let selectedElementId = null

function getCard(): Card {
  return card;
}

function setCard(newCard: Card) {
  card = newCard;
}

function getNextObjectId() {
  return nextObjectId;
}

function incrementNextObjectId() {
  nextObjectId++;
}

function addEditorChangeHandler(handler: Function) {
  editorChangeHandler = handler;
}

function dispatch(modifyFn: any, payload: any) {
  const newCard = modifyFn(card, payload);
  setCard(newCard);
  console.log(newCard);
  if (editorChangeHandler)
    editorChangeHandler();
}

export { getCard, setCard, getNextObjectId, incrementNextObjectId, dispatch, addEditorChangeHandler }