import { useRef, useState } from 'react';
import { formatHour, getTimeIntervalArray, parseTime } from '@/pages/user/Apply/utils/time';
import { Text } from '@/shared/components/Text';
import { TimeSpan, Wrapper, DateText } from './index.styled';
import { getSign, type Sign } from '@/pages/user/Apply/utils/math';
import type { AvailableTime, PostInterviewSchedule } from '@/pages/user/Apply/type/apply';
import { useFormContext } from 'react-hook-form';

type InterviewSchedule = {
  date: string;
  availableTime: AvailableTime;
};

export const InterviewSchedule = ({ availableTime, date }: InterviewSchedule) => {
  const startNum: number = parseTime(availableTime.start);
  const endNum: number = parseTime(availableTime.end);
  const isDragging = useRef<boolean>(false);
  const isMouseDown = useRef<boolean>(false);
  const mode = useRef<boolean>(false);
  const [prevDiffSign, setPrevDiffSign] = useState<Sign>(0);
  const lastHoveredIndex = useRef<string | null>(null);
  const startIndex = useRef<string | undefined>('');
  const selectedIndex = useRef<string | undefined>('');
  const timeIntervalArray = getTimeIntervalArray(generateHours(startNum, endNum));
  const [selected, setSelected] = useState<boolean[]>(() =>
    new Array(timeIntervalArray.length).fill(false),
  );
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
    if (startIndex.current) mode.current = !selected[Number(startIndex.current)];

    const newValue = [...selected];
    newValue[Number(startIndex.current)] = mode.current;

    setSelected(newValue);
    lastHoveredIndex.current = String(startIndex.current);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!isMouseDown.current) return;
    isDragging.current = true;

    selectedIndex.current = e.currentTarget.dataset.index;
    if (!e.currentTarget.dataset.index || selectedIndex.current === lastHoveredIndex.current)
      return;

    handleIndexChange(Number(selectedIndex.current));

    setSelected((prev) => {
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

    selected.forEach((curVal, index) => {
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
            selected={selected[idx]}
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

export function generateHours(startHour: number, endHour: number): string[] {
  const hours: string[] = [];

  for (let h = startHour; h <= endHour; h++) {
    const hourStr = formatHour(h);

    hours.push(hourStr);

    if (h < endHour) {
      const halfHourStr = h.toString().padStart(2, '0') + ':30';
      hours.push(halfHourStr);
    }
  }
  return hours;
}
