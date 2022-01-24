import BorderColorIcon from '@mui/icons-material/BorderColor';
import { ChangeEvent, useRef, useState } from "react";
import Card from '../../../Types/type-card';
import { FormatButton, FormatButtonTypes } from "./format-button";
import styles from "./text-panel.module.css";
import { createTextObject } from '../../../Store/ActionCreators/ObjectActionCreators';
import { getStore } from '../../../Store/store';
import Point from '../../../Types/type-point';

const fontFamilies: { value: string, style: string }[] = [
  { value: "Arial", style: styles.arial },
  { value: "Calibri", style: styles.calibri },
  { value: "Times New Roman", style: styles.times_new_roman },
  { value: "Comic Sans MS", style: styles.comic_sans_ms }
];
const fontSizes: number[] = [ 8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72 ];

function TextPanel(): JSX.Element {  
  const fontFamilyOptions: JSX.Element[] = fontFamilies.map((element, index) => {
    return <option className={ element.style } key={ index } value={ element.value }>{ element.value }</option>
  });

  const fontSizesOptions: JSX.Element[] = fontSizes.map((element, index) => {
    return <option key={ index } value={ element }>{ element }</option>
  });
  
  const onFontFamilyChanged = (id: number): void => {
    const style: string = fontFamilies[id].value;
    setFontFamily(style);
  }

  const onFontSizeChanged = (id: number): void => {
    setFontSize(fontSizes[id]);
  }
  
  const onInsertClick = (): void => {
    const store = getStore();
    const card: Card = store.getState().card;
    const color: string = colorPicker.current ? colorPicker.current.value : "black";
    const position: Point = {
      x: card.size.width / 2,
      y: card.size.height / 2
    };
    store.dispatch(createTextObject(fontFamily, fontSize, color, bold, italic, underline, position));
  }

  const [fontFamily, setFontFamily] = useState<string>(fontFamilies[0].value);
  const [fontSize, setFontSize] = useState<number>(fontSizes[0]);
  const [bold, setBold] = useState<boolean>(false);
  const [italic, setItalic] = useState<boolean>(false);
  const [underline, setUnderline] = useState<boolean>(false);
  const colorPicker: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  
  return (
  <div className={ styles.text_panel }>
    <div className={ styles.selection_area }>
      <select onChange={ (e: ChangeEvent) => onFontFamilyChanged((e.target as HTMLSelectElement).selectedIndex) } 
        className={ fontFamily }>{ fontFamilyOptions }</select>
      <select onChange={ (e: ChangeEvent) => onFontSizeChanged((e.target as HTMLSelectElement).selectedIndex) }>{ fontSizesOptions }</select>
    </div>
    <div className={ styles.buttons }>
      <div className={ styles.format_area }>
        <FormatButton clickHandler={ () => { bold ? setBold(false) : setBold(true); } } 
          title={ "Жирный" } pressed={ bold ? true : false } type={ FormatButtonTypes.Bold }></FormatButton>
        <FormatButton clickHandler={ () => { italic ? setItalic(false) : setItalic(true); } } 
          title={ "Курсив" } pressed={ italic ? true : false } type={ FormatButtonTypes.Italic }></FormatButton>
        <FormatButton clickHandler={ () => { underline ? setUnderline(false) : setUnderline(true); } } 
          title={ "Подчеркнутый" } pressed={ underline ? true : false } type={ FormatButtonTypes.Underline }></FormatButton>
        <input ref={ colorPicker } type={ "color" } className={ styles.color_picker }></input>
      </div>
      <button className={ styles.insert_button } onClick={ () => onInsertClick() }>
        <BorderColorIcon></BorderColorIcon>
      </button>
    </div>
  </div>);
}

export default TextPanel;