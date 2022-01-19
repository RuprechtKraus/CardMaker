import Figures from "../../../Components/CardElements/ArtObject/figures";
import Types from "../../../Types/object-types";
import ArtObject from "../../../Types/type-art-object";
import Card from "../../../Types/type-card";
import Filters from "../../../Types/type-filter";
import Text from "../../../Types/type-text";
import background from "./halloween_background.jpeg";

const witchHat: ArtObject = {
  id: 1,
  type: Types.ArtObject,
  figure: Figures.WitchHat,
  position: {
    x: 608,
    y: 330
  },
  size: {
    width: 205,
    height: 205
  }
}

const ghost: ArtObject = {
  id: 2,
  type: Types.ArtObject,
  figure: Figures.Ghost,
  position: {
    x: 105,
    y: 100
  },
  size: {
    width: 270,
    height: 270
  }
}

const text: Text = {
  id: 3,
  type: Types.Text,
  text: "Happy Halloween!",
  color: "rgb(248, 171, 29)",
  fontSize: 72,
  fontFamily: "Calibri",
  bold: true,
  italic: false,
  underline: false,
  position: {
    x: 762,
    y: 160
  },
  size: {
    width: 0,
    height: 0
  }
}

const halloweenTemplate: Card = {
  background: background,
  size: {
    width: 1400,
    height: 933
  },
  objects: [witchHat, ghost, text],
  filter: Filters.None
}

export default halloweenTemplate;