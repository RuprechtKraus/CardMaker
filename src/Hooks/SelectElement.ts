import { RefObject, useEffect } from "react";
import { getSelectedId, resetSelectedId, setSelectedId } from "../Card/card";

function useSelect(ref: RefObject<HTMLElement>, id: number): void {
  function onMouseDownHandler(): void {
    setSelectedId(id);
  }

  function onMouseClickHandler(e: MouseEvent): void {
    const workArea = document.getElementById("work_area");
    const cardArea = document.getElementById("card");
    if (e.target !== ref.current && (e.target === workArea || e.target === cardArea ) && getSelectedId() === id) {
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