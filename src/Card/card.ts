import { defaultCard } from './default-card';
import Card from '../Types/card';

let card = defaultCard
let editorChangeHandler: any = null

function getCard(): Card {
  return card;
}

function setCard(newCard: Card) {
  card = newCard;
}

function addEditorChangeHandler(handler: Function) {
  editorChangeHandler = handler;
}

function dispatch(modifyFn: any, payload: any) {
  const newCard = modifyFn(card, payload);
  setCard(newCard);
  if (editorChangeHandler)
    editorChangeHandler();
}

export { getCard, setCard, dispatch, addEditorChangeHandler }