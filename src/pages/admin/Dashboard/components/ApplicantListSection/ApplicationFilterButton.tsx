import styled from '@emotion/styled';
import type { ApplicationFilterOption } from '@/types/dashboard';

type Props = {
  label: ApplicationFilterOption;
  selected: boolean;
  onClick: (value: ApplicationFilterOption) => void;
};

export const ApplicantFilterButton = ({ label, selected, onClick }: Props) => {
  return (
    <Wrapper selected={selected} onClick={() => onClick(label)}>
      {label}
    </Wrapper>
  );
};

const Wrapper = styled.button<Pick<Props, 'selected'>>(({ theme, selected }) => ({
  border: 'none',
  background: 'none',
  padding: '1.2rem 1rem',
  cursor: 'pointer',
  fontSize: '1.3rem',
  fontWeight: selected ? theme.font.weight.bold : theme.font.weight.regular,
  color: selected ? theme.colors.primary : theme.colors.gray300,
  transition: 'all 200ms ease-in-out',
}));
