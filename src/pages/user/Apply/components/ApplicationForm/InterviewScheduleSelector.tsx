import { useDragSelection } from '@/pages/user/Apply/hook/useDragSelection';
import { getTimeSlotsArray } from '@/pages/user/Apply/utils/time';
import { Text } from '@/shared/components/Text';
import { TimeSpan, Wrapper, DateText } from './index.styled';
import type { InterviewSchedule } from '@/pages/user/Apply/type/apply';

export const InterviewScheduleSelector = ({ availableTime, date }: InterviewSchedule) => {
  const timeSlotsArray: [string, string][] = getTimeSlotsArray(availableTime);

  const { handleMouseDown, handleMouseMove, handleMouseUp, states } = useDragSelection(
    date,
    timeSlotsArray,
  );

  return (
    <Wrapper>
      <DateText>{date}</DateText>
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
            <Text size='xs'>{e[0] + '~' + e[1]}</Text>
          </TimeSpan>
        );
      })}
    </Wrapper>
  );
};
