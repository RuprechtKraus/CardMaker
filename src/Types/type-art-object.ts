import CardObjectBase from './type-card-object-base';
import Figures from '../Components/CardElements/ArtObject/figures';
import Types from './object-types';

type ArtObject = {
  readonly figure: Figures,
  readonly type: Types.ArtObject,
} & CardObjectBase

export default ArtObject;