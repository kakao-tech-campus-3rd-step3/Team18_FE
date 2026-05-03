import styled from '@emotion/styled';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';

type Props = {
  onClick: () => void;
};

export const GuideIconButton = ({ onClick }: Props) => (
  <Button type='button' onClick={onClick}>
    <HiOutlineQuestionMarkCircle size={20} />
  </Button>
);

const Button = styled.button(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: theme.colors.textSecondary,
  padding: '0.25rem',
  borderRadius: '50%',
  flexShrink: 0,
  transition: 'color 0.15s',
  '&:hover': { color: theme.colors.primary },
}));
