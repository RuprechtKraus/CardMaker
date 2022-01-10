import BorderColorIcon from '@mui/icons-material/BorderColor';
import { ChangeEvent, useRef, useState } from "react";
import { dispatch, getCard, nextId } from '../../../Card/card';
import { addObject } from "../../../App/card-modifiers"
import Types from '../../../Types/object-types';
import Card from '../../../Types/type-card';
import Text from '../../../Types/type-text';
import { FormatButton, FormatButtonTypes } from "./format-button";
import styles from "./text-panel.module.css";

const fontFamilies: { value: string, style: string }[] = [
  { value: "Arial", style: styles.arial },
  { value: "Calibri", style: styles.calibri },
  { value: "Times New Roman", style: styles.times_new_roman },
  { value: "Comic Sans MS", style: styles.comic_sans_ms }
];
const fontSizes: number[] = [ 8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72 ];
const defaultText: string = "Sample Text";

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
    const card: Card = getCard();
    const color: string = colorPicker.current ? colorPicker.current.value : "black";
    const text: Text = {
      id: nextId(),
      type: Types.Text,
      text: defaultText,
      color: color,
      fontFamily: fontFamily,
      fontSize: fontSize,
      bold: bold,
      italic: italic,
      underline: underline,
      position: {
        x: card.size.width / 2,
        y: card.size.height / 2
      },
      size: {
        height: 0,
        width: 0
      }
    }
    dispatch(addObject, text);
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