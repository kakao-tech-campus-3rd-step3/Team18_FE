import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';
import { OutlineInputField } from '@/shared/components/Form/InputField/OutlineInputField';
import { SectionHeading } from '@/shared/components/SectionHeading';
import { Text } from '@/shared/components/Text';

export const ClubShortIntroductionEditSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<{ shortIntroduction: string }>();

  const maxLength = 50;

  return (
    <ShortIntroContainer>
      <SectionHeading required>동아리 한줄 소개</SectionHeading>
      <OutlineInputField
        {...register('shortIntroduction', {
          required: '한줄 소개를 입력해주세요.',
          maxLength: { value: maxLength, message: `${maxLength}자 이하로 입력해주세요.` },
        })}
        invalid={!!errors.shortIntroduction}
        message={errors.shortIntroduction?.message}
        placeholder='동아리를 한 문장으로 소개해주세요.'
      />
      <Text size='sm' color='#b0b3ba'>
        - 메인에서 보여지는 동아리의 설명입니다.
      </Text>
    </ShortIntroContainer>
  );
};

const ShortIntroContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.bg,
  paddingTop: '16px',
  paddingBottom: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
}));
