import type { DragState } from '../type/apply';

export const generateInitialDragState = (statesLength: number): DragState => {
  return {
    startIndex: -1,
    lastHoveredIndex: -1,
    currentSelectedIndex: -1,
    isSelectionMode: false,
    isSelectedStates: new Array(statesLength).fill(false),
    isMouseDown: false,
    isDragging: false,
    previousIndexDiffSign: null,
  };
};
