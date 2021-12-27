import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import styles from "./format-button.module.css";

enum FormatButtonTypes {
  Bold,
  Italic,
  Underline
}  

type FormatButtonProps = {
  type: FormatButtonTypes,
  title?: string,
  pressed: boolean,
  clickHandler: () => void
}

function FormatButton(props: FormatButtonProps): JSX.Element {
  const button: JSX.Element = getButton(props.type);
  const pressedStyle = props.pressed ? styles.pressed : "";

  return <button onClick={ props.clickHandler } className={ styles.format_button + " " + pressedStyle }
    title={ props.title }>{ button }</button>;
}

function getButton(type: FormatButtonTypes): JSX.Element {
  switch(type) {
    case FormatButtonTypes.Bold:
      return <FormatBoldIcon></FormatBoldIcon>
    case FormatButtonTypes.Italic:
      return <FormatItalicIcon></FormatItalicIcon>
    case FormatButtonTypes.Underline:
      return <FormatUnderlinedIcon></FormatUnderlinedIcon>
  }
}

export { FormatButton, FormatButtonTypes };