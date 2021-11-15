import Image from './image'
import Size from './size'
import Filter from './filter'
import CardObject from './card-object'

type Card = {
  readonly background: Image;
  readonly size: Size;
  readonly objects: CardObject[];
  readonly filter: Filter;
}

export default Card;