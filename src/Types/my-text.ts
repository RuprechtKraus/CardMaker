import CardObject from './card-object';

type MyText = {
  readonly text: string;
  readonly fontFamily: string;
  readonly fontSize: number;
  readonly fontStyle: Typestyles;
  readonly fontWeight: number;
  readonly color: string;
} & CardObject

enum Typestyles {
  Normal = "normal",
  Italic = "italic"
}

export default MyText;
export { Typestyles };