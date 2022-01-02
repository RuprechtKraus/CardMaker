import { getCard, setCard } from "../Card/card";
import Card from "../Types/type-card";
import CardObject from "../Types/type-card-object";

let MAX_HISTORY_SIZE: number = 10;
let undoStack: CardObject[][] = [];
let redoStack: CardObject[] = [];

function undo(): void {
  const newObjects: CardObject[] | undefined = undoStack.pop();
  if (newObjects !== undefined) {
    const card: Card = getCard();
    const newCard: Card = {
      background: card.background,
      size: card.size,
      filter: card.filter,
      objects: newObjects
    }
    setCard(newCard);
  }

  console.log("undo", undoStack);
}

function redo(): void {

}

function pushToUndo(objects: CardObject[]): void {
  if (undoStack.length === MAX_HISTORY_SIZE)
    undoStack.splice(0, 1);
  undoStack.push(objects);
  
  console.log(undoStack);
}

function pushToRedo(): void {

}

export { undo, redo, pushToUndo, pushToRedo }