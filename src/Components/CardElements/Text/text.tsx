import { useRef } from 'react';
import useDragAndDrop from '../../../Hooks/DragAndDrop';
import Txt from '../../../Types/type-text';
import styles from '../card-element.module.css';
import textStyles from './text.module.css';
import { setTextPosition } from '../../../App/utils';
import useSelect from '../../../Hooks/SelectElement';
import useEditText from '../../../Hooks/EditTextElement';

type TextProps = {
  text: Txt,
  selectedId: number
}

function Text(props: TextProps) {
  const text = props.text;
  const style = fetchStyle(text);
  const ref = useRef<HTMLSpanElement>(null);
  const id = text.id;
  const selection = props.selectedId === id ? styles.selected : "";

  useDragAndDrop(ref, id, text.position, setTextPosition);
  useSelect(ref, id);
  useEditText(ref, id);

  return <span ref={ ref } className={ styles.card_object + " " + styles.no_blue_selection + 
  " " + textStyles.text + " " + selection } 
    style={ style } dangerouslySetInnerHTML={{ __html: text.text }}></span>;
}

function fetchStyle(text: Txt) {
  const style = {
    marginLeft: text.position.x,
    marginTop: text.position.y,
    fontSize: text.fontSize,
    fontStyle: text.fontStyle,
    fontFamily: text.fontFamily,
    fontWeight: text.fontWeight,
    color: text.color
  };
  return style;
}

export default Text;