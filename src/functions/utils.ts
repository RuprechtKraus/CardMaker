import Card from "../Types/type-card";

export function generateId(): number {
  return Date.now() + Math.floor(Math.random() * 10000);
}

export function deepCopy(card: Card): Card {
  const copy: Card = {
    background: card.background,
    size: card.size,
    objects: Array.from(card.objects),
    filter: card.filter
  }
  return copy;
} 