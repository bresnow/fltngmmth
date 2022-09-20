import React from "react";
import useDraggable, { DraggingState } from "./hook";
export default function Draggable({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const dragging = useDraggable();
  const ref = dragging.ref;

  const style = {
    marginLeft: dragging.elementOffset.x,
    marginTop: dragging.elementOffset.y,
  };

  return (
    <>
      {dragging.state === DraggingState.moves
        ? `x:${dragging.elementOffset.x}, y:${dragging.elementOffset.y} `
        : "not dragging"}
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    </>
  );
}
