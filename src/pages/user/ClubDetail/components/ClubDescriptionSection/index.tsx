import React from 'react';
import { SectionTitle } from '@/shared/components/SectionTitle';
import styled from '@emotion/styled';
import { mockClubDetail } from '../mock';

const ClubDescriptionSection: React.FC = () => {
  return (
    <DescriptionContainer>
      <SectionTitle>동아리 소개</SectionTitle>
      <DescriptionText>{mockClubDetail.introductionIntroduce}</DescriptionText>

      <SectionTitle>활동 내용</SectionTitle>
      <DescriptionText>{mockClubDetail.introductionActivity}</DescriptionText>

      <SectionTitle>모집하는 사람</SectionTitle>
      <DescriptionText>{mockClubDetail.introductionWannabe}</DescriptionText>
    </DescriptionContainer>
  );
};

export default ClubDescriptionSection;

const DescriptionContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.bg,
  padding: '16px',
  borderRadius: theme.radius.md,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}));

const DescriptionText = styled.p(({ theme }) => ({
  fontSize: theme.font.size.sm,
  lineHeight: 1.6,
  margin: 0,
}));
