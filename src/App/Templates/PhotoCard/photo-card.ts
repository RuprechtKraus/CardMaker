import Types from "../../../Types/object-types";
import Card from "../../../Types/type-card";
import Filters from "../../../Types/type-filter";
import Image from "../../../Types/type-image";
import templateCard from "./template-card.png";
import imageBeautiful from "./beautiful.png";
import ArtObject from "../../../Types/type-art-object";
import Figures from "../../../Components/CardElements/ArtObject/figures";

const photo: Image = {
  id: 1,
  type: Types.Image,
  data: templateCard,
  position: {
    x: 0,
    y: 0
  },
  size: {
    width: 736,
    height: 1308
  }
}

const beautiful: Image = {
  id: 2,
  type: Types.Image,
  data: imageBeautiful,
  position: {
    x: 290,
    y: 700
  },
  size: {
    width: 400,
    height: 400
  }
}

const heart: ArtObject = {
  id: 3,
  type: Types.ArtObject,
  figure: Figures.Heart,
  position: {
    x: 65,
    y: 355
  },
  size: {
    width: 164,
    height: 164
  }
}

const photoTemplate: Card = {
  background: "",
  size: {
    width: 736,
    height: 1308
  },
  objects: [photo, beautiful, heart],
  filter: Filters.None
}

export default photoTemplate;