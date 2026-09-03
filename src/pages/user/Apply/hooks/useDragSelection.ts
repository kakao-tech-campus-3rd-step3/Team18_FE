import { useEffect, useReducer, useRef } from 'react';
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

  // 슬롯 영역 바깥에서 놓아도 드래그가 끝나야 한다.
  useEffect(() => {
    if (!states.isMouseDown) return;

    const endDrag = () => dispatch({ type: 'dragEnd' });

    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);

    return () => {
      window.removeEventListener('pointerup', endDrag);
      window.removeEventListener('pointercancel', endDrag);
    };
  }, [states.isMouseDown]);

  // 드래그를 놓는 시점이 아니라 선택이 바뀔 때마다 폼에 반영한다.
  const isInitialRender = useRef(true);
  const updateRef = useRef(updateInterviewSchedule);
  updateRef.current = updateInterviewSchedule;

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    updateRef.current(states.isSelectedStates);
  }, [states.isSelectedStates]);

  return {
    handleDragStart,
    handleDragOver,
    states,
  };
}
