import Card from "../Types/type-card";

function deepCopy(card: Card): Card {
  const copy: Card = {
    background: card.background,
    size: card.size,
    objects: Array.from(card.objects),
    filter: card.filter
  }
  return copy;
}

export { deepCopy };