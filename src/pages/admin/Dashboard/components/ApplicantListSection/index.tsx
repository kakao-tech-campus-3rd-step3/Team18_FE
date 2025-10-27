import styled from '@emotion/styled';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ApplicantList } from './List/ApplicantList';
import { ApplicationStatusFilter } from './Filter/ApplicationFilter';
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
        <ApplicationStatusFilter
          option={filterOption}
          onOptionChange={handleFilterOptionChange}
          stage={stage}
        />
      </ApplicantFilterTopBarWrapper>
      <ListWrapper>
        <ApplicantList filterOption={filterOption} stage={stage} />
      </ListWrapper>
    </>
  );
};

const ApplicantFilterTopBarWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '4.5rem 0 1.5rem 0',
  padding: '0 1rem',
});

const LeftSection = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '3rem',
});

const ListWrapper = styled.main(({ theme }) => ({
  minHeight: 'auto',
  borderRadius: theme.radius.lg,
  border: `1.5px solid ${theme.colors.gray100}`,
}));
