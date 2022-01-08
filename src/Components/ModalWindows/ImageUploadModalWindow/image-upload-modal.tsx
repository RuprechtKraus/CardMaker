import modalStyles from "../modal-window.module.css"
import styles from "./image-upload-modal.module.css"

enum Option {
  Resize,
  Crop,
  Close
}

type ImageUploadProps = {
  selectOption: (option: Option) => void
}

function ImageUploadModal(props: ImageUploadProps): JSX.Element {
  return (
    <div className={ modalStyles.modal_wrapper }>
      <div className={ modalStyles.modal_window + " " + styles.upload_window }>
        <p className={ modalStyles.text + " " + styles.text }>Размеры изображения превышают размеры холста</p>
        <div className={ styles.buttons }>
          <button className={ modalStyles.button + " " + styles.option_button } 
          onClick={ () => props.selectOption(Option.Resize) }>Увеличить холст</button>
          <button className={ modalStyles.button + " " + styles.option_button } 
          onClick={ () => props.selectOption(Option.Crop) }>Обрезать изображение</button>
          <button className={ modalStyles.button + " " + styles.option_button } 
          onClick={ () => props.selectOption(Option.Close) }>Отмена</button>
        </div>        
      </div>
    </div>
  )
}

export default ImageUploadModal;
export { Option }