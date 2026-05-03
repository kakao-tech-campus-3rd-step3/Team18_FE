import styled from '@emotion/styled';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApplicants } from '@/pages/admin/Dashboard/hooks/useApplicants';
import { GuideIconButton } from '@/shared/components/GuideIconButton';
import { Text } from '@/shared/components/Text';
import { ApplicationStatusFilter } from './Filter/ApplicationFilter';
import { ApplicantList } from './List/ApplicantList';
import { StageToggle } from './StageToggle';
import type {
  ApplicationFilterOption,
  ApplicationStage,
} from '@/pages/admin/Dashboard/types/dashboard';

type ApplicantListSectionProps = {
  stage: ApplicationStage;
  setStage: React.Dispatch<React.SetStateAction<ApplicationStage>>;
  clubId: number;
  onOpenGuide?: () => void;
};

export const ApplicantListSection = ({
  stage,
  setStage,
  clubId,
  onOpenGuide,
}: ApplicantListSectionProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const optionType = 'ALL' as ApplicationFilterOption;

  const [filterOption, setFilterOption] = useState<ApplicationFilterOption>(optionType);

  const { interviewRequired } = useApplicants(clubId, 'INTERVIEW');

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
          <TitleWrapper>
            <Text size='xl' weight='medium'>
              지원자 목록
            </Text>
            {onOpenGuide && <GuideIconButton onClick={onOpenGuide} />}
          </TitleWrapper>
          {interviewRequired && <StageToggle value={stage} onChange={setStage} />}
        </LeftSection>
        <ApplicationStatusFilter
          option={filterOption}
          onOptionChange={handleFilterOptionChange}
          stage={stage}
          clubId={clubId}
        />
      </ApplicantFilterTopBarWrapper>
      <ListWrapper>
        <ApplicantList filterOption={filterOption} stage={stage} />
      </ListWrapper>
    </>
  );
};

const ApplicantFilterTopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4.5rem 0 1.5rem 0;
  padding: 0 1rem;

  @media (max-width: 940px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: 500px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const TitleWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

const ListWrapper = styled.main(({ theme }) => ({
  minHeight: 'auto',
  borderRadius: theme.radius.lg,
  border: `1.5px solid ${theme.colors.gray100}`,
}));
