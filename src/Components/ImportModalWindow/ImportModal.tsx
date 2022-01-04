import styles from "./ImportModal.module.css"

type ImportModalProps = {
  closeModal: () => void
}

function ImportModal(props: ImportModalProps): JSX.Element {

  return (
    <div className={ styles.modal_wrapper }>
      <div className={ styles.modal_window }>
        <p className={ styles.text }>Размеры изображения превышают размеры холста</p>
        <div className={ styles.buttons }>
          <button className={ styles.option_button }>Увеличить холст</button>
          <button className={ styles.option_button }>Обрезать изображение</button>
          <button className={ styles.option_button } onClick={ () => props.closeModal() }>Отмена</button>
        </div>        
      </div>
    </div>
  )
}

export default ImportModal;