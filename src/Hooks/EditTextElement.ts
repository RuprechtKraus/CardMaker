import { RefObject, useEffect } from "react";
import { removeObject, setTextContent } from "../Store/ActionCreators/ObjectActionCreators";
import { getStore, setEditedTextId } from "../Store/store";

function useEditText(ref: RefObject<HTMLSpanElement>, id: number) {
  const store = getStore();
  
  const saveContent = (): void => {
    if (ref.current) {
      ref.current.setAttribute("contenteditable", "false");
      ref.current.blur();
      const newText = ref.current.innerHTML;
      if (newText !== "")
        store.dispatch(setTextContent(id, newText));
      else
        store.dispatch(removeObject(id));
    }
  }

  function blur(): void {
    setEditedTextId(null);
    saveContent();
  }

  function clickedOutside(e: MouseEvent): void {
    if (ref.current && !ref.current.contains(e.target as Node) && 
    ref.current.getAttribute("contenteditable") === "true") {
      blur();
    }
  }

  const onDoubleClick = (): void => {
    ref.current?.setAttribute("contenteditable", "true");
    ref.current?.focus();
    setEditedTextId(id);
  }

  const onMouseMove = (e: MouseEvent): void => {
    if (ref.current?.getAttribute("contenteditable") === "true") {
      e.stopImmediatePropagation();
    }
  }

  const onMouseDown = (): void => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }

  const onMouseUp = (): void => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  const onKeyDown = (e: KeyboardEvent): void => {
    if (e.code === "Escape" && ref.current?.getAttribute("contenteditable") === "true") {
      blur();
    }
  }

  useEffect(() => {
    const element = ref;
    element.current?.addEventListener("dblclick", onDoubleClick);
    element.current?.addEventListener("mousemove", onMouseDown);
    document.addEventListener("click", clickedOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      element.current?.removeEventListener("dblclick", onDoubleClick);
      element.current?.removeEventListener("mousemove", onMouseDown);
      document.removeEventListener("click", clickedOutside);;
      document.removeEventListener("keydown", onKeyDown);
    };
  });
}

export default useEditText;