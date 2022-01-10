import Figures from "../../../Components/CardElements/ArtObject/figures";
import Types from "../../../Types/object-types";
import ArtObject from "../../../Types/type-art-object";
import Card from "../../../Types/type-card";
import Filters from "../../../Types/type-filter";
import Image from "../../../Types/type-image";
import Text from "../../../Types/type-text";
import background from "./avatar_template.jpg";
import snow from "./snow_effect.png";

const snowEffect: Image = {
  id: 1,
  type: Types.Image,
  data: snow,
  position: {
    x: 0,
    y: 0
  },
  size: {
    width: 600,
    height: 600
  }
}

const hat: ArtObject = {
  id: 2,
  type: Types.ArtObject,
  figure: Figures.SantaHat,
  position: {
    x: 182,
    y: -67
  },
  size: {
    width: 238,
    height: 238
  }
}

const text: Text = {
  id: 3,
  type: Types.Text,
  text: "С Новым годом!",
  color: "rgb(17, 126, 247)",
  fontFamily: "Arial",
  fontSize: 72,
  bold: true,
  italic: false,
  underline: false,
  position: {
    x: 7,
    y: 504
  },
  size: {
    width: 0,
    height: 0
  }
}

const winterTempalte: Card = {
  background: background,
  size: {
    width: 600,
    height: 600
  },
  objects: [hat, snowEffect, text],
  filter: Filters.None
}

export default winterTempalte;