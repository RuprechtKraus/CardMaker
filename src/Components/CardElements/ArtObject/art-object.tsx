import Figures from './figures';
import * as Stickers from './all-objects';
import ArtObj from '../../../Types/type-art-object';
import styles from '../card-element.module.css';
import useDragAndDrop from '../../../Hooks/DragAndDrop';
import { setArtObjectPosition } from '../../../App/utils';
import React, { useRef } from 'react';
import CardObject from '../../../Types/type-card-object';
import useSelectElement from '../../../Hooks/SelectElement';

type ArtObjectProps = {
  artObject: ArtObj,
  selectedId: number
}

function ArtObject(props: ArtObjectProps): JSX.Element {
  const object: CardObject = props.artObject;
  const figure: JSX.Element | null = getFigure(props);
  const style = fetchStyle(object);
  const ref: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const id: number = object.id;
  const selection = props.selectedId === id ? styles.selected : "";

  useDragAndDrop(ref, id, object.position, setArtObjectPosition);
  useSelectElement(ref, id);

  return <div ref={ ref } className={ styles.card_object + " " + selection } style={ style }>
      <div className={ styles.dot + " " + styles.dot_top_left}></div>
      <div className={ styles.dot + " " + styles.dot_top_right}></div>
      { figure }
      <div className={ styles.dot + " " + styles.dot_bottom_left}></div>
      <div className={ styles.dot + " " + styles.dot_bottom_right}></div>
    </div>;
}

function fetchStyle(artObject: ArtObj) {
  const style = {
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