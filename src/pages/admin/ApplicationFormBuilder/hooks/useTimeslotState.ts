import { useState } from 'react';
import { format } from 'date-fns';

export const useTimeslotState = () => {
  const [startTime, setStartTime] = useState('12:00 AM');
  const [endTime, setEndTime] = useState('12:00 AM');
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  const formatDateRange = () => {
    if (!startDate) return '';
    if (!endDate) {
      return format(startDate, 'yyyy.MM.dd');
    }

    const start = format(startDate, 'yyyy.MM.dd');
    const end = format(endDate, 'yyyy.MM.dd');
    return `${start} ~ ${end}`;
  };

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return {
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    startDate,
    endDate,
    formatDateRange,
    handleDateChange,
  };
};
