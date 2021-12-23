import styles from './header.module.css';
import Dropdown from '../Dropdown/dropdown';
import logo from './logo.svg';

function Header() {
  return (
    <header className={ styles.header }>
      <img src={ logo } className={ styles.logo } alt="logo" />
      <Dropdown label={ "Файл" }>
        <button>Новый файл</button>
        <button>Импорт</button>
        <button>Экспорт</button>
      </Dropdown>
      <div className={ styles.undo_arrow } title="Отменить">
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M.241 6.742l5.485-5.5a.821.821 0 0 1 1.164 0 .827.827 0 0 1 0 1.167L2.81 6.5h4.54c4.77 0 8.65 3.892 8.65 8.675a.824.824 0 0 1-.823.825.824.824 0 0 1-.823-.825c0-3.873-3.141-7.024-7.004-7.024H2.81l4.08 4.092a.827.827 0 0 1-.582 1.408.819.819 0 0 1-.582-.24L.241 7.91a.827.827 0 0 1 0-1.168" fillRule="evenodd"></path></svg>
      </div>
      <div className={ styles.redo_arrow } title="Повторить">
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M15.759 6.742l-5.485-5.5a.821.821 0 0 0-1.164 0 .827.827 0 0 0 0 1.167L13.19 6.5H8.65C3.88 6.5 0 10.392 0 15.175c0 .455.369.825.823.825.454 0 .823-.37.823-.825 0-3.873 3.141-7.024 7.004-7.024h4.54l-4.08 4.092a.827.827 0 0 0 .582 1.408c.21 0 .422-.08.582-.24l5.485-5.501a.827.827 0 0 0 0-1.168" fillRule="evenodd"></path></svg>
      </div>
    </header>
  )
}

export default Header;