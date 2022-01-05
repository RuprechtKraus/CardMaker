import { ReactElement, useEffect, useRef, useState } from 'react';
import { createReactElements } from '../utils/object-casting';
import Header from '../Components/Header/header';
import Sidebar from '../Components/Sidebar/sidebar';
import Card from '../Types/type-card';
import styles from './app.module.css';
import { redo, undo } from './history';
import ImportModal, { Option } from '../Components/ImportModalWindow/import-modal';
import { dispatch, getCard } from '../Card/card';
import { ImageInfo, uploadImage } from '../utils/file-handlers';
import { setBackground } from './card-modifiers';
import Size from '../Types/type-size';

type AppProps = {
  card: Card;
}

function App(props: AppProps): JSX.Element {
  const [modalWindow, setModalWindow] = useState<boolean>(false);
  const imageInput: React.Ref<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const card: Card = props.card;
  const objects: ReactElement[] = createReactElements(card.objects);
  const cardStyle = {
    width: card.size.width,
    height: card.size.height,
    backgroundImage: "url(" + card.background + ")"
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.code === "KeyZ")
      undo();
    else if (e.ctrlKey && e.code === "KeyY")
      redo();
  }
  
  const [importedImage, setImportedImage] = useState<ImageInfo | null>(null);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => importFile(e.currentTarget.files?.item(0));
  async function importFile(file: File | null | undefined): Promise<void> {
    if (!file)
      return;

    const card: Card = getCard();
    const info: ImageInfo = await uploadImage(file);

    if (info.width > card.size.width || info.height > card.size.height) {
      setModalWindow(true);
      setImportedImage(info);
    }
    else {
      const data: string = info.data;
      const size: Size = getCard().size;
      dispatch(setBackground, { data, size });
    }
  }

  const getOption = (option: Option): void => {
    const image = importedImage;
    
    switch(option) {
      case Option.Resize:
        if (image) {
          const data: string = image.data;
          const size: Size = { 
            height: image.height,
            width: image.width
          };
          dispatch(setBackground, { data, size });
        }
        break;
      case Option.Crop:
        if (image) {
          const data: string = image.data;
          dispatch(setBackground, { data });
        }
        break;
      case Option.Close:
        break;
    }

    setModalWindow(false);
    setImportedImage(null);
  }
  
  useEffect(() => {
    document.title = "CardMaker";
    document.addEventListener("keydown", onKeyDown);
    return() => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  
  return (
    <div className={ styles.app }>
      <Header imageImport={ () => imageInput.current?.click() }></Header>
      <div className={ styles.container }>
        <Sidebar></Sidebar>
        <div className={ styles.work_area }>
          <div className={ styles.card_wrapper }>
            <div style={ cardStyle } className={ styles.card }>
              { objects }
            </div>
          </div>
        </div>
      </div>
      <input ref={ imageInput } onChange={ onInputChange } className={ styles.file_input } type="file" accept=".jpg,.jpeg,.png" />
      { modalWindow && <ImportModal selectOption={ getOption }></ImportModal> }
    </div>)
}

export default App;