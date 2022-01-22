import styles from './sticker-list-panel.module.css';
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
import { generateId } from '../../../functions/utils';
import { pushObject } from '../../../Store/ActionCreators/ObjectActionCreators';
import { getStore } from '../../../Store/store';

const defaultStickerWidth: number = 80;
const defaultStickerHeight: number = 80;

function StickerListPanel(): JSX.Element {
  function addSticker(stickerType: Figures) {
    const store = getStore();
    const id: number = generateId();
    const card: Card = store.getState().card;
    const sticker: ArtObject = {
      id: id,
      type: Types.ArtObject,
      figure: stickerType,
      position: {
        x: card.size.width / 2 - defaultStickerWidth / 2,
        y: card.size.height / 2 - defaultStickerHeight / 2
      },
      size: {
        width: defaultStickerWidth,
        height: defaultStickerHeight
      }
    }

    store.dispatch(pushObject(sticker));
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