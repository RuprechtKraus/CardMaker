import { getCard, setCard } from "../Card/card";
import Card from "../Types/type-card";
import { deepCopy } from "../utils/deep-copy";

const MAX_HISTORY_SIZE: number = 10;
let undoStack: Card[] = [];
let redoStack: Card[] = [];

/**
 * Restores last card state
 */
function undo(): void {
  const card: Card | undefined = undoStack.pop();
  if (card)
    applyState(card, pushToRedo);
}

/**
 * Repeats last undo action
 */
function redo(): void {
  const card: Card | undefined = redoStack.pop();
  if (card)
    applyState(card, pushToUndo);
}

/**
 * Applies card state and saves current card state
 * @param card Card state to apply
 * @param pushAction pushToUndo or pushToRedo functions
 */
function applyState(state: Card, pushAction: (card: Card) => void): void {
  const currentCard: Card = getCard();
  setCard(state);
  pushAction(deepCopy(currentCard));
}

/**
 * Saves last card state
 */
function saveCardState(): void {
  const card: Card = getCard();
  pushToUndo(deepCopy(card));
  redoStack.length = 0;
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

export { undo, redo, saveCardState, clearHistory }