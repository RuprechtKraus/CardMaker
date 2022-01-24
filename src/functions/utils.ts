import { imageShiftCoefficient } from "../Constants/object-constants";
import Card from "../Types/type-card";
import Size from "../Types/type-size";

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

export function centerImage(cardSize: Size, imageSize: Size) {
  return {
    x: cardSize.width / 2 - (imageSize.width / imageShiftCoefficient),
    y: cardSize.height / 2 - (imageSize.height / imageShiftCoefficient)
  }
}