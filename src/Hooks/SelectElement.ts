import { RefObject, useEffect } from "react";
import { getSelectedId, resetSelectedId, setSelectedId } from "../Card/card";

function useSelect(ref: RefObject<HTMLElement>, id: number): void {
  function onMouseDownHandler(): void {
    setSelectedId(id);
  }

  function onMouseClickHandler(e: MouseEvent): void {
    if ((e.target !== ref.current) && getSelectedId() === id) {
      resetSelectedId();
    }
  }

  useEffect(() => {
    const element = ref;
    document.addEventListener("click", onMouseClickHandler);
    element.current?.addEventListener("mousedown", onMouseDownHandler); 
    return() => {
      document.removeEventListener("click", onMouseClickHandler);
      element.current?.removeEventListener("mousedown", onMouseDownHandler);
    }
  });
}

export default useSelect;