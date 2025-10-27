import styled from '@emotion/styled';
import { useApplicants } from '@/pages/admin/Dashboard/hooks/useApplicants';
import { ApplicantFilterButton } from './ApplicationFilterButton';
import type {
  ApplicationFilterOption,
  ApplicationStage,
} from '@/pages/admin/Dashboard/types/dashboard';

export type Props = {
  option: ApplicationFilterOption;
  onOptionChange: (option: ApplicationFilterOption) => void;
  stage: ApplicationStage;
};

export const ApplicationStatusFilter = ({ option, onOptionChange, stage }: Props) => {
  const apiStage = stage === '서류' ? 'INTERVIEW' : 'FINAL';
  const { counts } = useApplicants(1, apiStage);

  return (
    <Wrapper>
      <ApplicantFilterButton
        value={'ALL'}
        label={`전체 (${counts.ALL})`}
        selected={option === 'ALL'}
        onClick={onOptionChange}
      />
      <ApplicantFilterButton
        value={'APPROVED'}
        label={`합격 (${counts.APPROVED})`}
        selected={option === 'APPROVED'}
        onClick={onOptionChange}
      />
      <ApplicantFilterButton
        value={'REJECTED'}
        label={`불합격 (${counts.REJECTED})`}
        selected={option === 'REJECTED'}
        onClick={onOptionChange}
      />
      <ApplicantFilterButton
        value={'PENDING'}
        label={`심사중 (${counts.PENDING})`}
        selected={option === 'PENDING'}
        onClick={onOptionChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.nav({
  display: 'flex',
  gap: '4rem',
});
