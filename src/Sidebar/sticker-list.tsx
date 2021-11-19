import ArtObjectProps from '../ArtObjects/art-objects-props';
import * as Stickers from '../ArtObjects/art-objects';
import { dispatch, getCard } from '../Card/card';
import CardObject from '../Types/card-object';
import Card from '../Types/card';
import ArtObject from '../Types/art-object';
import Figures from '../ArtObjects/figures';
import Types from '../Types/object-types';

export function InsertSticker(card: Card, sticker: ArtObject): Card {
  let newObjects: CardObject[] = card.objects;
  newObjects.push(sticker);
  let newCard: Card = {
    background: card.background,
    size: card.size,
    objects: newObjects,
    filter: card.filter
  }
  return newCard;
}

function addSticker(stickerType: Figures) {
  const card: Card = getCard();
  const sticker: ArtObject = {
    type: Types.ArtObject,
    figure: stickerType,
    position: {
      x: card.size.width / 2 - 40,
      y: card.size.height / 2 - 40
    },
    size: {
      width: 80,
      height: 80
    }
  }
  dispatch(InsertSticker, sticker);
}

function StickerList(props: ArtObjectProps) {
  const stickersPerRow: number = 3;
  const stickerList = [
    <div className="sticker_wrapper" onClick={ () => addSticker(Figures.Bat) }>
      <Stickers.Bat { ...props }></Stickers.Bat>
    </div>, 
    <div className="sticker_wrapper" onClick={ () => addSticker(Figures.Star) }>
      <Stickers.Star { ...props }></Stickers.Star>
    </div>,
    <div className="sticker_wrapper" onClick={ () => addSticker(Figures.Cookie) }>
      <Stickers.Cookie { ...props }></Stickers.Cookie>
    </div>,
    <div className="sticker_wrapper" onClick={ () => addSticker(Figures.Goat) }>
      <Stickers.Goat { ...props }></Stickers.Goat>
    </div>
  ];
  const numberOfBlanks = stickerList.length / stickersPerRow;

  for (let i = 0; i < numberOfBlanks; i++) {
    stickerList.push(<div className="stickerList-filler" style={ {width: props.size.width} }></div>);
  }

  return (
    <>{stickerList}</>
  )
}

export default StickerList;