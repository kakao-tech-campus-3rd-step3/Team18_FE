import { useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { getSign, type Sign } from '@/pages/user/Apply/utils/math';
import { generateHours, getTimeIntervalArray, parseTime } from '@/pages/user/Apply/utils/time';
import { Text } from '@/shared/components/Text';
import { TimeSpan, Wrapper, DateText } from './index.styled';
import type { InterviewSchedule, PostInterviewSchedule } from '@/pages/user/Apply/type/apply';

export const InterviewScheduleSelector = ({ availableTime, date }: InterviewSchedule) => {
  const startNum: number = parseTime(availableTime.start);
  const endNum: number = parseTime(availableTime.end);
  const timeIntervalArray = getTimeIntervalArray(generateHours(startNum, endNum));
  const [selectedTime, setSelectedTime] = useState<boolean[]>(() =>
    new Array(timeIntervalArray.length).fill(false),
  );
  const isDragging = useRef<boolean>(false);
  const isMouseDown = useRef<boolean>(false);
  const mode = useRef<boolean>(false);
  const [prevDiffSign, setPrevDiffSign] = useState<Sign>(0);
  const lastHoveredIndex = useRef<string | null>(null);
  const startIndex = useRef<string | undefined>('');
  const selectedIndex = useRef<string | undefined>('');
  const selectedInterviewTime = useRef<Set<string>>(new Set());
  const mergedInterviewTime: string[] = [];
  const { setValue, getValues } = useFormContext();

  function handleIndexChange(newIndex: number) {
    const diff = newIndex - Number(lastHoveredIndex.current);
    const currentSign = getSign(diff);

    if (prevDiffSign !== 0 && currentSign !== 0 && currentSign !== prevDiffSign) {
      mode.current = !mode.current;

      if (currentSign < 0) {
        startIndex.current = String(newIndex + 1);
      } else if (currentSign > 0) {
        startIndex.current = String(newIndex - 1);
      }
    }
    setPrevDiffSign(currentSign);
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    isMouseDown.current = true;
    startIndex.current = e.currentTarget.dataset.index;
    if (startIndex.current) mode.current = !selectedTime[Number(startIndex.current)];

    const newValue = [...selectedTime];
    newValue[Number(startIndex.current)] = mode.current;

    setSelectedTime(newValue);
    lastHoveredIndex.current = String(startIndex.current);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!isMouseDown.current) return;
    isDragging.current = true;

    selectedIndex.current = e.currentTarget.dataset.index;
    if (!e.currentTarget.dataset.index || selectedIndex.current === lastHoveredIndex.current)
      return;

    handleIndexChange(Number(selectedIndex.current));

    setSelectedTime((prev) => {
      const newSelected = [...prev];
      const start = Math.min(Number(startIndex.current), Number(selectedIndex.current));
      const end = Math.max(Number(startIndex.current), Number(selectedIndex.current));

      for (let i = start; i <= end; i++) {
        newSelected[i] = mode.current;
      }
      return newSelected;
    });
    lastHoveredIndex.current = selectedIndex.current!;
  };

  const handleMouseUp = () => {
    [isDragging.current, isMouseDown.current] = [false, false];
    handleIndexChange(Number(selectedIndex.current));

    selectedTime.forEach((curVal, index) => {
      const [start, end] = timeIntervalArray[index];
      if (curVal) {
        selectedInterviewTime.current.add(`${start}-${end}`);
      } else {
        selectedInterviewTime.current.delete(`${start}-${end}`);
      }
    });

    const selectedTimeIntervalArray: string[] = [...selectedInterviewTime.current].sort();

    selectedTimeIntervalArray.forEach((e, idx) => {
      if (mergedInterviewTime.length < 1) {
        mergedInterviewTime.push(e);
        return;
      }

      if (mergedInterviewTime.length > 0) {
        if (mergedInterviewTime.length > idx) {
          return;
        }
      }

      const prevVal = mergedInterviewTime[mergedInterviewTime.length - 1];

      const [prevStart, prevEnd] = prevVal.split('-');
      const [currStart, currEnd] = e.split('-');

      if (prevEnd === currStart) {
        mergedInterviewTime.pop();
        mergedInterviewTime.push(prevStart + '-' + currEnd);
      } else {
        mergedInterviewTime.push(e);
      }
    });

    const currentInterviewTime: PostInterviewSchedule = {
      date: date,
      selectedTimes: mergedInterviewTime ?? [],
    };

    const currentInterviewSchedule = getValues('selectedInterviewSchedule') || [];

    const sameDateIndex: number = currentInterviewSchedule.findIndex(
      (schedule: PostInterviewSchedule) => schedule.date === date,
    );

    let updatedSchedule: PostInterviewSchedule[];

    if (sameDateIndex !== -1) {
      updatedSchedule = [...currentInterviewSchedule];
      updatedSchedule[sameDateIndex] = currentInterviewTime;
    } else {
      updatedSchedule = [...currentInterviewSchedule, currentInterviewTime];
    }

    setValue('selectedInterviewSchedule', updatedSchedule);
  };

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
