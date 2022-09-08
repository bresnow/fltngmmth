import React from 'react';
import useDraggable, { DraggingState } from './hook';
export default function ({className, children}: {className?: string; children:React.ReactNode}) {
    const dragging = useDraggable();
    const ref = dragging.ref;

    const style = {
        marginLeft: dragging.elementOffset.x,
        marginTop: dragging.elementOffset.y,
    }

    return (
        <>
            {dragging.state === DraggingState.moves ? `x:${dragging.touchOffset.x}, y:${dragging.touchOffset.y} ` : "not dragging"}
    <div ref={ref} className={className} style={style}>
        {children}
        
            </div></>
    )
}