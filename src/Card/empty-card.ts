import Card from "../Types/type-card";
import Filters from "../Types/type-filter";
import Size from "../Types/type-size";
import { deepCopy } from "../utils/deep-copy";

const defaultCardSize: Size = {
  width: 600,
  height: 800,
}

const emptyCard: Card = {
  background: "",
  size: defaultCardSize,
  objects: [],
  filter: Filters.None
}

function getEmptyCard(): Card {
  return deepCopy(emptyCard);
}

export default getEmptyCard;