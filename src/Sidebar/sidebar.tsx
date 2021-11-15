import './sidebar.style.css';
import CropIcon from '@mui/icons-material/Crop';
import FilterIcon from '@mui/icons-material/Filter';
import TitleIcon from '@mui/icons-material/Title';
import ImageIcon from '@mui/icons-material/Image';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import StarsIcon from '@mui/icons-material/Stars';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_btn" title="Выделить область">
        <HighlightAltIcon className="sidebar_btn_icon"></HighlightAltIcon>
      </div>
      <div className="sidebar_btn" title="Обрезать">
        <CropIcon className="sidebar_btn_icon"></CropIcon>
      </div>
      <div className="sidebar_btn" title="Фильтр">
        <FilterIcon className="sidebar_btn_icon"></FilterIcon>
      </div>
      <div className="sidebar_btn" title="Вставить текст">
        <TitleIcon className="sidebar_btn_icon"></TitleIcon>
      </div>
      <div className="sidebar_btn" title="Вставить изображение">
        <ImageIcon className="sidebar_btn_icon"></ImageIcon>
      </div>
      <div className="sidebar_btn" title="Вставить арт объект">
        <StarsIcon className="sidebar_btn_icon"></StarsIcon>
      </div>
    </div>
  )
}

export default Sidebar;