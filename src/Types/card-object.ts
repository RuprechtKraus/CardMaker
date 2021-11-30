import Point from './point'
import Size from './size'
import Types from '../Types/object-types'

type CardObject = {
  readonly type: Types,
  readonly position: Point,
  readonly size: Size
}

export default CardObject;