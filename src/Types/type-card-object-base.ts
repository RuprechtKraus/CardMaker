import Point from './type-point'
import Size from './type-size'

type CardObjectBase = {
  readonly id: number,
  readonly position: Point,
  readonly size: Size
}

export default CardObjectBase;