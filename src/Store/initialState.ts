import Figures from "../Components/CardElements/ArtObject/figures";
import Types from "../Types/object-types";
import Application from "../Types/type-application";
import ArtObject from "../Types/type-art-object";
import Card from "../Types/type-card";
import Filters from "../Types/type-filter";
import Size from "../Types/type-size";
import { generateId } from "../utils/utils";

const defaultCardSize: Size = {
  width: 600,
  height: 800,
}

const heart: ArtObject = {
  id: generateId(),
  type: Types.ArtObject,
  figure: Figures.Heart,
  position: {
    x: 150,
    y: 150
  },
  size: {
    width: 100,
    height: 100
  }
}

const initialCard: Card = {
  background: "",
  size: defaultCardSize,
  objects: [heart],
  filter: Filters.None
}

const initialApp: Application = {
  seletedId: null,
  editedTextId: null,
  card: initialCard,
}

export { initialApp, initialCard };