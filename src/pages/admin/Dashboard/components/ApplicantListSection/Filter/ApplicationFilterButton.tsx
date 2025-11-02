import styled from '@emotion/styled';
import type { ApplicationFilterOption } from '@/pages/admin/Dashboard/types/dashboard';

type Props = {
  value: ApplicationFilterOption;
  label: string;
  selected: boolean;
  onClick: (value: ApplicationFilterOption) => void;
  className?: string;
};

export const ApplicantFilterButton = ({ label, value, selected, onClick }: Props) => {
  return (
    <Wrapper selected={selected} onClick={() => onClick(value)}>
      {label}
    </Wrapper>
  );
};

const Wrapper = styled.button<Pick<Props, 'selected'>>`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: ${({ theme, selected }) =>
    selected ? theme.font.weight.bold : theme.font.weight.regular};
  color: ${({ theme, selected }) => (selected ? theme.colors.primary : theme.colors.gray300)};
  transition: all 200ms ease-in-out;

  &.filter-pending {
    @media (max-width: 940px) {
      display: none;
    }
  }

  &.filter-rejected {
    @media (max-width: 850px) {
      display: none;
    }
  }

  &.filter-approved {
    @media (max-width: 760px) {
      display: none;
    }
  }

  &.filter-all {
    @media (max-width: 670px) {
      display: none;
    }
  }
`;
