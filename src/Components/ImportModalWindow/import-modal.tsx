import styles from "./import-modal.module.css"

enum Option {
  Resize,
  Crop,
  Close
}

type ImportModalProps = {
  selectOption: (option: Option) => void
}

function ImportModal(props: ImportModalProps): JSX.Element {
  return (
    <div className={ styles.modal_wrapper }>
      <div className={ styles.modal_window }>
        <p className={ styles.text }>Размеры изображения превышают размеры холста</p>
        <div className={ styles.buttons }>
          <button className={ styles.option_button } onClick={ () => props.selectOption(Option.Resize) }>Увеличить холст</button>
          <button className={ styles.option_button } onClick={ () => props.selectOption(Option.Crop) }>Обрезать изображение</button>
          <button className={ styles.option_button } onClick={ () => props.selectOption(Option.Close) }>Отмена</button>
        </div>        
      </div>
    </div>
  )
}

export default ImportModal;
export { Option }