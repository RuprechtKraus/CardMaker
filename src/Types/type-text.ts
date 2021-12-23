import Types from './object-types';
import CardObject from './type-card-object-base';

type Text = {
  readonly text: string;
  readonly fontFamily: string;
  readonly fontSize: number;
  readonly fontStyle: Typestyles;
  readonly fontWeight: number;
  readonly color: string;
  readonly type: Types.Text;
} & CardObject

enum Typestyles {
  Normal = "normal",
  Italic = "italic"
}

export default Text;
export { Typestyles };