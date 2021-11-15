import Size from '../Types/size'
import Card from '../Types/card'
import Types from '../Types/object-types'
import ArtObject from '../Types/art-object'
import Figures from '../ArtObjects/figures'
import Image from '../Types/image'
import MyText, { Typestyles } from '../Types/my-text'
import Filters from '../Types/filter'
import goat64 from './goat64'

const defaultCardSize: Size = {
  width: 600,
  height: 800,
}

let bat: ArtObject = {
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
  type: Types.Text,
  text: "Hello world!",
  color: "crimson",
  fontSize: 50,
  fontFamily: "Arial",
  fontStyle: Typestyles.Italic,
  fontWeight: 900,
  position: {
    x: 350,
    y: 100
  },
  size: {
    height: 0,
    width: 200
  }
}

let message: MyText = {
  type: Types.Text,
  text: "Have a great day!",
  color: "yellow",
  fontSize: 60,
  fontFamily: "cursive",
  fontStyle: Typestyles.Normal,
  fontWeight: 600,
  position: {
    x: 280,
    y: 500
  },
  size: {
    height: 0,
    width: 300
  }
}

const defaultCard: Card = {
  background: {
    type: Types.Image,
    data: "",
    size: defaultCardSize,
    position: {
      x: 0,
      y: 0,
    }
  },
  size: defaultCardSize,
  objects: [ goat, bat, greeting, star, message ],
  filter: Filters.None
}

export { defaultCardSize, defaultCard }