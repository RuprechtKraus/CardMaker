import styles from "./template-panel.module.css";
import snowflake from "./icons/snowflake.png";
import pumpkin from "./icons/pumpkin.png";
import photo from "./icons/photo.png";
import { getTemplate, Template } from "../../../App/Templates/template";
import { applyCard } from "../../../Card/card";

function TemplatePanel(): JSX.Element {
  function applyTemplate(template: Template): void {
    const result = window.confirm("Это действие удалит все несохраненные данные");
    if (result) {
      const card = getTemplate(template);
      applyCard(card);
    }
  }

  const itemsPerRow: number = 3;
  const items = [
    <div className={ styles.item_wrapper } title="Новый год" onClick={ () => applyTemplate(Template.NewYear) }>
      <img src={ snowflake } alt="Снежинка" className={ styles.item } />
    </div>,
    <div className={ styles.item_wrapper } title="Хэллоуин" onClick={ () => applyTemplate(Template.Halloween) }>
      <img src={ pumpkin } alt="Тыква" className={ styles.item } />
    </div>,
    <div className={ styles.item_wrapper } title="Фотография" onClick={ () => applyTemplate(Template.Photo) }>
      <img src={ photo } alt="Фото" className={ styles.item } />
    </div>
  ];
  
  const itemsOnLastRow: number = items.length % itemsPerRow;
  let blanks: number = 0;
  if (itemsOnLastRow > 0) {
    blanks = itemsPerRow - itemsOnLastRow;
  }

  for (let i = 0; i < blanks; i++) {
    items.push(<div className={ styles.filler }></div>);
  }
  
  return <div className={ styles.template_panel }>{ items }</div>;
}

export default TemplatePanel;