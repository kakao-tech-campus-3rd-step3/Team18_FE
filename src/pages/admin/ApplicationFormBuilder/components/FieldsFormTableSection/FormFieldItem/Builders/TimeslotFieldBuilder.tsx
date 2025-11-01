import { Global } from '@emotion/react';
import { ko } from 'date-fns/locale';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useTimeslotState } from '@/pages/admin/ApplicationFormBuilder/hooks/useTimeslotState';
import { generateTimes } from '@/pages/admin/ApplicationFormBuilder/utils/generateTimes';
import { Dropdown } from '@/shared/components/Dropdown';
import { Text } from '@/shared/components/Text';
import { datePickerStyles } from '@/pages/admin/ApplicationFormBuilder/styles/datepicker.styled';
import * as S from '@/pages/admin/ApplicationFormBuilder/styles/timeslot.styled';
import type { CustomInputProps } from '@/pages/admin/ApplicationFormBuilder/types/clubInfo';
import type { UseFormReturn } from 'react-hook-form';
import type { ApplicationForm } from '@/pages/admin/ApplicationFormBuilder/types/fieldType';

type Props = {
  formHandler: UseFormReturn<ApplicationForm>;
  questionIndex: number;
  isEditMode: boolean;
};

const times = generateTimes();

const CustomInput = ({ value, onClick }: CustomInputProps) => (
  <S.CustomInputWrapper onClick={onClick}>
    <Text color='#757575'>{value || '날짜를 선택하세요'}</Text>
  </S.CustomInputWrapper>
);

export const TimeslotFieldBuilder = ({ formHandler, questionIndex, isEditMode }: Props) => {
  const { register, setValue, watch } = formHandler;

  const timeSlotDate = watch(`formQuestions.${questionIndex}.timeSlotOptions.date`);

  const { startDate, endDate, formatDateRange, handleDateChange } = useTimeslotState({
    setValue,
    fieldName: `formQuestions.${questionIndex}.timeSlotOptions.date`,
    initialDateRange: timeSlotDate,
  });

  const currentStartTime =
    watch(`formQuestions.${questionIndex}.timeSlotOptions.availableTime.start`) || '7:00';

  const currentEndTime =
    watch(`formQuestions.${questionIndex}.timeSlotOptions.availableTime.end`) || '7:00';

  const handleStartTimeSelect = (newTime: string) => {
    setValue(`formQuestions.${questionIndex}.timeSlotOptions.availableTime.start`, newTime);
  };

  const handleEndTimeSelect = (newTime: string) => {
    setValue(`formQuestions.${questionIndex}.timeSlotOptions.availableTime.end`, newTime);
  };

  return (
    <>
      <Global styles={datePickerStyles} />
      <S.Layout>
        <S.DatePickerWrapper>
          <DatePicker
            locale={ko}
            dateFormat='yyyy.MM.dd'
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            customInput={<CustomInput value={formatDateRange()} />}
            popperPlacement='bottom'
            disabled={!isEditMode}
          />
          <input
            type='hidden'
            {...register(`formQuestions.${questionIndex}.timeSlotOptions.date`, {
              required: '모집 기간을 선택해주세요',
            })}
          />
        </S.DatePickerWrapper>

        <S.TimeSelectContainer>
          <S.TimeSelectWrapper>
            <Text color='#6E6E6E'>시작시간</Text>
            <Dropdown
              value={currentStartTime}
              onSelect={handleStartTimeSelect}
              options={times}
              disabled={!isEditMode}
            />
          </S.TimeSelectWrapper>
          <S.TimeSelectWrapper>
            <Text color='#6E6E6E'>마감시간</Text>
            <Dropdown
              value={currentEndTime}
              onSelect={handleEndTimeSelect}
              options={times}
              disabled={!isEditMode}
            />
          </S.TimeSelectWrapper>
        </S.TimeSelectContainer>
      </S.Layout>
    </>
  );
};
