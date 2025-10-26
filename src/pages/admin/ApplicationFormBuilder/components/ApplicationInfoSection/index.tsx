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
import type { UseFormReturn } from 'react-hook-form';
import type { ApplicationForm } from '@/pages/admin/ApplicationFormBuilder/types/fieldType';

type Props = {
  formHandler: UseFormReturn<ApplicationForm>;
};

const CustomInput = ({ value, onClick }: CustomInputProps) => (
  <S.CustomInputWrapper onClick={onClick}>
    <Text color='#757575' size='sm'>
      {value || '날짜를 선택하세요'}
    </Text>
  </S.CustomInputWrapper>
);

export const ApplicationInfoSection = ({ formHandler }: Props) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = formHandler;
  const { startDate, endDate, formatDateRange, handleDateChange } = useTimeslotState({ setValue });

  return (
    <>
      <Global styles={datePickerStyles} />
      <Layout>
        <Wrapper>
          <UnderlineInputField
            placeholder='ex. 동아리명 10기 신입부원 모집'
            {...register('title', {
              required: '동아리제목을 입력해주세요',
              minLength: {
                value: 1,
                message: '동아리 제목은 최소 한 글자 이상 입력해야 합니다.',
              },
            })}
            invalid={!!errors.title}
            message={errors.title?.message}
          />
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
            <input
              type='hidden'
              {...register('recruitDate', {
                required: '모집 기간을 선택해주세요',
              })}
            />
          </S.DatePickerWrapper>
        </Wrapper>
        <UnderlineInputField
          placeholder='한줄 소개 작성해주세요.'
          {...register('description', {
            required: '한줄 소개를 작성해주세요.',
            minLength: { value: 1, message: '한줄 소개는 최소 한 글자 이상 입력해야 합니다. ' },
          })}
          invalid={!!errors.description}
          message={errors.description?.message}
        />
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
