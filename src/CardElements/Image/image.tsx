import Img from '../../Types/type-image';

type ImageProps = {
  image: Img
}

function Image(props: ImageProps) {
  const image: Img = props.image;
  const style = fetchStyle(image);
  const data: string = "data:image/jpeg;base64," + image.data;

  return <img className="card-object" src={ data } alt="" style={ style }></img>;
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