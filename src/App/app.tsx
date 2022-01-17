import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { createReactElements } from '../utils/object-casting';
import Header from '../Components/Header/header';
import Sidebar from '../Components/Sidebar/sidebar';
import Card from '../Types/type-card';
import styles from './app.module.css';
import { redo, undo } from './history';
import ImageUploadModal, { Option } from '../Components/ModalWindows/ImageUploadModalWindow/image-upload-modal';
import { dispatch, getCard, getEditedTextId, getSelectedId } from '../Card/card';
import { ImageInfo, uploadImage } from '../utils/file-handlers';
import { deleteObject, setBackground } from './card-modifiers';
import Size from '../Types/type-size';
import ImageDownloadModal, { ImageExtension, Quality } from '../Components/ModalWindows/ImageDownloadModalWindow/image-download-modal';
import { saveAsImage } from '../utils/card-to-image';

type AppProps = {
  card: Card;
}

function App(props: AppProps): JSX.Element {
  const [uploadWindow, setUploadWindow] = useState<boolean>(false);
  const [downloadWindow, setDownloadWindow] = useState<boolean>(false);
  const imageInput: HTMLInputElement = document.createElement("input");
  imageInput.type = "file";
  imageInput.accept = ".jpg,.jpeg,.png";
  imageInput.onchange = function(e: Event) {
    const file: File | null | undefined = (e.target as HTMLInputElement).files?.item(0);
    if (file) {
      importFile(file);
    }
  }

  const card: Card = props.card;
  const objects: ReactElement[] = createReactElements(card.objects);
  const cardStyle = {
    width: card.size.width,
    height: card.size.height,
    backgroundImage: "url(" + card.background + ")"
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.code === "KeyZ") {
      undo();
    }
    else if (e.ctrlKey && e.code === "KeyY") {
      redo();
    }
    else if (e.key === "Delete" && getEditedTextId() !== getSelectedId()) {
      const id: number = getSelectedId();
      if (id > 0) {
        dispatch(deleteObject, id);
      }
    }
  }
  
  const [importedImage, setImportedImage] = useState<ImageInfo | null>(null);
  async function importFile(file: File): Promise<void> {
    if (!file)
      return;

    const card: Card = getCard();
    const info: ImageInfo = await uploadImage(file);

    if (info.width > card.size.width || info.height > card.size.height) {
      setUploadWindow(true);
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

    setUploadWindow(false);
    setImportedImage(null);
  }
  
  const saveImage = async (name: string, extension: ImageExtension, quality: Quality) => {
    try {
      await saveAsImage(name, extension, quality);
    }
    catch (error: any) {
      alert("Whoops! Something went wrong");
    }
    setDownloadWindow(false);
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
      <Header imageUpload={ () => imageInput.click() } 
      imageDownload={ () => setDownloadWindow(true) }></Header>
      <div className={ styles.container }>
        <Sidebar></Sidebar>
        <div id="work_area" className={ styles.work_area }>
          <div className={ styles.card_wrapper }>
            <div id="card" style={ cardStyle } className={ styles.card }>
              { objects }
            </div>
          </div>
        </div>
      </div>
      { uploadWindow && <ImageUploadModal selectOption={ getOption }></ImageUploadModal> }
      { downloadWindow && <ImageDownloadModal saveImage={ saveImage } 
      closeWindow={ () => setDownloadWindow(false) }></ImageDownloadModal> }
    </div>)
}

export default App;