import StickerProps from "./sticker-props";

function fetchStickerStyle(props: StickerProps) {
  const position = props.style.position;
  const size = props.style.size;
  const style = {
    marginLeft: position.x,
    marginTop: position.y,
    height: size.height,
    width: size.width
  }
  return style;
}

export { fetchStickerStyle }