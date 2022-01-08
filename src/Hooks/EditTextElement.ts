import { RefObject, useEffect } from "react";
import { deleteObject, setTextContent } from "../App/card-modifiers";
import { dispatch } from "../Card/card";

function useEditText(ref: RefObject<HTMLSpanElement>, id: number) {
  const saveContent = (): void => {
    if (ref.current) {
      ref.current.setAttribute("contenteditable", "false");
      ref.current.blur();
      const newText = ref.current.innerHTML;
      if (newText !== "")
        dispatch(setTextContent, { id, newText });
      else
        dispatch(deleteObject, id);
    }
  }

  function clickedOutside(e: MouseEvent): void {
    if (ref.current && !ref.current.contains(e.target as Node) && 
        ref.current.getAttribute("contenteditable") === "true") {
      saveContent();
    }
  }

  const onDoubleClick = (): void => {
    ref.current?.setAttribute("contenteditable", "true");
    ref.current?.focus();
  }

  const onMouseMove = (e: MouseEvent): void => {
    if (ref.current?.getAttribute("contenteditable") === "true")
      e.stopImmediatePropagation();
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
    if (e.code === "Escape" && ref.current?.getAttribute("contenteditable") === "true")
      saveContent();
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