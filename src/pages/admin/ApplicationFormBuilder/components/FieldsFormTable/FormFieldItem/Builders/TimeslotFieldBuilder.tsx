import { Dropdown } from '@/shared/components/Dropdown';
import { useState } from 'react';
import { Text } from '@/shared/components/Text';
import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import { Global, css } from '@emotion/react';

const times = Array.from({ length: 24 }, (_, i) => {
  const hour = i % 12 === 0 ? 12 : i % 12;
  const period = i < 12 ? 'AM' : 'PM';
  return `${hour}:00 ${period}`;
});

export const TimeslotFieldBuilder = () => {
  const [startTime, setStartTime] = useState('12:00 AM');
  const [endTime, setEndTime] = useState('12:00 AM');
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  const formatDateRange = () => {
    if (!startDate) return '';
    if (!endDate)
      return startDate.toLocaleDateString('ko-KR').replace(/\./g, '').replace(/ /g, '.');

    const start = startDate.toLocaleDateString('ko-KR').replace(/\./g, '').replace(/ /g, '.');
    const end = endDate.toLocaleDateString('ko-KR').replace(/\./g, '').replace(/ /g, '.');
    return `${start} ~ ${end}`;
  };

  return (
    <>
      <Global styles={datePickerStyles} />
      <Layout>
        <DatePickerWrapper>
          <DatePicker
            locale={ko}
            dateFormat='yyyy.MM.dd'
            selected={startDate}
            onChange={(dates) => {
              const [start, end] = dates as [Date | null, Date | null];
              setStartDate(start);
              setEndDate(end);
            }}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            customInput={<CustomInput value={formatDateRange()} />}
            popperPlacement='bottom'
          />
        </DatePickerWrapper>

        <TimeSelectContainer>
          <TimeSelectWrapper>
            <Text color='#6E6E6E'>시작시간</Text>
            <Dropdown
              value={startTime}
              onSelect={(newOption) => setStartTime(newOption)}
              options={times}
              width='8rem'
            />
          </TimeSelectWrapper>
          <TimeSelectWrapper>
            <Text color='#6E6E6E'>마감시간</Text>
            <Dropdown
              value={endTime}
              onSelect={(newOption) => setEndTime(newOption)}
              options={times}
              width='8rem'
            />
          </TimeSelectWrapper>
        </TimeSelectContainer>
      </Layout>
    </>
  );
};
const datePickerStyles = css`
  .react-datepicker__day--selected,
  .react-datepicker__day--range-start,
  .react-datepicker__day--range-end {
    background-color: #00782c !important;
    color: #fff !important;
  }

  .react-datepicker__day--in-range {
    background-color: rgba(0, 120, 44, 0.2) !important;
    color: #333 !important;
  }

  .react-datepicker__day--selected:hover,
  .react-datepicker__day--range-start:hover,
  .react-datepicker__day--range-end:hover {
    background-color: #005a21 !important;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: rgba(0, 120, 44, 0.3) !important;
  }

  .react-datepicker__day:hover {
    background-color: rgba(0, 120, 44, 0.15) !important;
  }

  .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {
    background-color: rgba(0, 120, 44, 0.3) !important;
  }

  .react-datepicker__day--selecting-range-start,
  .react-datepicker__day--selecting-range-end {
    background-color: #00782c !important;
    color: #fff !important;
  }
`;

const CustomInput = ({ value, onClick }: any) => (
  <CustomInputWrapper onClick={onClick}>
    <Text color='#757575'>{value || '날짜를 선택하세요'}</Text>
  </CustomInputWrapper>
);

const Layout = styled.div({
  display: 'flex',
});

const DatePickerWrapper = styled.div({
  position: 'relative',
});

const CustomInputWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '15rem',
  padding: '0.75rem 1rem',
  borderBottom: `1px solid ${theme.colors.gray200}`,
  backgroundColor: theme.colors.bg,
  cursor: 'pointer',
  position: 'relative',

  '&::after': {
    content: '"⌵"',
    position: 'absolute',
    top: '6px',
    right: '13px',
    color: theme.colors.textSecondary,
    fontSize: '22px',
    fontWeight: 'bold',
  },
}));

const TimeSelectContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const TimeSelectWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});
