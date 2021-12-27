import Figures from './figures';
import * as Stickers from './all-objects';
import ArtObj from '../../../Types/type-art-object';
import styles from '../card-element.module.css';
import useDragAndDrop from '../../../Hooks/DragAndDrop';
import { setArtObjectPosition, setObjectSize } from '../../../App/utils';
import React, { useRef } from 'react';
import CardObject from '../../../Types/type-card-object';
import useSelect from '../../../Hooks/SelectElement';
import useResize from '../../../Hooks/ResizeElement';

type ArtObjectProps = {
  artObject: ArtObj,
  selectedId: number
}

function ArtObject(props: ArtObjectProps): JSX.Element {
  const object: CardObject = props.artObject;
  const figure: JSX.Element | null = getFigure(props);
  const id: number = object.id;
  const style = fetchStyle(object);
  const ref: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const dotRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const selection = props.selectedId === id ? styles.selected : "";

  useResize(ref, dotRef, id, object.size, setObjectSize);
  useDragAndDrop(ref, id, object.position, setArtObjectPosition);
  useSelect(ref, id);

  return ( 
    <div ref={ ref } className={ styles.card_object + " " + selection } style={ style } >
      { figure }
      <div ref={ dotRef } className={ styles.dot }></div>
    </div>
  );
}

function fetchStyle(artObject: ArtObj): React.CSSProperties {
  const style: React.CSSProperties = {
    marginLeft: artObject.position.x,
    marginTop: artObject.position.y,
    height: artObject.size.height,
    width: artObject.size.width
  }
  return style;
}

function getFigure(props: ArtObjectProps): JSX.Element | null {
  const artObject = props.artObject;
  switch (artObject.figure) {
    case Figures.Bat:
      return <Stickers.Bat></Stickers.Bat>;
    case Figures.Star:
      return <Stickers.Star></Stickers.Star>;
    case Figures.Goat:
      return <Stickers.Goat></Stickers.Goat>;
    case Figures.Cookie:
      return <Stickers.Cookie></Stickers.Cookie>;
    default:
      return null;
  }
}

export default ArtObject;