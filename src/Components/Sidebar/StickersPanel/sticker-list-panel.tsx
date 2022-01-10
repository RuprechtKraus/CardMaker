import styles from './sticker-list-panel.module.css';
import { dispatch, getCard, nextId } from '../../../Card/card';
import Card from '../../../Types/type-card';
import ArtObject from '../../../Types/type-art-object';
import Figures from '../../CardElements/ArtObject/figures';
import Types from '../../../Types/object-types';
import BatIcon from './StickerListIcons/bat.png';
import StarIcon from './StickerListIcons/star.png';
import CookieIcon from './StickerListIcons/cookie.png';
import GoatIcon from './StickerListIcons/goat.png';
import SantaIcon from './StickerListIcons/santa-hat.png';
import HeartIcon from './StickerListIcons/heart.png';
import WitchIcon from './StickerListIcons/witch-hat.png';
import GhostIcon from './StickerListIcons/ghost.png';
import { addObject } from '../../../App/card-modifiers';

function StickerListPanel(): JSX.Element {
  function addSticker(stickerType: Figures) {
    const id: number = nextId();
    const card: Card = getCard();
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
    dispatch(addObject, sticker);
  }

  const stickersPerRow: number = 3;
  const stickerList = [
    <div className={ styles.sticker_wrapper } onClick={ () => addSticker(Figures.Bat) }>
      <img alt="" src={ BatIcon } className={ styles.sticker }></img>
    </div>, 
    <div className={ styles.sticker_wrapper } onClick={ () => addSticker(Figures.Star) }>
      <img alt="" src={ StarIcon } className={ styles.sticker }></img>
    </div>,
    <div className={ styles.sticker_wrapper } onClick={ () => addSticker(Figures.Cookie) }>
      <img alt="" src={ CookieIcon } className={ styles.sticker }></img>
    </div>,
    <div className={ styles.sticker_wrapper } onClick={ () => addSticker(Figures.Goat) }>
      <img alt="" src={ GoatIcon } className={ styles.sticker }></img>
    </div>,
    <div className={ styles.sticker_wrapper } onClick={ () => addSticker(Figures.SantaHat) }>
      <img alt="" src={ SantaIcon } className={ styles.sticker }></img>
    </div>,
    <div className={ styles.sticker_wrapper } onClick={ () => addSticker(Figures.Heart) }>
      <img alt="" src={ HeartIcon } className={ styles.sticker }></img>
    </div>,
    <div className={ styles.sticker_wrapper } onClick={ () => addSticker(Figures.WitchHat) }>
      <img alt="" src={ WitchIcon } className={ styles.sticker }></img>
    </div>,
    <div className={ styles.sticker_wrapper } onClick={ () => addSticker(Figures.Ghost) }>
      <img alt="" src={ GhostIcon } className={ styles.sticker }></img>
    </div>
  ];
  
  const itemsOnLastRow: number = stickerList.length % stickersPerRow;
  let blanks: number = 0;
  if (itemsOnLastRow > 0) {
    blanks = stickersPerRow - itemsOnLastRow;
  }

  for (let i = 0; i < blanks; i++) {
    stickerList.push(<div className={ styles.stickerList_filler }></div>);
  }

  return <div className={ styles.sticker_panel }>{ stickerList }</div>;
}

export default StickerListPanel;