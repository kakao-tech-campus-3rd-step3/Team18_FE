import { format } from 'date-fns';
import { useState } from 'react';
import type { UseFormSetValue } from 'react-hook-form';
import type { ApplicationForm } from '@/pages/admin/ApplicationFormBuilder/types/fieldType';

type UseTimeslotStateProps = {
  setValue?: UseFormSetValue<ApplicationForm>;
  fieldName?: string;
};

export const useTimeslotState = ({
  setValue,
  fieldName = 'recruitDate',
}: UseTimeslotStateProps = {}) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

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

    // ✅ 동적 필드명으로 setValue 호출
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
