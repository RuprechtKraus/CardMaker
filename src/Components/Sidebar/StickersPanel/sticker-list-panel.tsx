import styles from './sticker-list-panel.module.css';
import Card from '../../../Types/type-card';
import Figures from '../../CardElements/ArtObject/figures';
import BatIcon from './StickerListIcons/bat.png';
import StarIcon from './StickerListIcons/star.png';
import CookieIcon from './StickerListIcons/cookie.png';
import GoatIcon from './StickerListIcons/goat.png';
import SantaIcon from './StickerListIcons/santa-hat.png';
import HeartIcon from './StickerListIcons/heart.png';
import WitchIcon from './StickerListIcons/witch-hat.png';
import GhostIcon from './StickerListIcons/ghost.png';
import Point from '../../../Types/type-point';
import { createArtObject } from '../../../Store/ActionCreators/ObjectActionCreators';
import { getStore } from '../../../Store/store';
import { defaultStickerHeight, defaultStickerWidth } from '../../../Constants/object-constants';

function StickerListPanel(): JSX.Element {
  function addSticker(stickerType: Figures) {
    const store = getStore();
    const card: Card = store.getState().card;
    const position: Point = {
      x: card.size.width / 2 - defaultStickerWidth / 2,
      y: card.size.height / 2 - defaultStickerHeight / 2
    }
    store.dispatch(createArtObject(stickerType, position));
  }

  const stickersPerRow: number = 3;
  const stickerList = [
    <div key={ "Bat" } className={ styles.sticker_wrapper } onClick={ () => addSticker(Figures.Bat) }>
      <img alt="" src={ BatIcon } className={ styles.sticker }></img>
    </div>, 
    <div key={ "Star" } className={ styles.sticker_wrapper } onClick={ () => addSticker(Figures.Star) }>
      <img alt="" src={ StarIcon } className={ styles.sticker }></img>
    </div>,
    <div key={ "Cookie" } className={ styles.sticker_wrapper } onClick={ () => addSticker(Figures.Cookie) }>
      <img alt="" src={ CookieIcon } className={ styles.sticker }></img>
    </div>,
    <div key={ "Goat" } className={ styles.sticker_wrapper } onClick={ () => addSticker(Figures.Goat) }>
      <img alt="" src={ GoatIcon } className={ styles.sticker }></img>
    </div>,
    <div key={ "SantaHat" } className={ styles.sticker_wrapper } onClick={ () => addSticker(Figures.SantaHat) }>
      <img alt="" src={ SantaIcon } className={ styles.sticker }></img>
    </div>,
    <div key={ "Heart" } className={ styles.sticker_wrapper } onClick={ () => addSticker(Figures.Heart) }>
      <img alt="" src={ HeartIcon } className={ styles.sticker }></img>
    </div>,
    <div key={ "Witch" } className={ styles.sticker_wrapper } onClick={ () => addSticker(Figures.WitchHat) }>
      <img alt="" src={ WitchIcon } className={ styles.sticker }></img>
    </div>,
    <div key={ "Ghost" } className={ styles.sticker_wrapper } onClick={ () => addSticker(Figures.Ghost) }>
      <img alt="" src={ GhostIcon } className={ styles.sticker }></img>
    </div>
  ];
  
  const itemsOnLastRow: number = stickerList.length % stickersPerRow;
  let blanks: number = 0;
  if (itemsOnLastRow > 0) {
    blanks = stickersPerRow - itemsOnLastRow;
  }

  for (let i = 1; i <= blanks; i++) {
    stickerList.push(<div key={ "blank_" + i } className={ styles.stickerList_filler }></div>);
  }

  return <div className={ styles.sticker_panel }>{ stickerList }</div>;
}

export default StickerListPanel;