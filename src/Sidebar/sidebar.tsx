import './sidebar.style.css';
import CropIcon from '@mui/icons-material/Crop';
import FilterIcon from '@mui/icons-material/Filter';
import TitleIcon from '@mui/icons-material/Title';
import ImageIcon from '@mui/icons-material/Image';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import StarsIcon from '@mui/icons-material/Stars';
import StickerList from './sticker-list';
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
    <div className="sidebar">
      <div className="sidebar_menu">
        <div className="sidebar_btn" title="Выделить область" onClick={ () => showPanel(Panels.Select) }>
          <HighlightAltIcon className="sidebar_btn_icon"></HighlightAltIcon>
        </div>
        <div className="sidebar_btn" title="Обрезать" onClick={ () => showPanel(Panels.Crop) }>
          <CropIcon className="sidebar_btn_icon"></CropIcon>
        </div>
        <div className="sidebar_btn" title="Фильтры" onClick={ () => showPanel(Panels.Filters) }>
          <FilterIcon className="sidebar_btn_icon"></FilterIcon>
        </div>
        <div className="sidebar_btn" title="Вставить текст" onClick={ () => showPanel(Panels.Text) }>
          <TitleIcon className="sidebar_btn_icon"></TitleIcon>
        </div>
        <div className="sidebar_btn" title="Вставить изображение" onClick={ () => showPanel(Panels.Images) }>
          <ImageIcon className="sidebar_btn_icon"></ImageIcon>
        </div>
        <div className="sidebar_btn" title="Вставить арт объект" onClick={ () => showPanel(Panels.Stickers) }>
          <StarsIcon className="sidebar_btn_icon"></StarsIcon>
        </div>
      </div>

      { open && <div className="sidebar_content">
        { panel === Panels.Select && <div className="sidebar_content_filers">Выделение</div> }
        { panel === Panels.Crop && <div className="sidebar_content_filers">Обрезать</div> }
        { panel === Panels.Filters && <div className="sidebar_content_filers">Фильтры</div> }
        { panel === Panels.Text && <div className="sidebar_content_images">Изображения</div> }
        { panel === Panels.Images && <div className="sidebar_content_text">Текст</div> }
        { panel === Panels.Stickers && <div className="sidebar_content_stickers">
          <StickerList></StickerList>
        </div> }
      </div> }

      <div className="sidebar_expander_block">
        <div className="sidebar_expander" onClick={ () => hideShowPanel() }>
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" className={ `sidebar_arrow ${ !open ? "openArrow" : "closeArrow"}` }><path fillRule="evenodd" d="M1.802 5l3.695-3.718a.757.757 0 0 0 0-1.062.745.745 0 0 0-1.057 0L.222 4.464l-.005.004A.75.75 0 0 0 0 5a.75.75 0 0 0 .217.532l.006.004L4.44 9.78a.745.745 0 0 0 1.057 0 .757.757 0 0 0 0-1.062L1.802 5z"></path></svg>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;