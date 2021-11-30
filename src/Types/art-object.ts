import CardObject from './card-object';
import Figures from '../ArtObjects/figures'

type ArtObject = {
  readonly id: number,
  readonly figure: Figures
} & CardObject

export default ArtObject;