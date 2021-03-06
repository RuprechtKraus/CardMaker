import { ReactElement, useEffect, useState } from 'react';
import { createReactElements } from './object-creating';
import { ImageInfo, uploadImage } from '../functions/file-handlers';
import { getEditedTextId, getSelectedId, getStore } from '../Store/store';
import { createImageObject, removeObject } from '../Store/ActionCreators/ObjectActionCreators';
import { redo, resetSelectedId, undo } from '../Store/ActionCreators/AppActionCreators';
import { setBackground, setBackgroundAndSize } from '../Store/ActionCreators/CardActionCreators';
import { saveAsImage } from '../functions/card-to-image';
import { centerImage } from '../functions/utils';
import ImageDownloadModal, { ImageExtension, Quality } from '../Components/ModalWindows/ImageDownloadModalWindow/image-download-modal';
import ImageUploadModal, { Option } from '../Components/ModalWindows/ImageUploadModalWindow/image-upload-modal';
import Header from '../Components/Header/header';
import Sidebar from '../Components/Sidebar/sidebar';
import Card from '../Types/type-card';
import styles from './app.module.css';
import Size from '../Types/type-size';
import Application from '../Types/type-application';
import Point from '../Types/type-point';

type AppProps = {
  app: Application;
}

function App(props: AppProps): JSX.Element {
  const store = getStore();
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

  const card: Card = props.app.card;
  const objects: ReactElement[] = createReactElements(card.objects);
  const cardStyle = {
    width: card.size.width,
    height: card.size.height,
    backgroundImage: "url(" + card.background + ")"
  }
  
  const [importedImage, setImportedImage] = useState<ImageInfo | null>(null);
  async function importFile(file: File): Promise<void> {
    if (!file)
      return;

    const card: Card = store.getState().card;
    const info: ImageInfo = await uploadImage(file);

    if (info.width > card.size.width || info.height > card.size.height) {
      setUploadWindow(true);
      setImportedImage(info);
    }
    else {
      const data: string = info.data;
      store.dispatch(setBackground(data));
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
          store.dispatch(setBackgroundAndSize(data, size));
        }
        break;
      case Option.Crop:
        if (image) {
          const data: string = image.data;
          store.dispatch(setBackground(data));
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
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.code === "KeyZ") {
        store.dispatch(undo());
      }
      else if (e.ctrlKey && e.code === "KeyY") {
        store.dispatch(redo());
      }
      else if (e.key === "Delete" && getEditedTextId() !== getSelectedId()) {
        const id: number | null = getSelectedId();
        if (id) {
          store.dispatch(removeObject(id));
          store.dispatch(resetSelectedId());
        }
      }
    }
    
    document.title = "CardMaker";
    document.addEventListener("keydown", onKeyDown);
    return() => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [store]);
  
  document.onpaste = async function(event: ClipboardEvent) {
    const allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"];
    const dt = event.clipboardData;
    const file = dt?.files[0];
    if (file && allowedFileTypes.includes(file.type)) {
      const info: ImageInfo = await uploadImage(file);
      const store = getStore();
      const card: Card = store.getState().card;
      const position: Point = centerImage(card.size, { width: info.width, height: info.height });
      store.dispatch(createImageObject(info.data, position, { width: info.width, height: info.height }));
    }
  }
  
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