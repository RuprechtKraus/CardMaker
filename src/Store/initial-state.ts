import Application from "../Types/type-application";
import Card from "../Types/type-card";
import Filters from "../Types/type-filter";
import Size from "../Types/type-size";

const defaultCardSize: Size = {
  width: 600,
  height: 800,
}

const initialCard: Card = {
  background: "",
  size: defaultCardSize,
  objects: [],
  filter: Filters.None
}

const initialApp: Application = {
  selectedId: null,
  card: initialCard,
}

export { initialApp, initialCard };