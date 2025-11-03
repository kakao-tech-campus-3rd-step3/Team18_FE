import type { UseFormReturn } from 'react-hook-form';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { ko } from 'date-fns/locale';
import DatePicker from 'react-datepicker';
import { useTimeslotState } from '@/pages/admin/ApplicationFormBuilder/hooks/useTimeslotState';
import { datePickerStyles } from '@/pages/admin/ApplicationFormBuilder/styles/datepicker.styled';
import * as S from '@/pages/admin/ApplicationFormBuilder/styles/timeslot.styled';
import { UnderlineInputField } from '@/shared/components/Form/InputField/UnderlineInputField';
import { Text } from '@/shared/components/Text';
import type { CustomInputProps } from '@/pages/admin/ApplicationFormBuilder/types/clubInfo';
import type { ApplicationFormData } from '@/pages/admin/ApplicationFormBuilder/types/fieldType';

type Props = {
  formHandler: UseFormReturn<ApplicationFormData>;
  isEditMode: boolean;
};

const CustomInput = ({ value, onClick }: CustomInputProps) => (
  <S.CustomInputWrapper onClick={onClick}>
    <Text color='#757575' size='sm'>
      {value || '날짜를 선택하세요'}
    </Text>
  </S.CustomInputWrapper>
);

export const ApplicationInfoSection = ({ formHandler, isEditMode }: Props) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = formHandler;

  const recruitDate = watch('recruitDate');

  const { startDate, endDate, formatDateRange, handleDateChange } = useTimeslotState({
    initialDateRange: recruitDate,
    setValue,
  });

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
            disabled={!isEditMode}
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
              disabled={!isEditMode}
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
          disabled={!isEditMode}
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
