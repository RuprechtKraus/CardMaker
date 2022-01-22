import { useRef } from 'react';
import useDragAndDrop from '../../../Hooks/DragAndDrop';
import Img from '../../../Types/type-image';
import styles from '../card-element.module.css';
import imageStyles from './image.module.css';
import useSelect from '../../../Hooks/SelectElement'
import useResize from '../../../Hooks/ResizeElement';

type ImageProps = {
  image: Img,
  selectedId: number | null
}

function Image(props: ImageProps) {
  const image: Img = props.image;
  const id: number = image.id;
  const style = fetchStyle(image);
  const data: string = image.data;
  const ref: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const dotRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const selection = props.selectedId === id ? styles.selected : "";

  useResize(ref, dotRef, id, image.size);
  useDragAndDrop(ref, id, image.position);
  useSelect(ref, id);

  return (
    <div ref={ ref } className={ styles.card_object + " " + selection } style={ style } onDragStart={ (e) => e.preventDefault() }>
      <img src={ data } alt="" className={ imageStyles.image + " " + styles.no_blue_selection } onClick={ (e) => e.stopPropagation() }></img>
      <div ref={ dotRef } className={ styles.dot }></div>
    </div>);
}

function fetchStyle(image: Img): React.CSSProperties {
  const style = {
    marginLeft: image.position.x,
    marginTop: image.position.y,
    height: image.size.height,
    width: image.size.width
  };
  return style;
}

export default Image;