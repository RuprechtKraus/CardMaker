import { createImageObject } from "../../../Store/ActionCreators/ObjectActionCreators";
import { uploadImage, ImageInfo } from "../../../functions/file-handlers";
import { getStore } from "../../../Store/store";
import { useRef } from "react";
import Card from "../../../Types/type-card";
import styles from "./image-panel.module.css";
import Point from "../../../Types/type-point";
import { centerImage } from "../../../functions/utils";

function ImagePanel(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => importFile(e.currentTarget.files?.item(0));
  async function importFile(file: File | null | undefined): Promise<void> {
    if (!file) {
      return;
    }
    const store = getStore();
    const info: ImageInfo = await uploadImage(file);
    const card: Card = store.getState().card;
    const position: Point = centerImage(card.size, { width: info.width, height: info.height });
    store.dispatch(createImageObject(info.data, position, { width: info.width, height: info.height }));
  }

  return <div className={ styles.image_panel }>
    <input onChange={ onInputChange } ref={ inputRef } className={ styles.file_input } type="file" accept=".jpg,.jpeg,.png" />
    <button onClick={ () => inputRef.current?.click() }>Загрузить изображение</button>
  </div>;
}

export default ImagePanel;