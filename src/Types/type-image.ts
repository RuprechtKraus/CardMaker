import Types from './object-types';
import CardObject from './type-card-object-base';

type Image = {
  readonly data: string,
  readonly type: Types.Image,
} & CardObject

export default Image;