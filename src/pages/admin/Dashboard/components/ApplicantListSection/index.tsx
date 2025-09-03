import styled from '@emotion/styled';
import { useState } from 'react';
import { ApplicationStatusFilter } from './ApplicationFilter';
import type { ApplicationFilterOption } from '@/types/dashboard';

export const ApplicantListSection = () => {
  const [filterOption, setFilterOption] = useState<ApplicationFilterOption>('전체');

  return (
    <>
      <ApplicantFilterTopBarWrapper>
        <PageTitle>지원자 관리</PageTitle>
        <ApplicationStatusFilter option={filterOption} onOptionChange={setFilterOption} />
      </ApplicantFilterTopBarWrapper>
    </>
  );
};

const ApplicantFilterTopBarWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '4.5rem',
  padding: '0 2rem',
});

const PageTitle = styled.h1(({ theme }) => ({
  fontSize: theme.font.size.xl,
  fontWeight: theme.font.weight.bold,
  color: theme.colors.textPrimary,
}));
