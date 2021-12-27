import { useRef } from "react";
import { addObject } from "../../../App/utils";
import { dispatch, getCard, getNextId } from "../../../Card/card";
import Types from "../../../Types/object-types";
import Card from "../../../Types/type-card";
import MyImage from "../../../Types/type-image";
import { fileToImage, ImageInfo } from "../../../utils/file-handlers";
import styles from "./image-panel.module.css";

function ImagePanel(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  async function fileUploadHandler(file: File | null | undefined) {
    if (file !== null && file !== undefined) {
      const info: ImageInfo = await fileToImage(file);
      const id: number = getNextId();
      const card: Card = getCard();
      const image: MyImage = {
        id: id,
        type: Types.Image,
        data: info.data,
        position: {
          x: card.size.width / 2 - (info.height / 6),
          y: card.size.height / 2 - (info.height / 6)
        },
        size: {
          height: info.height / 3,
          width: info.width / 3
        }
      }
      dispatch(addObject, image);
    }
  }

  return <div className={ styles.image_panel }>
    <input onChange={ (e) => fileUploadHandler(e.currentTarget.files?.item(0)) } ref={ inputRef } className={ styles.file_input } type="file" accept=".jpg,.jpeg,.png" />
    <button onClick={ () => inputRef.current?.click() }>Загрузить изображение</button>
  </div>;
}

export default ImagePanel;