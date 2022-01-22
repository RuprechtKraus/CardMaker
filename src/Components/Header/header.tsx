import { exportToJSON, importFromJSON } from '../../functions/json';
import { getCard, getSelectedId, getStore } from '../../Store/store';
import { moveObjectDown, moveObjectUp, removeObject } from '../../Store/ActionCreators/ObjectActionCreators';
import { newCard, redo, resetSelectedId, undo } from '../../Store/ActionCreators/AppActionCreators';
import styles from './header.module.css';
import Dropdown from '../Dropdown/dropdown';
import logo from './logo.png';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DeleteIcon from '@mui/icons-material/Delete';

type HeaderProps = {
  imageUpload: () => void,
  imageDownload: () => void
}

function Header(props: HeaderProps): JSX.Element {
  const store = getStore();
  const jsonInput: HTMLInputElement = document.createElement("input");
  jsonInput.type = "file";
  jsonInput.accept = ".json";
  jsonInput.onchange = async function(e: Event) {
    const result = window.confirm("Это действие удалит все несохраненные данные");
    const json: File | null | undefined = (e.target as HTMLInputElement).files?.item(0);
    if (json && result) {
      await importFromJSON(json);
    }
  }

  const createNewCard = (): void => {
    const result = window.confirm("Это действие удалит все несохраненные данные");
    if (result) {
      store.dispatch(newCard());
    }
  }

  const onMoveUpClick = (): void => {
    const id: number | null = getSelectedId();
    if (id) {
      store.dispatch(moveObjectUp(id));
    }
  }

  const onMoveDownClick = (): void => {
    const id: number | null = getSelectedId();
    if (id) {
      store.dispatch(moveObjectDown(id));
    }
  }

  const onDeleteClick = (): void => {
    const id: number | null = getSelectedId();
    if (id) {
      store.dispatch(removeObject(id));
      store.dispatch(resetSelectedId());
    }
  }
  
  const onImportJSONClick = (): void => {
    jsonInput.click();
  }
  
  return (
    <header className={ styles.header }>
      <img src={ logo }  className={ styles.logo } alt="logo" />
      <div className={ styles.dropdown }>
        <Dropdown label={ "Файл" }>
          <button onClick={ createNewCard }>Новый файл</button>
          <button onClick={ props.imageUpload }>Импорт</button>
          <button onClick={ props.imageDownload }>Сохранить как</button>
          <button onClick={ () => exportToJSON(getCard()) }>Экспорт в JSON</button>
          <button onClick={ onImportJSONClick }>Импорт из JSON</button>
        </Dropdown>
      </div>
      <button title="Отменить" className={ styles.undo_arrow + " " + styles.icon } onClick={ () => store.dispatch(undo()) }>
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M.241 6.742l5.485-5.5a.821.821 0 0 1 1.164 0 .827.827 0 0 1 0 1.167L2.81 6.5h4.54c4.77 0 8.65 3.892 8.65 8.675a.824.824 0 0 1-.823.825.824.824 0 0 1-.823-.825c0-3.873-3.141-7.024-7.004-7.024H2.81l4.08 4.092a.827.827 0 0 1-.582 1.408.819.819 0 0 1-.582-.24L.241 7.91a.827.827 0 0 1 0-1.168" fillRule="evenodd"></path></svg>
      </button>
      <button title="Повторить" className={ styles.redo_arrow + " " + styles.icon } onClick={ () => store.dispatch(redo()) }>
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M15.759 6.742l-5.485-5.5a.821.821 0 0 0-1.164 0 .827.827 0 0 0 0 1.167L13.19 6.5H8.65C3.88 6.5 0 10.392 0 15.175c0 .455.369.825.823.825.454 0 .823-.37.823-.825 0-3.873 3.141-7.024 7.004-7.024h4.54l-4.08 4.092a.827.827 0 0 0 .582 1.408c.21 0 .422-.08.582-.24l5.485-5.501a.827.827 0 0 0 0-1.168" fillRule="evenodd"></path></svg>
      </button>
      <div className={ styles.layer_buttons }>
        <button className={ styles.layer_button } title="На слой выше" onClick={ onMoveUpClick }>
          <ArrowUpwardIcon className={ styles.icon } sx={{ fill: "hsla(0, 0%, 100%, .8)" }}></ArrowUpwardIcon>
        </button>
        <button className={ styles.layer_button } title="На слой ниже" onClick={ onMoveDownClick }>
          <ArrowDownwardIcon className={ styles.icon } sx={{ fill: "hsla(0, 0%, 100%, .8)" }}></ArrowDownwardIcon>
        </button>
      </div>
      <button className={ styles.delete_button } title="Удалить" onClick={ onDeleteClick }>
        <DeleteIcon className={ styles.icon } sx={{ fill: "hsla(0, 0%, 100%, .8)" }}></DeleteIcon>
      </button>
    </header>
  )
}

export default Header;