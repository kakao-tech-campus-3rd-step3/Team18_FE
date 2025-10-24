import type { DragState } from '../type/apply';

export const updateSelectedState = (
  selectedStates: boolean[],
  startIndex: number,
  selectedIndex: number,
  selectionMode: boolean,
): boolean[] => {
  const start = Math.min(startIndex, selectedIndex);
  const end = Math.max(startIndex, selectedIndex);

  return selectedStates.map((isSelected, index) =>
    index >= start && index <= end ? selectionMode : isSelected,
  );
};

export type UpdatedDragState = {
  newStartIndex: number;
  newIsSelectionMode: boolean;
  newPreviousIndexDiffSign: number | null;
};

export const updateDragState = (
  state: DragState,
  currentIdx: number,
  idxDiffSign: number,
): UpdatedDragState => {
  let newStartIndex = state.startIndex;
  let newIsSelectionMode = state.isSelectionMode;
  let newPreviousIndexDiffSign = state.previousIndexDiffSign;
  if (state.previousIndexDiffSign === null || idxDiffSign !== state.previousIndexDiffSign) {
    newIsSelectionMode =
      state.previousIndexDiffSign === null ? state.isSelectionMode : !state.isSelectionMode;

    if (idxDiffSign < 0) {
      newStartIndex = currentIdx + 1;
    } else if (idxDiffSign > 0) {
      newStartIndex = currentIdx - 1;
    } else {
      newStartIndex = currentIdx;
    }

    newPreviousIndexDiffSign = idxDiffSign;
  }

  return { newStartIndex, newIsSelectionMode, newPreviousIndexDiffSign };
};
