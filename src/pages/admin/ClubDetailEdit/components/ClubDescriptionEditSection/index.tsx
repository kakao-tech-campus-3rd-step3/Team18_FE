import { SectionTitle } from '@/shared/components/SectionTitle';
import styled from '@emotion/styled';
import { useState } from 'react';
import { mockClubDetail } from '../mock';

export const ClubDescriptionEditSection = () => {
  const [introduce, setIntroduce] = useState(mockClubDetail.introductionOverview);
  const [activity, setActivity] = useState(mockClubDetail.introductionActivity);
  const [wannabe, setWannabe] = useState(mockClubDetail.introductionIdeal);

  return (
    <DescriptionContainer>
      <SectionTitle>동아리 소개</SectionTitle>
      <InputArea value={introduce} onChange={(e) => setIntroduce(e.target.value)} />

      <SectionTitle>활동 내용</SectionTitle>
      <InputArea value={activity} onChange={(e) => setActivity(e.target.value)} />

      <SectionTitle>모집하는 사람</SectionTitle>
      <InputArea value={wannabe} onChange={(e) => setWannabe(e.target.value)} />
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

const InputArea = styled.textarea(({ theme }) => ({
  fontSize: theme.font.size.sm,
  lineHeight: 1.6,
  padding: '0.75rem 1rem',
  borderRadius: theme.radius.md,
  border: `1px solid ${theme.colors.border}`,
  backgroundColor: theme.colors.bg,
  resize: 'vertical',
  minHeight: '100px',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',

  '&:focus': {
    outline: 'none',
    borderColor: theme.colors.primary,
    boxShadow: `0 0 0 2px ${theme.colors.primary}33`,
  },

  '&::placeholder': {
    color: theme.colors.textSecondary,
  },
}));
