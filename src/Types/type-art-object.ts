import CardObject from './type-card-object';
import Figures from '../CardElements/ArtObject/figures';

type ArtObject = {
  readonly figure: Figures
} & CardObject

export default ArtObject;