import Txt from '../../Types/type-text';

type TextProps = {
  text: Txt
}

function Text(props: TextProps) {
  const text = props.text;
  const style = fetchStyle(text);

  return <span className="card-object" style={ style }>{ text.text }</span>;
}

function fetchStyle(text: Txt) {
  const style = {
    marginLeft: text.position.x,
    marginTop: text.position.y,
    width: text.size.width,
    fontSize: text.fontSize,
    fontStyle: text.fontStyle,
    fontFamily: text.fontFamily,
    fontWeight: text.fontWeight,
    color: text.color
  };
  return style;
}

export default Text;