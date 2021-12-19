import Figures from './figures';
import * as Stickers from './all-objects';
import ArtObj from '../../Types/type-art-object';

type ArtObjectProps = {
  artObject: ArtObj,
}

function ArtObject(props: ArtObjectProps) {
  const figure = getFigure(props);

  return figure;
}

function fetchStyle(artObject: ArtObj) {
  const style = {
    position: artObject.position,
    size: artObject.size,
  }
  return style;
}

function getFigure(props: ArtObjectProps) {
  const artObject = props.artObject;
  const style = fetchStyle(artObject);
  switch (artObject.figure) {
    case Figures.Bat:
      return <Stickers.Bat class="card-object" style={ style }></Stickers.Bat>;
    case Figures.Star:
      return <Stickers.Star class="card-object" style={ style }></Stickers.Star>;
    case Figures.Goat:
      return <Stickers.Goat class="card-object" style={ style }></Stickers.Goat>;
    case Figures.Cookie:
      return <Stickers.Cookie class="card-object" style={ style }></Stickers.Cookie>;
    default:
      return null;
  }
}

export default ArtObject;