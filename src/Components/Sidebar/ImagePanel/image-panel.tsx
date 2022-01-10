import { useRef } from "react";
import { addObject } from "../../../App/card-modifiers";
import { dispatch, getCard, nextId } from "../../../Card/card";
import Types from "../../../Types/object-types";
import Card from "../../../Types/type-card";
import MyImage from "../../../Types/type-image";
import { uploadImage, ImageInfo } from "../../../utils/file-handlers";
import styles from "./image-panel.module.css";

function ImagePanel(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => importFile(e.currentTarget.files?.item(0));
  async function importFile(file: File | null | undefined): Promise<void> {
    if (!file)
      return;

    const info: ImageInfo = await uploadImage(file);
    const id: number = nextId();
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

  return <div className={ styles.image_panel }>
    <input onChange={ onInputChange } ref={ inputRef } className={ styles.file_input } type="file" accept=".jpg,.jpeg,.png" />
    <button onClick={ () => inputRef.current?.click() }>Загрузить изображение</button>
  </div>;
}

export default ImagePanel;