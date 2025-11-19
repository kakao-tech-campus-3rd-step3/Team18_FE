import styled from '@emotion/styled';
import { AiOutlinePlusCircle } from 'react-icons/ai';

type Props = {
  onClick: () => void;
};

export const AddFieldButton = ({ onClick }: Props) => {
  return (
    <StyledButton type='button' onClick={() => onClick()}>
      <AiOutlinePlusCircle />
      <span>항목 추가</span>
    </StyledButton>
  );
};

const StyledButton = styled.button(({ theme }) => ({
  width: '100%',
  marginTop: '2rem',
  padding: '1rem',
  border: `1.5px dotted ${theme.colors.gray400}`,
  borderRadius: theme.radius.sm,
  backgroundColor: theme.colors.bg,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  color: theme.colors.textPrimary,
  fontSize: '0.95rem',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',

  '&:hover': {
    backgroundColor: theme.colors.gray100,
  },
  height: '2.8rem',

  svg: {
    fontSize: '1.25rem',
  },

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    marginTop: '1.5rem',
    padding: '0.75rem',
    fontSize: '0.875rem',
    height: '2.5rem',

    svg: {
      fontSize: '1.1rem',
    },
  },
}));
