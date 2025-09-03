import styled from '@emotion/styled';
import { ApplicantFilterButton } from './ApplicationFilterButton';
import type { ApplicationFilterOption } from '@/types/dashboard';

export type Props = {
  option: ApplicationFilterOption;
  onOptionChange: (option: ApplicationFilterOption) => void;
};

const FILTER_OPTIONS: ApplicationFilterOption[] = ['전체', '검토중', '승인됨', '거절됨'];

export const ApplicationStatusFilter = ({ option, onOptionChange }: Props) => {
  return (
    <Wrapper>
      {FILTER_OPTIONS.map((label) => (
        <ApplicantFilterButton
          key={label}
          label={label}
          selected={option === label}
          onClick={onOptionChange}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.nav({
  display: 'flex',
  gap: '7rem',
});
