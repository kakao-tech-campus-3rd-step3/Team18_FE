import styled from '@emotion/styled';
import { useState } from 'react';
import { ApplicationStatusFilter } from './ApplicationFilter';
import { ApplicantList } from './ApplicantList';
import type { ApplicationFilterOption } from '@/pages/admin/Dashboard/types/dashboard';

export const ApplicantListSection = () => {
  const [filterOption, setFilterOption] = useState<ApplicationFilterOption>('전체');

  return (
    <>
      <ApplicantFilterTopBarWrapper>
        <PageTitle>지원자 관리</PageTitle>
        <ApplicationStatusFilter option={filterOption} onOptionChange={setFilterOption} />
      </ApplicantFilterTopBarWrapper>
      <ListWrapper>
        <ApplicantList />
      </ListWrapper>
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

const ListWrapper = styled.main(({ theme }) => ({
  backgroundColor: theme.colors.bg,
  minHeight: 'auto',
  padding: '2.6rem 3rem',
  borderRadius: theme.radius.lg,
}));
