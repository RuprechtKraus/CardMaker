import CardObject from './card-object';
import Figures from '../ArtObjects/figures'

type ArtObject = {
  readonly figure: Figures;
} & CardObject

export default ArtObject;