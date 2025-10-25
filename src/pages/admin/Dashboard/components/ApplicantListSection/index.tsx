import styled from '@emotion/styled';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ApplicantList } from './ApplicantList';
import { ApplicationStatusFilter } from './ApplicationFilter';
import type { ApplicationFilterOption } from '@/pages/admin/Dashboard/types/dashboard';
import { Text } from '@/shared/components/Text';
import { StageToggle } from './StageToggle';
import type { ApplicationStage } from '@/pages/admin/Dashboard/types/dashboard';

export const ApplicantListSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const optionType = 'ALL' as ApplicationFilterOption;

  const [filterOption, setFilterOption] = useState<ApplicationFilterOption>(optionType);
  const [stage, setStage] = useState<ApplicationStage>('서류');

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
        <LeftSection>
          <Text size='xl' weight='medium'>
            지원자 목록
          </Text>
          <StageToggle value={stage} onChange={setStage} />
        </LeftSection>
        <ApplicationStatusFilter option={filterOption} onOptionChange={handleFilterOptionChange} />
      </ApplicantFilterTopBarWrapper>
      <ListWrapper>
        <ApplicantList filterOption={filterOption} />
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

const LeftSection = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '3rem',
});

const ListWrapper = styled.main(({ theme }) => ({
  backgroundColor: theme.colors.bg,
  minHeight: 'auto',
  padding: '2.6rem 3rem',
  borderRadius: theme.radius.lg,
}));
