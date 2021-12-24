import { RefObject, useEffect } from "react";
import { dispatch } from "../Card/card";
import Card from "../Types/type-card";
import Point from "../Types/type-point";
import Size from "../Types/type-size";

function useResize(
  ref: RefObject<HTMLElement>, dot: RefObject<HTMLElement>,
  id: number, initialSize: Size, initialPos: Point,
  sizeSetter: (card: Card, { id, newSize }: { id: number, newSize: Size }) => void,
  positionSetter: (card: Card, {id, newPos}: { id: number, newPos: Point }) => void
): void {
  let startPos: Point;
  let newSize: Size;
  const newPos: Point = initialPos;
  const dotElement: HTMLElement | null = dot.current;
  const element: HTMLElement | null = ref.current;

  const onMouseDown = (e: MouseEvent): void => {
    if (dotElement && dotElement.contains(e.target as Node)) {
      startPos = {
        x: e.pageX,
        y: e.pageY
      }
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }
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
    
    if (element) {
      element.style.marginLeft = String(initialPos.x) + "px";
      element.style.marginTop = String(initialPos.y) + "px";
      
      element.style.height = String(newSize.height) + "px";
      element.style.width = String(newSize.width) + "px";
    }
  }

  const onMouseUp = (): void => {
    if (newSize)
      dispatch(sizeSetter, { id, newSize });
    dispatch(positionSetter, { id, newPos });
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  useEffect(() => {
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
    }
  });
}

export default useResize;