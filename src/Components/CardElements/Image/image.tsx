import { useRef } from 'react';
import useDragAndDrop from '../../../Hooks/DragAndDrop';
import Img from '../../../Types/type-image';
import styles from '../card-element.module.css';
import { setImagePosition } from '../../../App/utils';
import useSelectElement from '../../../Hooks/SelectElement'
import { height } from '@mui/system';

type ImageProps = {
  image: Img,
  selectedId: number
}

function Image(props: ImageProps) {
  const image: Img = props.image;
  const style = fetchStyle(image);
  const data: string = image.data;
  const ref = useRef<HTMLDivElement>(null);
  const id = image.id;
  const selection = props.selectedId === id ? styles.selected : "";

  useDragAndDrop(ref, id, image.position, setImagePosition);
  useSelectElement(ref, id);

  return (
    <div ref={ ref } className={ styles.card_object + " " + selection } style={ style } onDragStart={ (e) => e.preventDefault() }>
      <img src={ data } alt="" className={ styles.image } onClick={ (e) => e.stopPropagation() }></img>
    </div>);
}

function fetchStyle(image: Img) {
  const style = {
    marginLeft: image.position.x,
    marginTop: image.position.y,
    height: image.size.height,
    width: image.size.width
  }
  return style;
}

export default Image;