import { RefObject, useEffect } from "react";
import { setObjectPosition } from "../Store/ActionCreators/ObjectActionCreators";
import { getStore } from "../Store/store";
import Point from "../Types/type-point";

function useDragAndDrop(
  ref: RefObject<HTMLElement>, id: number, 
  initialPos: Point, 
): void {
  const store = getStore();
  let startPos: Point;
  let newPos: Point;

  const onMouseDown = (e: MouseEvent): void => {
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
    };
    
    newPos = {
      x: initialPos.x + delta.x,
      y: initialPos.y + delta.y
    }

    if (ref.current) {
      ref.current.style.marginLeft = String(newPos.x) + "px";
      ref.current.style.marginTop = String(newPos.y) + "px";
    }
  }

  const onMouseUp = (): void => {
    if (newPos) {
      store.dispatch(setObjectPosition(id, newPos));
    }
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  useEffect(() => {
    const element = ref;
    element.current?.addEventListener("mousedown", onMouseDown);
    return () => {
      element.current?.removeEventListener("mousedown", onMouseDown);
    }
  });
}

export default useDragAndDrop;