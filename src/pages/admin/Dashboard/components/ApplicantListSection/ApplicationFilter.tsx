import styled from '@emotion/styled';
import { ApplicantFilterButton } from './ApplicationFilterButton';
import type { ApplicationFilterOption } from '@/types/dashboard';

export type Props = {
  option: ApplicationFilterOption;
  onOptionChange: (option: ApplicationFilterOption) => void;
};

export const ApplicationStatusFilter = ({ option, onOptionChange }: Props) => {
  return (
    <Wrapper>
      <ApplicantFilterButton
        value={'ALL'}
        label={'전체'}
        selected={option === 'ALL'}
        onClick={onOptionChange}
      />
      <ApplicantFilterButton
        value={'ACCEPTED'}
        label={'합격'}
        selected={option === 'ACCEPTED'}
        onClick={onOptionChange}
      />
      <ApplicantFilterButton
        value={'REJECTED'}
        label={'불합격'}
        selected={option === 'REJECTED'}
        onClick={onOptionChange}
      />
      <ApplicantFilterButton
        value={'PENDING'}
        label={'심사중'}
        selected={option === 'PENDING'}
        onClick={onOptionChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.nav({
  display: 'flex',
  gap: '7rem',
});
