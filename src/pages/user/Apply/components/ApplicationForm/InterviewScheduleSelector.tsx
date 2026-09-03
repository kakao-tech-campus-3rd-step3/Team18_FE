import { useEffect } from 'react';
import { useDragSelection } from '@/pages/user/Apply/hooks/useDragSelection';
import { getTimeSlotsArray } from '@/pages/user/Apply/utils/time';
import { Text } from '@/shared/components/Text';
import { TimeSpan, Wrapper, TimeSlotsContainer } from './index.styled';
import type { InterviewSchedule } from '@/pages/user/Apply/type/apply';

export const InterviewScheduleSelector = ({ availableTime, date, onChange }: InterviewSchedule) => {
  const timeSlotsArray: [string, string][] = getTimeSlotsArray(availableTime);

  const { handleDragStart, handleDragOver, states } = useDragSelection(date, timeSlotsArray);

  // 드래그 중인 손가락 좌표로 현재 슬롯을 찾아 선택 갱신
  const getSlotIndexAtPoint = (clientX: number, clientY: number): number | null => {
    const slot = document.elementFromPoint(clientX, clientY)?.closest<HTMLElement>('[data-index]');
    if (!slot) return null;

    return Number(slot.dataset.index);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const index = getSlotIndexAtPoint(e.clientX, e.clientY);
    if (index === null) return;

    e.preventDefault();
    handleDragStart(index);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const index = getSlotIndexAtPoint(e.clientX, e.clientY);
    if (index === null) return;

    handleDragOver(index);
  };

  useEffect(() => {
    if (!onChange) return;

    const selectedTimes = timeSlotsArray
      .filter((_, idx) => states.isSelectedStates[idx])
      .map(([start, end]) => `${start}-${end}`);

    onChange({
      date,
      selectedTimes,
    });
  }, [states.isSelectedStates]);

  return (
    <Wrapper>
      <TimeSlotsContainer onPointerDown={handlePointerDown} onPointerMove={handlePointerMove}>
        {timeSlotsArray.map((e, idx) => {
          return (
            <TimeSpan key={idx} data-index={idx} selected={states.isSelectedStates[idx]}>
              <Text size='xs'>{`${e[0]}~${e[1]}`}</Text>
            </TimeSpan>
          );
        })}
      </TimeSlotsContainer>
    </Wrapper>
  );
};
