import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';
import { OutlineTextareaField } from '@/shared/components/Form/TextAreaField/OutlineTextareaField';
import { SectionHeading } from '@/shared/components/SectionHeading';

export const ClubDescriptionEditSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<{
    introductionOverview: string;
    introductionActivity: string;
    introductionIdeal: string;
  }>();

  const maxLength = 1200;

  return (
    <DescriptionContainer>
      <SectionHeading required>동아리 소개</SectionHeading>
      <OutlineTextareaField
        {...register('introductionOverview', {
          required: '동아리 소개를 입력해주세요.',
          maxLength: { value: maxLength, message: `${maxLength}자 이하로 입력해주세요.` },
        })}
        invalid={!!errors.introductionOverview}
        message={errors.introductionOverview?.message}
        placeholder='동아리 소개를 입력하세요.'
      />

      <SectionHeading required>활동 내용</SectionHeading>
      <OutlineTextareaField
        {...register('introductionActivity', {
          required: '활동 내용을 입력해주세요.',
          maxLength: { value: maxLength, message: `${maxLength}자 이하로 입력해주세요.` },
        })}
        invalid={!!errors.introductionActivity}
        message={errors.introductionActivity?.message}
        placeholder='활동 내용을 입력하세요.'
      />

      <SectionHeading required>모집하는 사람</SectionHeading>
      <OutlineTextareaField
        {...register('introductionIdeal', {
          required: '모집 대상을 입력해주세요.',
          maxLength: { value: maxLength, message: `${maxLength}자 이하로 입력해주세요.` },
        })}
        invalid={!!errors.introductionIdeal}
        message={errors.introductionIdeal?.message}
        placeholder='모집 대상을 입력하세요.'
      />
    </DescriptionContainer>
  );
};

const DescriptionContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.bg,
  padding: '16px',
  borderRadius: theme.radius.md,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}));
