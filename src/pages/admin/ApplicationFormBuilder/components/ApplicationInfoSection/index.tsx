import styled from '@emotion/styled';
import { UnderlineInputField } from '@/shared/components/Form/InputField/UnderlineInputField';
import { useTimeslotState } from '@/pages/admin/ApplicationFormBuilder/hooks/useTimeslotState';
import { ko } from 'date-fns/locale';
import { datePickerStyles } from '@/pages/admin/ApplicationFormBuilder/styles/datepicker.styled';
import * as S from '@/pages/admin/ApplicationFormBuilder/styles/timeslot.styled';
import DatePicker from 'react-datepicker';
import { Text } from '@/shared/components/Text';
import { Global } from '@emotion/react';
import type { CustomInputProps } from '@/pages/admin/ApplicationFormBuilder/types/clubInfo';

const CustomInput = ({ value, onClick }: CustomInputProps) => (
  <S.CustomInputWrapper onClick={onClick}>
    <Text color='#757575' size='sm'>
      {value || '날짜를 선택하세요'}
    </Text>
  </S.CustomInputWrapper>
);

export const ApplicationInfoSection = () => {
  const { startDate, endDate, formatDateRange, handleDateChange } = useTimeslotState();

  return (
    <>
      <Global styles={datePickerStyles} />
      <Layout>
        <Wrapper>
          <UnderlineInputField placeholder='ex. 동아리명 10기 신입부원 모집' />
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
        </Wrapper>
        <UnderlineInputField placeholder='한줄 소개 작성해주세요.' />
      </Layout>
    </>
  );
};

const Layout = styled.div(({ theme }) => ({
  width: '100%',
  border: `1px solid ${theme.colors.gray200}`,
  borderRadius: theme.radius.sm,
  padding: '1.5rem ',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  boxSizing: 'border-box',
}));

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: '1.5rem',
  width: '100%',
});
