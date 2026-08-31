import { useReducer } from 'react';
import { useInterviewScheduleUpdater } from './useFormDataUpdate';

import { generateInitialDragState } from '../constants/initialDragState';

import { updateDragState, updateSelectedState } from '../utils/drag';
import { getIndexDiffSign } from '../utils/math';
import type { DragAction, DragState } from '../type/apply';

function dragReducer(state: DragState, action: DragAction) {
  switch (action.type) {
    case 'dragStart': {
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
    case 'dragOver': {
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
    case 'dragEnd': {
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

  const handleDragStart = (index: number) => {
    dispatch({
      type: 'dragStart',
      index,
      isSelectionMode: !states.isSelectedStates[index],
    });
  };

  const handleDragOver = (index: number) => {
    if (!states.isMouseDown || index === states.lastHoveredIndex) return;

    dispatch({
      type: 'dragOver',
      index,
      indexDiffSign: getIndexDiffSign(index, states.lastHoveredIndex),
    });
  };

  const handleDragEnd = () => {
    if (!states.isMouseDown) return;
    dispatch({
      type: 'dragEnd',
    });

    updateInterviewSchedule(states.isSelectedStates);
  };

  return {
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    states,
  };
}
