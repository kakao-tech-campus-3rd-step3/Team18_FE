import styled from '@emotion/styled';
import { useState } from 'react';
import { parseTime } from '@/pages/user/Apply/utils/time';
import { TimeSpan } from './index.styled';
import type { AvailableTime } from '@/pages/user/Apply/type/apply';

type InterviewSchedule = {
  date: string;
  availableTime: AvailableTime;
};

export const InterviewSchedule = ({ availableTime, date }: InterviewSchedule) => {
  const startNum = parseTime(availableTime.start);
  const endNum = parseTime(availableTime.end);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedHours, setSelectedHours] = useState<Set<string>>(new Set());
  const [lastHoveredHour, setLastHoveredHour] = useState<string | null>(null);

  const hoursArray = generateHours(startNum, endNum);

  const handleMouseDown = (e: React.MouseEvent<HTMLSpanElement>) => {
    setIsDragging(true);
    const hour = e.currentTarget.dataset.hour;
    if (!hour) return;

    if (selectedHours.has(hour)) {
      selectedHours.delete(hour);
      return;
    }
    setSelectedHours((prev) => new Set([...prev, hour]));
    setLastHoveredHour(hour);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!isDragging) return;

    const hour = e.currentTarget.dataset.hour;
    if (hour === lastHoveredHour) return;
    if (hour && !selectedHours.has(hour)) {
      setSelectedHours((prev) => new Set([...prev, hour]));
      setLastHoveredHour(hour);
    } else if (hour && selectedHours.has(hour)) {
      selectedHours.delete(hour);
      setLastHoveredHour(hour);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    console.log('선택된 시간:', selectedHours);
  };

  return (
    <div>
      <Wrapper>
        {date}
        {hoursArray.map((e, idx) => {
          return (
            <TimeSpan
              key={idx}
              data-hour={e}
              selected={selectedHours.has(e)}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            >
              {e}
            </TimeSpan>
          );
        })}
      </Wrapper>
    </div>
  );
};

function generateHours(startHour: number, endHour: number) {
  const hours: string[] = [];

  for (let h = startHour; h <= endHour; h++) {
    const hourStr = h.toString().padStart(2, '0') + ':00';

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
