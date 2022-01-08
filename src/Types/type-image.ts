import Types from './object-types';
import CardObjectBase from './type-card-object-base';

type Image = {
  readonly data: string,
  readonly type: Types.Image,
} & CardObjectBase

export default Image;