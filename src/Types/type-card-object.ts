import ArtObject from "./type-art-object";
import Image from "./type-image";
import Text  from "./type-text";

type CardObject = ArtObject | Image | Text;

export default CardObject;