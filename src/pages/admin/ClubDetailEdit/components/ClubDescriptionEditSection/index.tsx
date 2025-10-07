import styled from '@emotion/styled';
import { SectionTitle } from '@/shared/components/SectionTitle';
import { OutlineTextareaField } from '@/shared/components/Form/TextAreaField/OutlineTextareaField';
import { useFormContext } from 'react-hook-form';

interface ClubDescriptionEditSectionProps {}

export const ClubDescriptionEditSection = ({}: ClubDescriptionEditSectionProps) => {
  const { register, formState: { errors } } = useFormContext<{
    introductionOverview: string;
    introductionActivity: string;
    introductionIdeal: string;
  }>();

  return (
    <DescriptionContainer>
      <SectionTitle required>동아리 소개</SectionTitle>
      <OutlineTextareaField
        {...register('introductionOverview', { required: '동아리 소개를 입력해주세요.' })}
        invalid={!!errors.introductionOverview}
        message={errors.introductionOverview?.message}
        placeholder="동아리 소개를 입력하세요."
      />

      <SectionTitle required>활동 내용</SectionTitle>
      <OutlineTextareaField
        {...register('introductionActivity', { required: '활동 내용을 입력해주세요.' })}
        invalid={!!errors.introductionActivity}
        message={errors.introductionActivity?.message}
        placeholder="활동 내용을 입력하세요."
      />

      <SectionTitle required>모집하는 사람</SectionTitle>
      <OutlineTextareaField
        {...register('introductionIdeal', { required: '모집 대상을 입력해주세요.' })}
        invalid={!!errors.introductionIdeal}
        message={errors.introductionIdeal?.message}
        placeholder="모집 대상을 입력하세요."
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
