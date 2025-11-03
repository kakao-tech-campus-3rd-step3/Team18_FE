import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import type { UseFormSetValue } from 'react-hook-form';
import type { ApplicationFormData } from '@/pages/admin/ApplicationFormBuilder/types/fieldType';

type UseTimeslotStateProps = {
  setValue?: UseFormSetValue<ApplicationFormData>;
  fieldName?: string;
  initialDateRange?: string;
};

const parseDateRange = (dateRangeString?: string): [Date | null, Date | null] => {
  if (!dateRangeString) {
    return [null, null];
  }
  const parts = dateRangeString.split(' ~ ');
  const start = parts[0] ? new Date(parts[0]) : null;
  const end = parts[1] ? new Date(parts[1]) : null;
  return [start, end];
};

export const useTimeslotState = ({
  setValue,
  fieldName = 'recruitDate',
  initialDateRange,
}: UseTimeslotStateProps = {}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    const [start, end] = parseDateRange(initialDateRange);
    setStartDate(start);
    setEndDate(end);
  }, [initialDateRange]);

  const formatDateRange = () => {
    if (!startDate) return '';
    if (!endDate) {
      return format(startDate, 'yyyy-MM-dd');
    }

    const start = format(startDate, 'yyyy-MM-dd');
    const end = format(endDate, 'yyyy-MM-dd');
    return `${start} ~ ${end}`;
  };

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (setValue && start && end) {
      const dateRange = `${format(start, 'yyyy-MM-dd')} ~ ${format(end, 'yyyy-MM-dd')}`;
      setValue(fieldName as any, dateRange, { shouldValidate: true });
    }
  };

  return {
    startDate,
    endDate,
    formatDateRange,
    handleDateChange,
  };
};
