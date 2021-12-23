import { RefObject, useEffect } from "react";
import { dispatch } from "../Card/card";
import Card from "../Types/type-card";
import Point from "../Types/type-point";

function useDragAndDrop(ref: RefObject<HTMLElement>, id: number,
  initialPos: Point, positionSetter: (card: Card, {id, newPos}: { id: number, newPos: Point }) => void): void {
  let startPos: Point;
  let element: HTMLElement | null;
  let newPos: Point;

  const onMouseDown = (e: MouseEvent): void => {
    if (ref.current && ref.current.contains(e.target as Node)) {
      element = ref.current;
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
    };
    newPos = {
      x: initialPos.x + delta.x,
      y: initialPos.y + delta.y
    }

    if (element) {
      element.style.marginLeft = String(newPos.x) + "px";
      element.style.marginTop = String(newPos.y) + "px";
    }
  }

  const onMouseUp = (): void => {
    if (newPos)
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

export default useDragAndDrop;