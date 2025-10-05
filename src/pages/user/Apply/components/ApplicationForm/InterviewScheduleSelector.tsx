import {
  convertSelectionToTimeInterval,
  generateHours,
  getTimeIntervalArray,
  mergeContinuousTimeInterval,
  parseTime,
} from '@/pages/user/Apply/utils/time';
import { Text } from '@/shared/components/Text';
import { TimeSpan, Wrapper, DateText } from './index.styled';
import type { InterviewSchedule } from '@/pages/user/Apply/type/apply';
import { useUpdateFormValue } from '@/pages/user/Apply/hook/useUpdateFormData';
import { useDragSelection } from '@/pages/user/Apply/hook/useDragSelection';

export const InterviewScheduleSelector = ({ availableTime, date }: InterviewSchedule) => {
  const startNum: number = parseTime(availableTime.start);
  const endNum: number = parseTime(availableTime.end);
  const timeIntervalArray: [string, string][] = getTimeIntervalArray(
    generateHours(startNum, endNum),
  );

  const { updateScheduleData } = useUpdateFormValue();

  const handleDragEnd = () => {
    const selectedInterviewTime: Set<string> = convertSelectionToTimeInterval(
      selectedTime,
      timeIntervalArray,
    );
    const mergedInterviewTime: string[] = mergeContinuousTimeInterval(selectedInterviewTime);
    updateScheduleData(date, mergedInterviewTime);
  };

  const { handleMouseDown, handleMouseMove, handleMouseUp, selectedTime } = useDragSelection(
    handleDragEnd,
    timeIntervalArray,
  );

  return (
    <Wrapper>
      <DateText>{date}</DateText>
      {timeIntervalArray.map((e, idx) => {
        return (
          <TimeSpan
            key={idx}
            data-index={idx}
            selected={selectedTime[idx]}
            onMouseDown={handleMouseDown}
            onMouseEnter={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <Text>{e[0] + '~' + e[1]}</Text>
          </TimeSpan>
        );
      })}
    </Wrapper>
  );
};
