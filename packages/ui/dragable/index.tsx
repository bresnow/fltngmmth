import React from 'react';
import useDraggable, { DraggingState } from './hook';
export default function ({className}: {className?: string}) {
    const dragging = useDraggable();
    const ref = dragging.ref;

    const style = {
        marginLeft: dragging.elementOffset.x,
        marginTop: dragging.elementOffset.y,
        border: "1px dashed red"
    }

    return (
    <div ref={ref} className={className} style={style}>
        {dragging.state === DraggingState.moves ? "is dragging" : "not dragging"}
    </div>
    )
}