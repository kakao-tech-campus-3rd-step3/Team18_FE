import { useEffect } from 'react';
import { useDragSelection } from '@/pages/user/Apply/hooks/useDragSelection';
import { getTimeSlotsArray } from '@/pages/user/Apply/utils/time';
import { Text } from '@/shared/components/Text';
import { TimeSpan, Wrapper, DateText, TimeSlotsContainer } from './index.styled';
import type { InterviewSchedule } from '@/pages/user/Apply/type/apply';

export const InterviewScheduleSelector = ({ availableTime, date, onChange }: InterviewSchedule) => {
  const timeSlotsArray: [string, string][] = getTimeSlotsArray(availableTime);

  const { handleMouseDown, handleMouseMove, handleMouseUp, states } = useDragSelection(
    date,
    timeSlotsArray,
  );

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
      <DateText>{date}</DateText>
      <TimeSlotsContainer>
        {timeSlotsArray.map((e, idx) => {
          return (
            <TimeSpan
              key={idx}
              data-index={idx}
              selected={states.isSelectedStates[idx]}
              onMouseDown={handleMouseDown}
              onMouseEnter={handleMouseMove}
              onMouseUp={handleMouseUp}
            >
              <Text size='xs'>{`${e[0]}~${e[1]}`}</Text>
            </TimeSpan>
          );
        })}
      </TimeSlotsContainer>
    </Wrapper>
  );
};
