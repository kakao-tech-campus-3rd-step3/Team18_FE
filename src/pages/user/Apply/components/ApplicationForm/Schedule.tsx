import styled from '@emotion/styled';
import { useState } from 'react';
import { formatHour, getTimeIntervalArray, parseTime } from '@/pages/user/Apply/utils/time';
import { TimeSpan } from './index.styled';
import type { AvailableTime } from '@/pages/user/Apply/type/apply';

type InterviewSchedule = {
  date: string;
  availableTime: AvailableTime;
};

export const InterviewSchedule = ({ availableTime, date }: InterviewSchedule) => {
  const startNum: number = parseTime(availableTime.start);
  const endNum: number = parseTime(availableTime.end);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedHours, setSelectedHours] = useState<Set<string>>(new Set());
  const [lastHoveredHour, setLastHoveredHour] = useState<string | null>(null);
  const [mouseDown, setMouseDown] = useState(false);

  const hoursArray = generateHours(startNum, endNum);
  const timeIntervalArray = getTimeIntervalArray(hoursArray);

  const handleMouseDown = (e: React.MouseEvent<HTMLSpanElement>) => {
    setMouseDown(true);

    const selectedTime: string | undefined = e.currentTarget.dataset.timeinterval;
    if (!selectedTime) return;

    if (selectedHours.has(selectedTime)) {
      setSelectedHours((prev) => {
        const newSet = new Set(prev);
        newSet.delete(selectedTime);
        return newSet;
      });
      return;
    }

    setSelectedHours((prev) => new Set([...prev, selectedTime]));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!mouseDown) return;
    setIsDragging(true);

    const selectedTime: string | undefined = e.currentTarget.dataset.timeinterval;
    if (!selectedTime || !isDragging) return;

    if (selectedTime === lastHoveredHour) return;
    if (selectedTime && !selectedHours.has(selectedTime)) {
      setSelectedHours((prev) => new Set([...prev, selectedTime]));
      setLastHoveredHour(selectedTime);
    } else if (selectedTime && selectedHours.has(selectedTime)) {
      setSelectedHours((prev) => {
        const newSet = new Set(prev);
        newSet.delete(selectedTime);
        return newSet;
      });
      setLastHoveredHour(selectedTime);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setMouseDown(false);
    console.log('선택된 시간:', selectedHours);
  };

  return (
    <div>
      <Wrapper>
        {date}
        {timeIntervalArray.map((e, idx) => {
          return (
            <TimeSpan
              key={idx}
              data-timeinterval={e[0] + '-' + e[1]}
              selected={selectedHours.has(e[0] + '-' + e[1])}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            >
              {e[0] + '~' + e[1]}
            </TimeSpan>
          );
        })}
      </Wrapper>
    </div>
  );
};

function generateHours(startHour: number, endHour: number): string[] {
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

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100px',
});
