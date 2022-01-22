import { RefObject, useEffect } from "react";
import { resetSelectedId, setSelectedId } from "../Store/ActionCreators/AppActionCreators";
import { getSelectedId, getStore } from "../Store/store";

function useSelect(ref: RefObject<HTMLElement>, id: number): void {
  const store = getStore();
  
  function onMouseDownHandler(): void {
    if (getSelectedId() !== id) {
      store.dispatch(setSelectedId(id));
    }
  }

  function onMouseClickHandler(e: MouseEvent): void {
    const workArea = document.getElementById("work_area");
    const cardArea = document.getElementById("card");
    const selectedId = store.getState().selectedId;
    if (e.target !== ref.current && (e.target === workArea || e.target === cardArea ) && selectedId === id) {
      store.dispatch(resetSelectedId());
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