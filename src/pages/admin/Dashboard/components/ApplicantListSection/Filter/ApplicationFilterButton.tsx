import styled from '@emotion/styled';
import type { ApplicationFilterOption } from '@/pages/admin/Dashboard/types/dashboard';

type Props = {
  value: ApplicationFilterOption;
  label: string;
  selected: boolean;
  onClick: (value: ApplicationFilterOption) => void;
};

export const ApplicantFilterButton = ({ label, value, selected, onClick }: Props) => {
  return (
    <Wrapper selected={selected} onClick={() => onClick(value)}>
      {label}
    </Wrapper>
  );
};

const Wrapper = styled.button<Pick<Props, 'selected'>>(({ theme, selected }) => ({
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  fontSize: '1.2rem',
  fontWeight: selected ? theme.font.weight.bold : theme.font.weight.regular,
  color: selected ? theme.colors.primary : theme.colors.gray300,
  transition: 'all 200ms ease-in-out',
}));
