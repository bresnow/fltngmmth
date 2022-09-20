import type { RefObject } from "react";
import { useEffect, useRef, useState, useCallback } from "react";

export enum DraggingState {
  undefined = -1,
  starts = 0,
  moves = 1,
  finished = 2,
}

export default function useDraggable() {
  const [state, setState] = useState(DraggingState.undefined);
  const [point, setPoint] = useState({ x: 0, y: 0 }); // point of cursor in relation to the element's parent
  const [elementOffset, setElementOffset] = useState({ x: 0, y: 0 }); // offset of element in relation to it's parent
  const [touchOffset, setTouchOffset] = useState({ x: 0, y: 0 }); // offset of mouse down point in relation to the element
  const ref = useRef() as RefObject<HTMLDivElement>;

  // shows active state of dragging
  const isDragging = () => {
    return state === DraggingState.starts || state === DraggingState.moves;
  };

  function onMouseDown(e: MouseEvent) {
    const parentElement = ref.current?.offsetParent as HTMLElement;
    if (e.button !== 0 || !ref.current || !parentElement) return;

    // First entry to the flow.
    // We save touchOffset value as parentElement's offset
    // to calculate element's offset on the move.
    setPoint({
      x: e.x - parentElement.offsetWidth,
      y: e.y - parentElement.offsetHeight,
    });
    setElementOffset({
      x: ref.current.offsetLeft,
      y: ref.current.offsetTop,
    });
    setTouchOffset({
      x: e.x - parentElement.offsetLeft - ref.current.offsetLeft,
      y: e.y - parentElement.offsetTop - ref.current.offsetTop,
    });

    setState(DraggingState.starts);
  }

  const onMouseMove = useCallback(
    function (e: MouseEvent) {
      const parentElement = ref.current?.offsetParent as HTMLElement;
      if (!isDragging() || !ref.current || !parentElement) return;
      setState(DraggingState.moves);

      setPoint({
        x: e.x - parentElement.offsetLeft,
        y: e.y - parentElement.offsetTop,
      });
      setElementOffset({
        x: e.x - touchOffset.x - parentElement.offsetLeft,
        y: e.y - touchOffset.y - parentElement.offsetTop,
      });
    },
    [isDragging, touchOffset.x, touchOffset.y]
  );

  function onMouseUp(e: MouseEvent) {
    // ends up the flow by setting the state
    setState(DraggingState.finished);
  }

  function onClick(e: MouseEvent) {
    // that's a fix for touch pads that transfer touches to click,
    // e.g "Tap to click" on macos. When enabled, on tap mouseDown is fired,
    // but mouseUp isn't. In this case we invoke mouseUp manually, to trigger
    // finishing state;
    setState(DraggingState.finished);
  }

  // When the element mounts, attach an mousedown listener
  useEffect(() => {
    const element = ref.current;
    element?.addEventListener("mousedown", onMouseDown);

    return () => {
      element?.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  // Everytime the state changes, assign or remove
  // the corresponding mousemove, mouseup and click handlers
  useEffect(() => {
    if (isDragging()) {
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("click", onClick);
    } else {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("click", onClick);
    }
    return () => {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("click", onClick);
    };
  }, [isDragging, onMouseMove, state]);

  return {
    ref: ref,
    state: state,
    point: point,
    elementOffset: elementOffset,
    touchOffset: touchOffset,
  };
}
