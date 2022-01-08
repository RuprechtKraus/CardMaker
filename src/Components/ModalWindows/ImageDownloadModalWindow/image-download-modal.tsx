import { useRef, useState } from "react";
import modalStyles from "../modal-window.module.css"
import styles from "./image-download-modal.module.css";

export type Quality = "high" | "medium" | "low";
export type ImageExtension = "jpeg" | "png";

type ImageDownloadProps = {
  saveImage: (filename: string, extension: ImageExtension, quality: Quality) => void,
  closeWindow: () => void
}

function ImageDownloadModal(props: ImageDownloadProps): JSX.Element {
  const [extension, setExtension] = useState<ImageExtension | null>(null);
  const jpgSelected = extension === "jpeg" ? styles.selected : "";
  const pngSelected = extension === "png" ? styles.selected : "";
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);
  const selectRef: React.RefObject<HTMLSelectElement> = useRef(null);

  const onSaveClick = () => {
    let _name: string = "NewCard";
    let _extension: ImageExtension = "jpeg";
    let _quality: Quality = "high";
    
    if (inputRef.current?.value.trim()) {
      _name = inputRef.current?.value.trim();
    }

    if (extension) {
      _extension = extension;
    }

    if (selectRef.current?.value) {
      _quality = selectRef.current?.value as Quality;
    }

    props.saveImage(_name, _extension, _quality);
  }

  return (
    <div className={ modalStyles.modal_wrapper }>
      <div className={ modalStyles.modal_window + " " + styles.download_window }>
        <p className={ modalStyles.text }>Сохранить изображение</p>
        <div className={ styles.filename_area }>
          <span className={ styles.label }>Имя файла</span>
          <input ref={ inputRef } className={ styles.input } type={ "text" }></input>
        </div>
        <div className={ styles.options }>
          <button className={ styles.extension_button + " " + jpgSelected} 
          onClick={ () => setExtension("jpeg")}>JPEG</button>
          <button className={ styles.extension_button + " " + pngSelected} 
          onClick={ () => setExtension("png")}>PNG</button>
          <select ref={ selectRef } className={ styles.quality_select }>
            <option value={ "high" }>Высокое</option>
            <option value={ "medium" }>Среднее</option>
            <option value={ "low" }>Низкое</option>
          </select>
        </div>
        <div className={ styles.buttons }>
          <button className={  modalStyles.button + " " + styles.save_button } 
          onClick={ onSaveClick }>Сохранить</button>
          <button className={ styles.cancel_button }
          onClick={ props.closeWindow }>Отмена</button>
        </div>
      </div>
    </div>
  );
}

export default ImageDownloadModal;