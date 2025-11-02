import { useReducer } from 'react';
import { useInterviewScheduleUpdater } from './useFormDataUpdate';

import { generateInitialDragState } from '../constants/initialDragState';

import { updateDragState, updateSelectedState } from '../utils/drag';
import { getIndexDiffSign } from '../utils/math';
import type { DragAction, DragState } from '../type/apply';

function getSelectedIndex(e: React.MouseEvent<HTMLSpanElement>) {
  return Number(e.currentTarget.dataset.index);
}

function dragReducer(state: DragState, action: DragAction) {
  switch (action.type) {
    case 'mouseDown': {
      const newSelectedStates: boolean[] = [...state.isSelectedStates];
      newSelectedStates[action.index] = action.isSelectionMode;

      return {
        ...state,
        startIndex: action.index,
        currentSelectedIndex: action.index,
        lastHoveredIndex: action.index,
        isSelectionMode: action.isSelectionMode,
        isSelectedStates: newSelectedStates,
        isMouseDown: true,
        previousIndexDiffSign: null,
      };
    }
    case 'mouseMove': {
      const currentIndex = action.index;
      const indexDiffSign = action.indexDiffSign;

      const { newStartIndex, newIsSelectionMode, newPreviousIndexDiffSign } = updateDragState(
        state,
        currentIndex,
        indexDiffSign,
      );

      const newSelectedStates = updateSelectedState(
        state.isSelectedStates,
        newStartIndex,
        currentIndex,
        newIsSelectionMode,
      );

      return {
        ...state,
        isDragging: true,
        currentSelectedIndex: currentIndex,
        lastHoveredIndex: currentIndex,
        isSelectedStates: newSelectedStates,
        isSelectionMode: newIsSelectionMode,
        startIndex: newStartIndex,
        previousIndexDiffSign: newPreviousIndexDiffSign,
      };
    }
    case 'mouseUp': {
      return {
        ...state,
        isMouseDown: false,
        isDragging: false,
      };
    }
    default:
      return state;
  }
}

export function useDragSelection(date: string, timeIntervalArray: [string, string][]) {
  const { updateInterviewSchedule } = useInterviewScheduleUpdater(date, timeIntervalArray);

  const [states, dispatch] = useReducer(
    dragReducer,
    generateInitialDragState(timeIntervalArray.length),
  );

  const handleMouseDown = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    dispatch({
      type: 'mouseDown',
      index: getSelectedIndex(e),
      isSelectionMode: !states.isSelectedStates[getSelectedIndex(e)],
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (
      !e.currentTarget.dataset.index ||
      getSelectedIndex(e) === states.lastHoveredIndex ||
      !states.isMouseDown
    )
      return;

    dispatch({
      type: 'mouseMove',
      index: getSelectedIndex(e),
      indexDiffSign: getIndexDiffSign(getSelectedIndex(e), states.lastHoveredIndex),
    });
  };

  const handleMouseUp = () => {
    if (!states.isMouseDown) return;
    dispatch({
      type: 'mouseUp',
    });

    updateInterviewSchedule(states.isSelectedStates);
  };

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    states,
  };
}
