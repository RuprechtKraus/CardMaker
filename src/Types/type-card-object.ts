import Point from './type-point'
import Size from './type-size'
import Types from './object-types'

type CardObject = {
  readonly id: number,
  readonly type: Types,
  readonly position: Point,
  readonly size: Size
}

export default CardObject;