import { dispatch, getCard, getNextObjectId, incrementNextObjectId } from '../Card/card';
import CardObject from '../Types/type-card-object';
import Card from '../Types/type-card';
import ArtObject from '../Types/type-art-object';
import Figures from '../CardElements/ArtObject/figures';
import Types from '../Types/object-types';
import BatIcon from './StickerListIcons/bat.png'
import StarIcon from './StickerListIcons/star.png'
import CookieIcon from './StickerListIcons/cookie.png'
import GoatIcon from './StickerListIcons/goat.png'

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
  const id = getNextObjectId();
  incrementNextObjectId();
  const sticker: ArtObject = {
    id: id,
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

function StickerList() {
  const stickersPerRow: number = 3;
  const stickerList = [
    <div className="sticker_wrapper" onClick={ () => addSticker(Figures.Bat) }>
      <img alt="" src={ BatIcon } className="sticker"></img>
    </div>, 
    <div className="sticker_wrapper" onClick={ () => addSticker(Figures.Star) }>
      <img alt="" src={ StarIcon } className="sticker"></img>
    </div>,
    <div className="sticker_wrapper" onClick={ () => addSticker(Figures.Cookie) }>
      <img alt="" src={ CookieIcon } className="sticker"></img>
    </div>,
    <div className="sticker_wrapper" onClick={ () => addSticker(Figures.Goat) }>
      <img alt="" src={ GoatIcon } className="sticker"></img>
    </div>
  ];
  const numberOfBlanks = stickerList.length / stickersPerRow;

  for (let i = 0; i < numberOfBlanks; i++) {
    stickerList.push(<div className="stickerList-filler"></div>);
  }

  return (
    <>{stickerList}</>
  )
}

export default StickerList;