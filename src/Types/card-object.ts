import Point from './point'
import Size from './size'
import Types from '../Types/object-types'

type CardObject = {
  type: Types,
  position: Point,
  size: Size
}

export default CardObject;