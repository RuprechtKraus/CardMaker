import { useRef } from 'react';
import useDragAndDrop from '../../../Hooks/DragAndDrop';
import Txt from '../../../Types/type-text';
import styles from '../card-element.module.css';
import textStyles from './text.module.css';
import useSelect from '../../../Hooks/SelectElement';
import useEditText from '../../../Hooks/EditTextElement';
import { setObjectPosition } from '../../../Store/ActionCreators/CardActionCreators';

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

  useDragAndDrop(ref, id, text.position, setObjectPosition);
  useSelect(ref, id);
  useEditText(ref, id);

  return <span ref={ ref } className={ styles.card_object + " " + styles.no_blue_selection + 
  " " + textStyles.text + " " + selection } 
  style={ style } dangerouslySetInnerHTML={{ __html: text.text }}></span>;
}

function fetchStyle(text: Txt): React.CSSProperties {
  const style: React.CSSProperties = {
    marginLeft: text.position.x,
    marginTop: text.position.y,
    fontSize: text.fontSize,
    fontFamily: text.fontFamily,
    fontWeight: text.bold ? "bold" : "normal",
    fontStyle: text.italic ? "italic" : "normal",
    textDecoration: text.underline ? "underline" : "none",
    color: text.color
  } as React.CSSProperties;
  return style;
}

export default Text;