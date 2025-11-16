import styled from '@emotion/styled';
import { SectionTitle } from '@/shared/components/SectionTitle';
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
      <SectionTitle>동아리 소개</SectionTitle>
      <DescriptionText>{formatTextWithNewlines(introductionOverview)}</DescriptionText>

      <SectionTitle>활동 내용</SectionTitle>
      <DescriptionText>{formatTextWithNewlines(introductionActivity)}</DescriptionText>

      <SectionTitle>모집하는 사람</SectionTitle>
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
  margin: 0,
}));
