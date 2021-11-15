import { defaultCard } from './default-card'
import Card from '../Types/card'

let card = defaultCard

export function getCard(): Card {
  return card;
}

export function setCard(newCard: Card) {
  card = newCard;
}