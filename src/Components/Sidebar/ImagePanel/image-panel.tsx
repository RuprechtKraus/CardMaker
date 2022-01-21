import { useRef } from "react";
import { pushObject } from "../../../Store/ActionCreators/CardActionCreators";
import store from "../../../Store/store";
import Types from "../../../Types/object-types";
import Card from "../../../Types/type-card";
import MyImage from "../../../Types/type-image";
import Size from "../../../Types/type-size";
import { uploadImage, ImageInfo } from "../../../utils/file-handlers";
import { generateId } from "../../../utils/utils";
import styles from "./image-panel.module.css";

const shrinkCoefficient: number = 3;
const shiftCoefficient: number = 6;

function center(cardSize: Size, imageSize: Size) {
  return {
    x: cardSize.width / 2 - (imageSize.width / shiftCoefficient),
    y: cardSize.height / 2 - (imageSize.height / shiftCoefficient)
  }
}

function shrink(imageSize: Size) {
  return {
    width: imageSize.width / shrinkCoefficient,
    height: imageSize.height / shrinkCoefficient
  }
}

function ImagePanel(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => importFile(e.currentTarget.files?.item(0));
  async function importFile(file: File | null | undefined): Promise<void> {
    if (!file) {
      return;
    }
    const info: ImageInfo = await uploadImage(file);
    const id: number = generateId();
    const card: Card = store.getState().card;
    const image: MyImage = {
      id: id,
      type: Types.Image,
      data: info.data,
      position: center(card.size, { width: info.width, height: info.height }),
      size: shrink({ width: info.width, height: info.height })
    }
    store.dispatch(pushObject(image));
  }

  return <div className={ styles.image_panel }>
    <input onChange={ onInputChange } ref={ inputRef } className={ styles.file_input } type="file" accept=".jpg,.jpeg,.png" />
    <button onClick={ () => inputRef.current?.click() }>Загрузить изображение</button>
  </div>;
}

export default ImagePanel;