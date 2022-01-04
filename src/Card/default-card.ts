import Size from '../Types/type-size'
import Card from '../Types/type-card'
import Types from '../Types/object-types'
import ArtObject from '../Types/type-art-object'
import Figures from '../Components/CardElements/ArtObject/figures'
import Image from '../Types/type-image'
import MyText from '../Types/type-text'
import Filters from '../Types/type-filter'
import goat64 from './goat64'
import { bg64 } from '../App/bg'

const defaultCardSize: Size = {
  width: 600,
  height: 800,
}

let bat: ArtObject = {
  id: 1,
  type: Types.ArtObject,
  figure: Figures.Bat,
  position: {
    x: 100,
    y: 60
  },
  size: {
    height: 100,
    width: 100
  },
}

let star: ArtObject = {
  id: 2,
  type: Types.ArtObject,
  figure: Figures.Star,
  position: {
    x: 200,
    y: 30
  },
  size: {
    height: 100,
    width: 100
  },
}

let goat: Image = {
  id: 3,
  type: Types.Image,
  data: goat64,
  position: {
    x: 50,
    y: 80
  },
  size: {
    height: 320,
    width: 240
  }
}

let greeting: MyText = {
  id: 4,
  type: Types.Text,
  text: "Hello world!",
  color: "crimson",
  fontSize: 50,
  fontFamily: "Arial",
  bold: true,
  italic: true,
  underline: false,
  position: {
    x: 300,
    y: 150
  },
  size: {
    height: 0,
    width: 0
  }
}

let message: MyText = {
  id: 5,
  type: Types.Text,
  text: "Have a<br>great day!",
  color: "yellow",
  fontSize: 60,
  fontFamily: "cursive",
  bold: true,
  italic: false,
  underline: true,
  position: {
    x: 250,
    y: 500
  },
  size: {
    height: 0,
    width: 0
  }
}

const defaultCard: Card = {
  background: "data:image/jpeg;base64," + bg64,
  size: defaultCardSize,
  objects: [ goat, bat, greeting, star, message ],
  filter: Filters.None
}

const emptyCard: Card = {
  background: "",
  size: defaultCardSize,
  objects: [],
  filter: Filters.None
}

export { defaultCardSize, defaultCard, emptyCard }