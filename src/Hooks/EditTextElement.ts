import { RefObject, useEffect } from "react";
import { deleteObject, setTextContent } from "../App/utils";
import { dispatch } from "../Card/card";

function useEditText(ref: RefObject<HTMLSpanElement>, id: number) {
  const saveContent = (): void => {
    if (ref.current) {
      ref.current.setAttribute("contenteditable", "false");
      const newText = ref.current.innerHTML;
      if (newText !== "")
        dispatch(setTextContent, { id, newText });
      else
        dispatch(deleteObject, id);
    }
  }
  
  const onBlur = (): void => saveContent();

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
    if (e.code === "Escape")
      saveContent();
  }

  useEffect(() => {
    const element = ref;
    element.current?.addEventListener("dblclick", onDoubleClick);
    element.current?.addEventListener("blur", onBlur);
    element.current?.addEventListener("mousemove", onMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      element.current?.removeEventListener("dblclick", onDoubleClick);
      element.current?.removeEventListener("blur", onBlur);
      element.current?.removeEventListener("mousemove", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  });
}

export default useEditText;