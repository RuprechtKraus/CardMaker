import { RefObject, useEffect } from "react";
import { setObjectSize } from "../Store/ActionCreators/ObjectActionCreators";
import { getStore } from "../Store/store";
import Point from "../Types/type-point";
import Size from "../Types/type-size";

const MIN_SIZE = 50;

function useResize(
  ref: RefObject<HTMLElement>, dotRef: RefObject<HTMLElement>,
  id: number, initialSize: Size
): void {
  const store = getStore();
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

    if (newSize.height < MIN_SIZE) {
      newSize = {
        height: MIN_SIZE,
        width: newSize.width
      }
    }
    
    if (newSize.width < MIN_SIZE) {
      newSize = {
        height: newSize.height,
        width: MIN_SIZE
      }
    }
    
    if (ref.current) {
      ref.current.style.height = String(newSize.height) + "px";
      ref.current.style.width = String(newSize.width) + "px"
    }
  }

  const onMouseUp = (): void => {
    if (newSize)
      store.dispatch(setObjectSize(id, newSize));
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