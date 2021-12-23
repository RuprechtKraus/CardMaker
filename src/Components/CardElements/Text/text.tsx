import { useRef } from 'react';
import useDragAndDrop from '../../../Hooks/DragAndDrop';
import Txt from '../../../Types/type-text';
import styles from '../card-element.module.css';
import { setTextPosition } from '../../../App/utils';

type TextProps = {
  text: Txt
}

function Text(props: TextProps) {
  const text = props.text;
  const style = fetchStyle(text);
  const ref = useRef<HTMLSpanElement>(null);
  const id = text.id;

  useDragAndDrop(ref, id, text.position, setTextPosition);

  return <span ref={ ref } className={ styles.card_object + " " + styles.no_blue_selection } style={ style }>{ text.text }</span>;
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