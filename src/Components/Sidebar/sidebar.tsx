import styles from './sidebar.module.css';
import CropIcon from '@mui/icons-material/Crop';
import FilterIcon from '@mui/icons-material/Filter';
import TitleIcon from '@mui/icons-material/Title';
import ImageIcon from '@mui/icons-material/Image';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import StarsIcon from '@mui/icons-material/Stars';
import StickerListPanel from './sticker-list-panel';
import ImagePanel from './image-panel';
import TextPanel from './text-panel';
import { useState } from 'react';

enum Panels {
  Select,
  Crop,
  Filters,
  Text,
  Images,
  Stickers
}

function Sidebar() {
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<Panels>(Panels.Select);

  function showPanel(panelType: Panels) {
    setOpen(true);
    switch (panelType) {
      case Panels.Select:
        setPanel(Panels.Select);
        break;
      case Panels.Crop:
        setPanel(Panels.Crop);
        break;
      case Panels.Filters:
        setPanel(Panels.Filters);
        break;
      case Panels.Text:
        setPanel(Panels.Text);
        break;
      case Panels.Images:
        setPanel(Panels.Images);
        break;
      case Panels.Stickers:
        setPanel(Panels.Stickers);
        break;
    }
  }

  function hideShowPanel() {
    setOpen(!open);
  }

  return (
    <div className={ styles.sidebar }>
      <div className={ styles.menu }>
        <div className={ styles.button } title="Выделить область" onClick={ () => showPanel(Panels.Select) }>
          <HighlightAltIcon className={ styles.icon }></HighlightAltIcon>
        </div>
        <div className={ styles.button } title="Обрезать" onClick={ () => showPanel(Panels.Crop) }>
          <CropIcon className={ styles.icon }></CropIcon>
        </div>
        <div className={ styles.button } title="Фильтры" onClick={ () => showPanel(Panels.Filters) }>
          <FilterIcon className={ styles.icon }></FilterIcon>
        </div>
        <div className={ styles.button } title="Вставить текст" onClick={ () => showPanel(Panels.Text) }>
          <TitleIcon className={ styles.icon }></TitleIcon>
        </div>
        <div className={ styles.button } title="Вставить изображение" onClick={ () => showPanel(Panels.Images) }>
          <ImageIcon className={ styles.icon }></ImageIcon>
        </div>
        <div className={ styles.button } title="Вставить арт объект" onClick={ () => showPanel(Panels.Stickers) }>
          <StarsIcon className={ styles.icon }></StarsIcon>
        </div>
      </div>

      { open && <div className={ styles.content }>
        { panel === Panels.Select && <div className="sidebar_content_filters">Выделение</div> }
        { panel === Panels.Crop && <div className="sidebar_content_filters">Обрезать</div> }
        { panel === Panels.Filters && <div className="sidebar_content_filters">Фильтры</div> }
        { panel === Panels.Text && <div className={ styles.texts }>
          <TextPanel></TextPanel>
        </div> }
        { panel === Panels.Images && <div className={ styles.images }>
          <ImagePanel></ImagePanel>
        </div> }
        { panel === Panels.Stickers && <div className={ styles.stickers }>
          <StickerListPanel></StickerListPanel>
        </div> }
      </div> }

      <div className={ styles.expander_block }>
        <div className={ styles.expander } onClick={ () => hideShowPanel() }>
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" className={ `${ styles.arrow } ${ !open ? styles.openArrow : "closeArrow"}` }><path fillRule="evenodd" d="M1.802 5l3.695-3.718a.757.757 0 0 0 0-1.062.745.745 0 0 0-1.057 0L.222 4.464l-.005.004A.75.75 0 0 0 0 5a.75.75 0 0 0 .217.532l.006.004L4.44 9.78a.745.745 0 0 0 1.057 0 .757.757 0 0 0 0-1.062L1.802 5z"></path></svg>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;