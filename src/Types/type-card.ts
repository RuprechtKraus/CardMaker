import Image from './type-image'
import Size from './type-size'
import Filter from './type-filter'
import CardObject from './type-card-object'

type Card = {
  readonly background: Image;
  readonly size: Size;
  readonly objects: CardObject[];
  readonly filter: Filter;
}

export default Card;