import { RefObject, useEffect } from "react";
import { dispatch } from "../Card/card";
import Card from "../Types/type-card";
import Point from "../Types/type-point";
import Size from "../Types/type-size";

function useResize(
  ref: RefObject<HTMLElement>, dotRef: RefObject<HTMLElement>,
  id: number, initialSize: Size,
  sizeSetter: (card: Card, { id, newSize }: { id: number, newSize: Size }) => void
): void {
  let startPos: Point;
  let newSize: Size;

  const onMouseDown = (e: MouseEvent): void => {
    e.stopImmediatePropagation();
    startPos = {
      x: e.pageX,
      y: e.pageY
    }
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }

  const onMouseMove = (e: MouseEvent): void => {
    const delta = {
      x: e.pageX - startPos.x,
      y: e.pageY - startPos.y
    }

    if (e.shiftKey) {
      const avgDelta = (delta.x + delta.y) / 2;
      newSize = {
        height: initialSize.height + avgDelta,
        width: initialSize.width + avgDelta
      }
    }
    else {
      newSize = {
        height: initialSize.height + delta.y,
        width: initialSize.width + delta.x
      }
    }
    
    if (ref.current) {      
      ref.current.style.height = String(newSize.height) + "px";
      ref.current.style.width = String(newSize.width) + "px";
    }
  }

  const onMouseUp = (): void => {
    if (newSize)
      dispatch(sizeSetter, { id, newSize });
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  useEffect(() => {
    const dot = dotRef;
    dot.current?.addEventListener("mousedown", onMouseDown);
    return () => {
      dot.current?.removeEventListener("mousedown", onMouseDown);
    }
  });
}

export default useResize;