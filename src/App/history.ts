import Card from "../Types/type-card";
import { deepCopy } from "../functions/utils";
import { getStore } from "../Store/store";

const MAX_HISTORY_SIZE: number = 10;
let undoStack: Card[] = [];
let redoStack: Card[] = [];

/**
 * Saves card state
 */
 function saveCardState(card: Card): void {
  pushToUndo(deepCopy(card));
  redoStack.length = 0;
}

function popUndo(): Card {
  const card: Card | undefined = undoStack.pop();
  const currentCard: Card = getStore().getState().card;
  if (card) {
    pushToRedo(deepCopy(currentCard));
    return card;
  }
  else {
    return currentCard;
  }
}

function popRedo(): Card {
  const card: Card | undefined = redoStack.pop();
  const currentCard: Card = getStore().getState().card;
  if (card) {
    pushToUndo(deepCopy(currentCard));
    return card;
  }
  else {
    return currentCard;
  }
}

function pushToUndo(card: Card): void {
  if (undoStack.length === MAX_HISTORY_SIZE)
    undoStack.splice(0, 1);
  undoStack.push(card);
}

function pushToRedo(card: Card): void {
  redoStack.push(card);
}

function clearHistory(): void {
  undoStack.length = 0;
  redoStack.length = 0;
}

export { saveCardState, popUndo, popRedo, clearHistory }