import type { DragState } from '../type/apply';

export type UpdatedDragState = {
  newStartIndex: number;
  newIsSelectionMode: boolean;
  newPreviousIndexDiffSign: number | null;
};

export const updateDragState = (
  state: DragState,
  curtIdx: number,
  idxDiffSign: number,
): UpdatedDragState => {
  let newStartIndex = state.startIndex;
  let newIsSelectionMode = state.isSelectionMode;
  let newPreviousIndexDiffSign = state.previousIndexDiffSign;
  if (state.previousIndexDiffSign === null || idxDiffSign !== state.previousIndexDiffSign) {
    newIsSelectionMode =
      state.previousIndexDiffSign === null ? state.isSelectionMode : !state.isSelectionMode;

    if (idxDiffSign < 0) {
      newStartIndex = curtIdx + 1;
    } else if (idxDiffSign > 0) {
      newStartIndex = curtIdx - 1;
    } else {
      newStartIndex = curtIdx;
    }

    newPreviousIndexDiffSign = idxDiffSign;
  }

  return { newStartIndex, newIsSelectionMode, newPreviousIndexDiffSign };
};
