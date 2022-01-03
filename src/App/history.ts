import { getCard, setCard } from "../Card/card";
import Card from "../Types/type-card";
import CardObject from "../Types/type-card-object";

const MAX_HISTORY_SIZE: number = 10;
let undoStack: CardObject[][] = [];
let redoStack: CardObject[][] = [];

/**
 * Restores last card state
 */
function undo(): void {
  const objects: CardObject[] | undefined = undoStack.pop();
  const card: Card = getCard();
  
  if (objects)
    applyAction(card, objects);
  else
    return;
  
  pushToRedo(Array.from(card.objects));
}

/**
 * Repeats last undo action
 */
function redo(): void {
  const objects: CardObject[] | undefined = redoStack.pop();
  const card: Card = getCard();

  if (objects)
    applyAction(card, objects);
  else
    return;

  pushToUndo(Array.from(card.objects));
}

function applyAction(card: Card, objects: CardObject[]): void {
  const newCard: Card = {
    background: card.background,
    size: card.size,
    filter: card.filter,
    objects: objects
  }
  setCard(newCard);
}

/**
 * Savess last card state
 */
function saveCardState(): void {
  const card: Card = getCard();
  pushToUndo(Array.from(card.objects));
  redoStack.length = 0;
}

function pushToUndo(objects: CardObject[]): void {
  if (undoStack.length === MAX_HISTORY_SIZE)
    undoStack.splice(0, 1);
  undoStack.push(objects);
}

function pushToRedo(objects: CardObject[]): void {
  redoStack.push(objects);
}

export { undo, redo, saveCardState }