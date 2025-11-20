import styled from '@emotion/styled';
import { SectionHeading } from '@/shared/components/SectionHeading';
import { formatTextWithNewlines } from '@/shared/utils/textFormatting';

interface ClubDescriptionSectionProps {
  introductionOverview: string;
  introductionActivity: string;
  introductionIdeal: string;
}

export const ClubDescriptionSection = ({
  introductionOverview,
  introductionActivity,
  introductionIdeal,
}: ClubDescriptionSectionProps) => {
  return (
    <DescriptionContainer>
      <SectionHeading>동아리 소개</SectionHeading>
      <DescriptionText>{formatTextWithNewlines(introductionOverview)}</DescriptionText>

      <SectionHeading>활동 내용</SectionHeading>
      <DescriptionText>{formatTextWithNewlines(introductionActivity)}</DescriptionText>

      <SectionHeading>모집하는 사람</SectionHeading>
      <DescriptionText>{formatTextWithNewlines(introductionIdeal)}</DescriptionText>
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

const DescriptionText = styled.p(({ theme }) => ({
  fontSize: theme.font.size.base,
  lineHeight: 1.6,
  paddingBottom: '1.5rem',
  color: theme.colors.textPrimary,
  margin: 0,
}));
