import Types from './object-types';
import CardObject from './type-card-object-base';

type Text = {
  readonly text: string;
  readonly fontFamily: string;
  readonly fontSize: number;
  readonly bold: boolean;
  readonly italic: boolean;
  readonly underline: boolean;
  readonly color: string;
  readonly type: Types.Text;
} & CardObject

export default Text;