import { useState } from 'react';
import { Button } from '@/shared/components/Button';
import { DatePickerRow } from './index.styled';
import { InterviewScheduleSelector } from './InterviewScheduleSelector';
import type { InterviewSchedule, SelectedInterviewValue } from '@/pages/user/Apply/type/apply';

type Props = {
  timeSlotOptions: InterviewSchedule[];
  onChange?: (value: SelectedInterviewValue) => void;
};

export const HorizontalInterviewScheduleSelector = ({ timeSlotOptions, onChange }: Props) => {
  const [selectedDateIdx, setSelectedDateIdx] = useState(0);

  return (
    <div>
      <DatePickerRow>
        {timeSlotOptions.map((schedule, idx) => (
          <Button
            key={idx}
            type='button'
            variant={selectedDateIdx === idx ? undefined : 'outline'}
            onClick={() => setSelectedDateIdx(idx)}
            width='7.5rem'
          >
            {schedule.date}
          </Button>
        ))}
      </DatePickerRow>

      {timeSlotOptions.map((schedule, idx) => (
        <div key={idx} style={{ display: selectedDateIdx === idx ? 'block' : 'none' }}>
          <InterviewScheduleSelector
            date={schedule.date}
            availableTime={schedule.availableTime}
            onChange={onChange}
          />
        </div>
      ))}
    </div>
  );
};
