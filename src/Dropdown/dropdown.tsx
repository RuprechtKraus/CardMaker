import { ReactChild, useEffect, useState, createRef } from 'react';
import './dropdown.style.css';

type DropdownProps = {
  label: string;
  children: ReactChild[] | ReactChild;
}

type DropdownMenuProps = {
  children: ReactChild;
}

function Dropdown(props: DropdownProps) {  
  const [open, setOpen] = useState(false); 
  const items = props.children;
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    const clickedOutside = (e: any) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", clickedOutside);
    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    }
  }, [open, ref])
  
  return (
    <div className="dropdown" onClick={() => setOpen(!open)} ref={ref}>
      <div className="">
        { props.label }
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" className="dropdown-arrow"><path fillRule="evenodd" d="M5 3.912L1.282.218a.756.756 0 0 0-1.062 0 .744.744 0 0 0 0 1.056L4.465 5.49l.003.005c.147.146.34.218.532.218a.751.751 0 0 0 .532-.218c.003-.001.003-.003.004-.005l4.245-4.217a.745.745 0 0 0 0-1.056.756.756 0 0 0-1.062 0L5 3.912z"></path></svg>
      </div>
      { open &&
        <DropdownMenu>
          <div className="dropdown_items">
            { items }
          </div>
        </DropdownMenu> 
      }
    </div>
  )
}

function DropdownMenu(props: DropdownMenuProps) {
  const items = props.children;
  const listItems = Array.isArray(items) ? items.map((item: any) => 
    <div>{ item }</div>    
  ) : items;

  return (
    <>{listItems}</>
  )
}

export default Dropdown;