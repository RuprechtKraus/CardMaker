import Card from "../Types/type-card";
import CardObject from "../Types/type-card-object";

function generateId(): number {
  return Date.now() + Math.floor(Math.random() * 10000);
}

function deepCopy(card: Card): Card {
  const copy: Card = {
    background: card.background,
    size: card.size,
    objects: Array.from(card.objects),
    filter: card.filter
  }
  return copy;
}

function setObjectFields(objects: CardObject[], id: number, fields: object): CardObject[] {
  let newObjects: CardObject[] = objects.map((element: CardObject) => {
    if (element.id === id) {
      return {
        ...element,
        ...fields
      }
    }
    else {
      return element;
    }
  });
  return newObjects;
}

export { generateId, deepCopy, setObjectFields }