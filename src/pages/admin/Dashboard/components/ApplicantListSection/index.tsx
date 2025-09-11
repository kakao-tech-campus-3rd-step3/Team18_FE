import styled from '@emotion/styled';
import { useState } from 'react';
import { ApplicationStatusFilter } from './ApplicationFilter';
import { ApplicantList } from './ApplicantList';
import type { ApplicationFilterOption } from '@/types/dashboard';
import { useSearchParams } from 'react-router-dom';

export const ApplicantListSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const optionType = 'ALL' as ApplicationFilterOption;

  const [filterOption, setFilterOption] = useState<ApplicationFilterOption>(optionType);

  const handleFilterOptionChange = (option: ApplicationFilterOption) => {
    setFilterOption(option);

    searchParams.set('optionType', option);
    setSearchParams(searchParams, {
      replace: true,
    });
  };

  return (
    <>
      <ApplicantFilterTopBarWrapper>
        <PageTitle>지원자 관리</PageTitle>
        <ApplicationStatusFilter option={filterOption} onOptionChange={handleFilterOptionChange} />
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
