import { SectionTitle } from '@/shared/components/SectionTitle';
import styled from '@emotion/styled';
import { useState } from 'react';
import { mockClubDetail } from '../mock';

export const ClubDescriptionEditSection = () => {
  const [introduce, setIntroduce] = useState(mockClubDetail.introductionIntroduce);
  const [activity, setActivity] = useState(mockClubDetail.introductionActivity);
  const [wannabe, setWannabe] = useState(mockClubDetail.introductionWannabe);

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
  margin: 0,
  padding: '0.5rem',
  borderRadius: theme.radius.sm,
  border: `1px solid ${theme.colors.gray300}`,
  resize: 'vertical',
  minHeight: '80px',
}));
