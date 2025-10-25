import { Global } from '@emotion/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import { Dropdown } from '@/shared/components/Dropdown';
import { Text } from '@/shared/components/Text';
import { useTimeslotState } from '@/pages/admin/ApplicationFormBuilder/hooks/useTimeslotState';
import { generateTimes } from '@/pages/admin/ApplicationFormBuilder/utils/generateTimes';
import { datePickerStyles } from './styles/datepicker.styled';
import * as S from './styles/timeslot.styled';

const times = generateTimes();

const CustomInput = ({ value, onClick }: any) => (
  <S.CustomInputWrapper onClick={onClick}>
    <Text color='#757575'>{value || '날짜를 선택하세요'}</Text>
  </S.CustomInputWrapper>
);

export const TimeslotFieldBuilder = () => {
  const {
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    startDate,
    endDate,
    formatDateRange,
    handleDateChange,
  } = useTimeslotState();

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
          />
        </S.DatePickerWrapper>

        <S.TimeSelectContainer>
          <S.TimeSelectWrapper>
            <Text color='#6E6E6E'>시작시간</Text>
            <Dropdown value={startTime} onSelect={setStartTime} options={times} />
          </S.TimeSelectWrapper>
          <S.TimeSelectWrapper>
            <Text color='#6E6E6E'>마감시간</Text>
            <Dropdown value={endTime} onSelect={setEndTime} options={times} />
          </S.TimeSelectWrapper>
        </S.TimeSelectContainer>
      </S.Layout>
    </>
  );
};
